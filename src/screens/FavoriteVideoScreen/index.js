import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
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
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";
import YtPlayer from "../../components/YoutubePlayer";
import {useNavigation} from "@react-navigation/native";

const FavoriteVideoScreen = (props) => {
  const { video } = props.route.params;

  const { favorites } = useSelector((state) => state.Favorites);

  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();

  const { navigate } = useNavigation();

    const onStateChange = useCallback((state) => {
        if (state === 'ended') {
            setIsPlaying(false);
        }
        if (state === 'playing') {
            navigate("YtFullScreen", { videoId: tafsir.video_url});
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
                color: "#c79546",
              }}
            >
              {video.title}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            <View
              style={{
                alignSelf: "stretch",
                marginVertical: scale(8),
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
                  buttonTitleColor={Colors.White}
                  hideBGShape
                  inactiveColor="#c79546"
                  activeColor="#011132"
                  icon={
                    <FavoriteOutlineIcon
                      color={
                        arrayIncludes(favorites, video)
                          ? "#011132"
                          : Colors.White
                      }
                    />
                  }
                  style={{
                    flex: 3,
                    borderRadius: scale(5),
                  }}
                  onPress={() =>
                    dispatch(
                      removeFromFavorites(
                        favorites[arrayItemIndex(favorites, video)]
                      )
                    )
                  }
                />
                <View style={{ flex: 1 }} />
                <StyledButton
                  buttonTitle="تحميل"
                  buttonTitleColor={Colors.White}
                  hideBGShape
                  inactiveColor="#c79546"
                  activeColor="#011132"
                  icon={<SaveIcon color={Colors.White} />}
                  style={{
                    flex: 3,
                    borderRadius: scale(5),
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
                  buttonTitleColor={Colors.White}
                  // buttonTitleColor='#c79546'
                  hideBGShape
                  inactiveColor="#c79546"
                  activeColor="#011132"
                  icon={<ShareIcon color={Colors.White} />}
                  // icon={<ShareIcon color='#c79546' />}
                  style={{
                    flex: 3,
                    // backgroundColor: '#c79546',
                    borderRadius: scale(5),
                    // backgroundColor: '#011132',
                  }}
                  onPress={() => console.log("Should Share")}
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

export default FavoriteVideoScreen;
