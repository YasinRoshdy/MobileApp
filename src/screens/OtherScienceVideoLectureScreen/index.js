import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fontScale, scale } from "react-native-utils-scale";
import YoutubePlayer from "react-native-youtube-iframe";
import ScreenHeader from "../../components/ScreenHeader";
import StyledButton from "../../components/StyledButton";
import SaveIcon from "../../components/svg/SaveIcon";
import FavoriteOutlineIcon from "../../components/svg/FavoriteOutlineIcon";
import ShareIcon from "../../components/svg/ShareIcon";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import {onShare, saveOtherScienceVideo} from "../../utils/savers";
import {
  addToFavorites,
  addToOtherScienceVideoFavorites,
  removeFromFavorites,
  removeFromOtherScienceVideoFavorites,
} from "../../redux/actions/favoritesActions";
import { otherScienceVideoFavoriteObject } from "../../utils/mappers";
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";
import YtPlayer from "../../components/YoutubePlayer";
import {useNavigation} from "@react-navigation/native";

const OtherScienceVideoLectureScreen = (props) => {
  const { videoItem } = props.route.params;
  const {
    favorites,
    // otherScienceVideoFavorites
  } = useSelector((state) => state.Favorites);

  const [isPlaying, setIsPlaying] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

    const onStateChange = useCallback((state) => {
        if (state === 'ended') {
            setIsPlaying(false);
        }
        if (state === 'playing') {
            navigate("YtFullScreen", { videoId: videoItem.video_url});
        }
    }, []);
  const togglePlaying = useCallback(() => {
    setIsPlaying((prev) => !prev);
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
        <ImageBackground
          source={require("../../assets/images/app-background.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "stretch",
            // backgroundColor: Colors.SeaGreen,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              // justifyContent: 'flex-end',
              marginHorizontal: scale(16),
              marginTop: scale(10),
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
              {videoItem.title}
            </Text>
            <Text
              style={{
                fontSize: fontScale(16),
                fontFamily: "NotoKufiArabic-Regular",
                color: "#c79546",
              }}
            >
              العلوم الاخرى:{" "}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              paddingHorizontal: scale(16),
              // backgroundColor: Colors.MidnightBlue,
            }}
          >
            <View
              style={{
                marginVertical: scale(8),
              }}
            >
                <YtPlayer
                    videoId={videoItem.video_url}
                    isPlaying={isPlaying}
                    onStateChange={onStateChange}
                />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  alignSelf: "stretch",
                  paddingHorizontal: scale(32),
                  // backgroundColor: Colors.MediumOrchid,
                }}
              >
                <View style={{ flex: 1 }} />
                <StyledButton
                  buttonTitle="مفضله"
                  buttonTitleColor={sectionIndex === 1 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  inactiveColor={sectionIndex === 1 ? "#c79546" : "#011132"}
                  // onPress={() => {
                  //   setSectionIndex(1);
                  // }}
                  style={{
                    // flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 20,
                    // marginHorizontal: 38,
                    /* backgroundColor:
										sectionIndex === 1
											? '#c79546'
											: '#011132', */
                  }}
                  icon={
                    <Icon
                      name={
                        arrayIncludes(favorites, videoItem)
                          ? "star"
                          : "star-outline"
                      }
                      size={18}
                      style={{
                        marginTop: -3,
                        color: arrayIncludes(favorites, videoItem)
                          ? "#c79546"
                          : "#011132",
                      }}
                    />
                  }
                  // icon={
                  //   <FavoriteOutlineIcon
                  //     color={
                  //       arrayIncludes(favorites, videoItem)
                  //         ? "#011132"
                  //         : Colors.White
                  //     }
                  //   />
                  // }
                  // icon={<FavoriteOutlineIcon color='#c79546' />}

                  onPress={
                    arrayIncludes(favorites, videoItem)
                      ? () =>
                          dispatch(
                            removeFromFavorites(
                              favorites[
                                arrayItemIndex(
                                  favorites,
                                  otherScienceVideoFavoriteObject(videoItem)
                                )
                              ]
                            )
                          )
                      : () =>
                          dispatch(
                            addToFavorites(
                              otherScienceVideoFavoriteObject(videoItem)
                            )
                          )
                  }
                />
                <View style={{ flex: 1 }} />
                <StyledButton
                  buttonTitle="تحميل"
                  buttonTitleColor={sectionIndex === 2 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  inactiveColor={sectionIndex === 2 ? "#c79546" : "#011132"}
                  // onPress={() => {
                  //   setSectionIndex(1);
                  // }}
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
                  onPress={() =>
                    saveOtherScienceVideo(
                      videoItem.file,
                      `/Videos/OtherScience/Subject_${videoItem.subject}`,
                      `subject_${videoItem.subject}`
                    )
                  }
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
                  buttonTitleColor={sectionIndex === 3 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  inactiveColor={sectionIndex === 3 ? "#c79546" : "#011132"}
                  // onPress={() => {
                  //   setSectionIndex(1);
                  // }}
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
                  onPress={ () => onShare(`https://www.youtube.com/watch?v=${videoItem.video_url}`) }
                />
                <View style={{ flex: 4 }} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default OtherScienceVideoLectureScreen;
