import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import VideoPlayer from "react-native-video-player";
import { useDispatch, useSelector } from "react-redux";
import { getSessionByCategoryId } from "../../api/sessions";
import ScreenHeader from "../../components/ScreenHeader";
import StyledButton from "../../components/StyledButton";
import SaveIcon from "../../components/svg/SaveIcon";
import FavoriteOutlineIcon from "../../components/svg/FavoriteOutlineIcon";
import ShareIcon from "../../components/svg/ShareIcon";
import Colors from "../../constants/Colors";
import { quranSessions } from "../../data/sessions";
import Icon from "react-native-vector-icons/Ionicons";
import {
  setIsSessionVideoLoading,
  setSession,
} from "../../redux/actions/sessionsActions";
import { baseUrl } from "../../../app.json";
import { styles } from "./style";
import { fontScale, scale } from "react-native-utils-scale";
import {onShare, saveSessionVideo} from "../../utils/savers";
import {
  addToFavorites,
  addToSessionsFavorites,
  removeFromFavorites,
  removeFromSessionsFavorites,
} from "../../redux/actions/favoritesActions";
import { sessionVideoFavoriteObject } from "../../utils/mappers";
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";
import { SafeAreaView } from "react-native";

const SessionVideoLectureScreen = (props) => {
  const { sessionId, sessionName } = props.route.params;
  const [sectionIndex, setSectionIndex] = useState(0);
  const { isSessionVideoLoading, session } = useSelector(
    (state) => state.Sessions
  );
  const {
    favorites,
    // sessionsFavorites
  } = useSelector((state) => state.Favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsSessionVideoLoading(true));
    getSessionByCategoryId(sessionId, {
      success: (res) => {
        dispatch(setIsSessionVideoLoading(false));
        dispatch(setSession(res.data));
      },
      error: (error) => {
        dispatch(setIsSessionVideoLoading(false));
        console.log("Get Session By Category Id Error:", error);
      },
    });
  }, []);

  const { container } = styles;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "#000825",
      }}
    >
      <View style={container}>
        <StatusBar
          barStyle="light-content"
          animated
          backgroundColor="#000825"
        />
        <ScreenHeader
          hasBackButton
          replaceMenu
          onBackPress={() => props.navigation.goBack()}
        />
        {isSessionVideoLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            <ActivityIndicator size={52} color="#011132" />
          </View>
        ) : (
          <ImageBackground
            source={require("../../assets/images/app-background.png")}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              paddingHorizontal: scale(16),
              // backgroundColor: Colors.SeaGreen,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                // justifyContent: 'flex-end',
                alignSelf: "stretch",
                marginHorizontal: scale(16),
                marginVertical: scale(10),
                // backgroundColor: Colors.SeaGreen,
              }}
            >
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#011132",
                }}
              >
                {sessionName}
              </Text>
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                }}
              >
                المجالس:{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                // paddingHorizontal: 16,
              }}
            >
              <View
                style={{
                  alignSelf: "stretch",
                  marginVertical: scale(8),
                  // backgroundColor: Colors.Blue,
                }}
              >
                <VideoPlayer
                  video={{
                    uri: `${
                      session.file
                        ? session.file.startsWith("/")
                          ? session.file.slice(1)
                          : session.file
                        : ""
                    }`,
                  }}
                  thumbnail={require("../../assets/images/tafsir-list-item-placeholder.png")}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    paddingHorizontal: scale(32),
                  }}
                >
                  <View style={{ flex: 1 }} />
                  <StyledButton
                    buttonTitle="مفضله"
                    buttonTitleColor={
                      sectionIndex === 1 ? "#c79546" : "#011132"
                    }
                    activeColor="#c79546"
                    inactiveColor={sectionIndex === 1 ? "#c79546" : "#011132"}
                    style={{
                      // flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      // marginHorizontal: 38,
                      /* backgroundColor:
                      sectionIndex === 1
                        ? '#c79546'
                        : '#011132', */
                    }}
                    // icon={
                    //   <FavoriteOutlineIcon
                    //     color={
                    //       arrayIncludes(favorites, session)
                    //         ? "#011132"
                    //         : Colors.White
                    //     }
                    //   />
                    // }
                    icon={
                      <Icon
                        name={
                          arrayIncludes(favorites, session)
                            ? "star"
                            : "star-outline"
                        }
                        size={18}
                        style={{
                          marginTop: -3,
                          color: arrayIncludes(favorites, session)
                            ? "#c79546"
                            : "#011132",
                        }}
                      />
                    }
                    // icon={<FavoriteOutlineIcon color='#c79546' />}

                    onPress={
                      arrayIncludes(favorites, session)
                        ? () => {
                            setSectionIndex(1);
                            dispatch(
                              removeFromFavorites(
                                favorites[
                                  arrayItemIndex(
                                    favorites,
                                    sessionVideoFavoriteObject(session)
                                  )
                                ]
                              )
                            );
                          }
                        : () => {
                            setSectionIndex(1);
                            dispatch(
                              addToFavorites(
                                sessionVideoFavoriteObject(session)
                              )
                            );
                          }
                    }
                  />
                  <View style={{ flex: 1 }} />
                  <StyledButton
                    buttonTitle="تحميل"
                    buttonTitleColor={
                      sectionIndex === 2 ? "#c79546" : "#011132"
                    }
                    activeColor="#c79546"
                    inactiveColor={sectionIndex === 2 ? "#c79546" : "#011132"}
                    style={{
                      // flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      // marginHorizontal: 38,
                      /* backgroundColor:
                      sectionIndex === 1
                        ? '#c79546'
                        : '#011132', */
                    }}
                    onPress={() => {
                      setSectionIndex(2);
                      saveSessionVideo(
                        session.file,
                        `/Videos/Sessions`,
                        `session_${session.id}`
                      );
                    }}
                  />
                  <View style={{ flex: 1 }} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  <View style={{ flex: 4 }} />
                  <StyledButton
                    buttonTitle="شارك"
                    buttonTitleColor={
                      sectionIndex === 2 ? "#c79546" : "#011132"
                    }
                    activeColor="#c79546"
                    inactiveColor={sectionIndex === 2 ? "#c79546" : "#011132"}
                    style={{
                      // flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      // marginHorizontal: 38,
                      /* backgroundColor:
                      sectionIndex === 1
                        ? '#c79546'
                        : '#011132', */
                    }}
                    onPress={() => {
                      setSectionIndex(1);
                      onShare(`${session.video_url}`)
                    }}
                  />
                  <View style={{ flex: 4 }} />
                </View>
              </View>
            </View>
          </ImageBackground>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SessionVideoLectureScreen;
