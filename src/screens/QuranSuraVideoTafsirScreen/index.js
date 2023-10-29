import React, { useCallback, useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    SafeAreaView, Dimensions, Share,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fontScale, scale } from "react-native-utils-scale";
import YoutubePlayer from "react-native-youtube-iframe";
import ScreenHeader from "../../components/ScreenHeader";
import StyledButton from "../../components/StyledButton";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import { saveSuraAyatTafsirVideo } from "../../utils/savers";
import {
  addToFavorites,
  addToQuranVideoTafsirFavorites,
  removeFromFavorites,
  removeFromQuranVideoTafsirFavorites,
} from "../../redux/actions/favoritesActions";
import { quranSuraVideoTafsirFavoriteObject } from "../../utils/mappers";
import { convertNumberToArabic } from "../../utils/converters";
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";
import Orientation from 'react-native-orientation';
import YtPlayer from "../../components/YoutubePlayer";
import { onShare } from "../../utils/savers";
import {useNavigation} from "@react-navigation/native";

const QuranSuraVideoTafsirScreen = (props) => {
  const { tafsir } = props.route.params;
  const { sura } = useSelector((state) => state.Quran);
  const {
    favorites,
    // quranVideoTafsirFavorites
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
            navigate("YtFullScreen", {videoId: tafsir.video_url});
        }
    }, []);

  const togglePlaying = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const favObject = {
    title: `تفسير سورة ${sura.name} من الآية ${convertNumberToArabic(
      tafsir.aya_start_count
    )} إلى ${convertNumberToArabic(tafsir.aya_end_count)}`,
    ...tafsir,
  };
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
            alignItems: "center",
            alignSelf: "stretch",
            // paddingBottom: 8,
            paddingHorizontal: scale(16),
            // backgroundColor: Colors.Blue,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignSelf: "stretch",
              marginHorizontal: scale(16),
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
              من الآية {tafsir.aya_start_count} إلى {tafsir.aya_end_count}
            </Text>
            <Text
              style={{
                fontSize: fontScale(16),
                fontFamily: "NotoKufiArabic-Regular",
                color: "#c79546",
              }}
            >
              التفسير المرئى:{" "}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              alignSelf: "stretch",
              // backgroundColor: Colors.SeaGreen,
            }}
          >
            <View
              style={{
                alignSelf: "stretch",
                marginVertical: scale(8),
                // backgroundColor: Colors.Blue,
              }}
            >
              <YtPlayer
                videoId={tafsir.video_url}
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
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  paddingHorizontal: scale(32),
                }}
              >
                <View style={{ flex: 1 }} />
                <StyledButton
                  buttonTitle="مفضله"
                  buttonTitleColor={sectionIndex === 1 ? "#c79546" : "#011132"}
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
                        arrayIncludes(favorites, favObject)
                          ? "star"
                          : "star-outline"
                      }
                      size={18}
                      style={{
                        marginTop: -3,
                        color: arrayIncludes(favorites, favObject)
                          ? "#c79546"
                          : "#011132",
                      }}
                    />
                  }
                  onPress={
                    arrayIncludes(favorites, favObject)
                      ? () =>
                          dispatch(
                            removeFromFavorites(
                              favorites[
                                arrayItemIndex(
                                  favorites,
                                  quranSuraVideoTafsirFavoriteObject(favObject)
                                )
                              ]
                            )
                          )
                      : () =>
                          dispatch(
                            addToFavorites(
                              quranSuraVideoTafsirFavoriteObject(favObject)
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
                    saveSuraAyatTafsirVideo(
                      tafsir.file,
                      `/Videos/Quran/Tafsir/Sura_${sura.id}`,
                      `tafsir_as${tafsir.aya_start_count}_ae${tafsir.aya_end_count}`
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
                  buttonTitleColor={sectionIndex === 2 ? "#c79546" : "#011132"}
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
                  onPress={ () => onShare(`${tafsir.video_url}`) }
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

export default QuranSuraVideoTafsirScreen;
