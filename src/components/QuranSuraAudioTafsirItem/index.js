import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PlayAudioButton from "../PlayAudioButton";
import SaveIcon from "../svg/SaveIcon";
import FavoriteOutlineIcon from "../svg/FavoriteOutlineIcon";
import ShareIcon from "../svg/ShareIcon";
import ArrowUpIcon from "../svg/ArrowUpIcon";
import ArrowDownIcon from "../svg/ArrowDownIcon";
import { ayatExtractor } from "../../utils/extractors";
import { suraTextJoiner } from "../../utils/arrayOperations";
import { styles } from "./style";
import { fontScale, scale } from "react-native-utils-scale";
import { saveSuraAyatTafsirAudio } from "../../utils/savers";
import Icon from "react-native-vector-icons/Ionicons";
const QuranSuraAudioTafsirItem = (props) => {
  const {
    tafsir,
    sura,
    isFavorite,
    shouldCollapse,
    onItemPress,
    onCollapse,
    onExpand,
    onPlay,
    playingId,
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [isExpanded]);

  useEffect(() => {
    if (shouldCollapse === true) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }, [shouldCollapse]);

  const { container } = styles;

  return (
    <View>
      <View
        style={{
          flex: 1,
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
            // backgroundColor: Colors.SeaGreen,
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
          {/*      saveSuraAyatTafsirAudio(*/}
          {/*        tafsir.file,*/}
          {/*        `/Sounds/Quran/Tafsir/Sura_${sura.id}`,*/}
          {/*        `tafsir_as${tafsir.aya_start_count}_ae${tafsir.aya_end_count}`*/}
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
            url={tafsir.file}
            navigation={props.navigation}
            setPlayingId={onPlay}
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
              onPress={onItemPress}
            >
              {/* <FavoriteOutlineIcon color={isFavorite ? "#c79546" : "#011132"} /> */}
              <Icon
                name={isFavorite ? "star" : "star-outline"}
                size={18}
                style={{
                  marginTop: -3,
                  color: isFavorite ? "#c79546" : "#011132",
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
              // paddingHorizontal: 4,
              // backgroundColor: Colors.Blue,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                // backgroundColor: Colors.Teal,
              }}
              onPress={
                isExpanded
                  ? () => {
                      setIsExpanded(false);
                      // onCollapse();
                    }
                  : () => {
                      setIsExpanded(true);
                      // onExpand();
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
            {`من الآية ${tafsir.aya_start_count} إلى ${tafsir.aya_end_count}`}
          </Text>
        </View>
      </View>
      <ImageBackground
        source={require("../../assets/images/sura-new-border.png")}
        resizeMode="stretch"
        style={{
          // flex: 1,
          height: layoutHeight,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          // marginBottom: 8,
          // marginHorizontal: 1,
          paddingHorizontal: scale(16),
          // paddingVertical: 24,
          overflow: "hidden",
          // backgroundColor: Colors.SeaGreen,
        }}
      >
        <View
          style={{
            // flex: 1,
            // height: scale(500),
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            paddingHorizontal: scale(20),
            paddingVertical: scale(20),
            // backgroundColor: Colors.SpringGreen,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={
              {
                // backgroundColor: Colors.SeaGreen,
              }
            }
          >
            <Text
              numberOfLines={null}
              style={{
                fontSize: fontScale(22),
                textAlign: "center",
                color: "#011132",
              }}
            >
              {suraTextJoiner(
                ayatExtractor(
                  sura,
                  tafsir.aya_start_count,
                  tafsir.aya_end_count + 1
                ),
                tafsir.aya_start_count
              )}
            </Text>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default QuranSuraAudioTafsirItem;
