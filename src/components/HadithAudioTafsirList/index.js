import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getHadithAudioTafsir } from "../../api/hadith";
import {
  setIsHadithDetailsLoading,
  setHadithList,
} from "../../redux/actions/hadithAction";
import Colors from "../../constants/Colors";
import SaveIcon from "../svg/SaveIcon";
import FavoriteOutlineIcon from "../svg/FavoriteOutlineIcon";
import ShareIcon from "../svg/ShareIcon";
import PlayAudioButton from "../PlayAudioButton";
import ArrowUpIcon from "../svg/ArrowUpIcon";
import ArrowDownIcon from "../svg/ArrowDownIcon";
import { styles } from "./style";
import { fontScale, scale } from "react-native-utils-scale";
import { saveHadithTafsirAudio } from "../../utils/savers";
import Icon from "react-native-vector-icons/Ionicons";
import {
  addToFavorites,
  addToHadithAudioTafsirFavorites,
  removeFromFavorites,
  removeFromHadithAudioTafsirFavorites,
} from "../../redux/actions/favoritesActions";
import { hadithAudioTafsirFavoriteObject } from "../../utils/mappers";
import { convertNumberToArabic } from "../../utils/converters";
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";

const HadithAudioTafsirList = (props) => {
  const { hadithId, hadithText, bookName, chapterName } = props;

  const { hadithTafsir } = useSelector((state) => state.Hadith);
  const {
    favorites,
    // hadithAudioTafsirFavorites
  } = useSelector((state) => state.Favorites);

  const [isExpanded, setIsExpanded] = useState(false);
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [playingId, setPlayingId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [isExpanded]);

  const favObject = {
    title: `تفسير الحديث ${convertNumberToArabic(
      hadithTafsir.hadith
    )} - باب ${chapterName} - ${bookName}`,
    ...hadithTafsir,
  };

  const { container } = styles;

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: scale(16),
        // backgroundColor: Colors.SeaGreen,
      }}
    >
      <View
        style={{
          // flex: 1,
          height: scale(40),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          marginVertical: scale(8),
          paddingHorizontal: scale(8),
          borderRadius: scale(5),
          borderWidth: scale(1),
          borderColor: "#000825",
        }}
      >
        <View
          style={{
            alignSelf: "stretch",
            flexDirection: "row",
            paddingHorizontal: scale(8),
          }}
        >
          {/*<View*/}
          {/*  style={{*/}
          {/*    justifyContent: "center",*/}
          {/*    paddingHorizontal: scale(4),*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <TouchableOpacity*/}
          {/*    style={{*/}
          {/*      flex: 1,*/}
          {/*      justifyContent: "center",*/}
          {/*      alignItems: "center",*/}
          {/*      alignSelf: "stretch",*/}
          {/*    }}*/}
          {/*    onPress={() =>*/}
          {/*      saveHadithTafsirAudio(*/}
          {/*        hadithTafsir.audio_tafsir,*/}
          {/*        `/Sounds/Hadith/Tafsir/Hadith_${hadithId}`,*/}
          {/*        `tafsir_${hadithId}`*/}
          {/*      )*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <SaveIcon color="#011132" />*/}
          {/*  </TouchableOpacity>*/}
          {/*</View>*/}
          {/*<View*/}
          {/*  style={{*/}
          {/*    width: scale(1.5),*/}
          {/*    marginHorizontal: scale(6),*/}
          {/*    marginVertical: scale(4),*/}
          {/*    backgroundColor: "#000825",*/}
          {/*  }}*/}
          {/*/>*/}
          <PlayAudioButton
            url={hadithTafsir.audio_tafsir}
            navigation={props.navigation}
            setPlayingId={setPlayingId}
            playingId={playingId}
            onPlay={isPlaying => setIsExpanded(isPlaying)}
          />
          <View
            style={{
              width: scale(1.5),
              marginHorizontal: scale(6),
              marginVertical: scale(4),
              backgroundColor: "#000825",
            }}
          />
          <View
            style={{
              justifyContent: "center",
              paddingHorizontal: scale(4),
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
              }}
              onPress={
                arrayIncludes(favorites, favObject)
                  ? () =>
                      dispatch(
                        removeFromFavorites(
                          favorites[
                            arrayItemIndex(
                              favorites,
                              hadithAudioTafsirFavoriteObject(favObject)
                            )
                          ]
                        )
                      )
                  : () =>
                      dispatch(
                        addToFavorites(
                          hadithAudioTafsirFavoriteObject(favObject)
                        )
                      )
              }
            >
              {/* <FavoriteOutlineIcon
                color={
                  arrayIncludes(favorites, favObject) ? "#c79546" : "#011132"
                }
              /> */}
              <Icon
                name={
                  arrayIncludes(favorites, favObject) ? "star" : "star-outline"
                }
                size={18}
                style={{
                  marginTop: -3,
                  color: arrayIncludes(favorites, favObject)
                    ? "#c79546"
                    : "#011132",
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: scale(1.5),
              marginHorizontal: scale(6),
              marginVertical: scale(4),
              backgroundColor: "#000825",
            }}
          />
          <View
            style={{
              justifyContent: "center",
              paddingHorizontal: scale(4),
            }}
          >
            <ShareIcon color="#011132" />
          </View>
          <View
            style={{
              width: scale(1.5),
              marginHorizontal: scale(6),
              marginVertical: scale(4),
              backgroundColor: "#000825",
            }}
          />
          <View
            style={{
              width: scale(32),
              justifyContent: "center",
              alignItems: "center",
              // paddingHorizontal: 4,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
              }}
              onPress={
                isExpanded
                  ? () => {
                      setIsExpanded(false);
                    }
                  : () => {
                      setIsExpanded(true);
                    }
              }
            >
              {isExpanded ? (
                <Icon name="eye" size={18} style={{ color: "#c79546" }} />
              ) : (
                <Icon
                  name="eye-outline"
                  size={18}
                  style={{ color: "#011132" }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: fontScale(12),
              fontFamily: "NotoKufiArabic-Regular",
              alignSelf: "stretch",
              textAlign: "right",
              color: "#000825",
            }}
          >
            تفسير الحديث
          </Text>
        </View>
      </View>
      {/* <ImageBackground */}
      {/* resizeMode='stretch' */}
      {/* source={require('../../assets/images/sura-new-border.png')} */}
      <View
        style={{
          flexShrink: 1,
          height: layoutHeight,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          marginBottom: scale(8),
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flexShrink: 1,
            height: scale(500),
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            marginBottom: scale(8),
            paddingHorizontal: scale(16),
            paddingVertical: scale(20),
            borderRadius: scale(5),
            borderWidth: scale(1),
            borderColor: "#011132",
            // backgroundColor: Colors.SeaGreen,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            <Text
              numberOfLines={null}
              style={{
                fontSize: fontScale(18),
                textAlign: "center",
                color: "#011132",
              }}
            >
              {hadithText}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HadithAudioTafsirList;
