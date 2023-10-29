import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
  PermissionsAndroid,
} from "react-native";
import { useDispatch } from "react-redux";
import PlayAudioButton from "../PlayAudioButton";
import SaveIcon from "../svg/SaveIcon";
import FavoriteOutlineIcon from "../svg/FavoriteOutlineIcon";
import ShareIcon from "../svg/ShareIcon";
import ArrowUpIcon from "../svg/ArrowUpIcon";
import ArrowDownIcon from "../svg/ArrowDownIcon";
import { ayatExtractor } from "../../utils/extractors";
import {
  suraTextJoiner,
  suraTextJoinerWithBasmala,
} from "../../utils/arrayOperations";
import { fontScale, scale } from "react-native-utils-scale";
import { saveSuraAyatTelawaAudio } from "../../utils/savers";
import {
  addToFavorites,
  addToQuranAudioTelawaFavorites,
  removeFromQuranAudioTelawaFavorites,
} from "../../redux/actions/favoritesActions";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Ionicons";

const AudioFavoriteItem = (props) => {
  const { audioAya, sura, isFavorite, shouldCollapse, onCollapse, onExpand } =
    props;

  console.log("The Audio Aya:", audioAya);

  const [isExpanded, setIsExpanded] = useState(false);
  const [layoutHeight, setLayoutHeight] = useState(0);

  const dispatch = useDispatch();

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
			{/*						saveSuraAyatTelawaAudio(*/}
			{/*							audioAya.file,*/}
			{/*							`/Sounds/Quran/Telawa/Sura_${sura.id}`,*/}
			{/*							`telawa_as${audioAya.aya_start_count}_ae${audioAya.aya_end.count}`,*/}
			{/*						)*/}
			{/*					}*/}
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
                url={audioAya.file}
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
              /* onPress={
									isFavorite
										? () =>
												dispatch(
													removeFromQuranAudioTelawaFavorites(
														audioAya,
													),
												)
										: () =>
												dispatch(
													addToQuranAudioTelawaFavorites(
														audioAya,
													),
												)
								} */
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
              /* onPress={
									isExpanded
										? () => {
												setIsExpanded(false);
												onCollapse();
										  }
										: () => {
												setIsExpanded(true);
												onExpand();
										  }
								} */
            >
              {isExpanded ? (
                <ArrowUpIcon color="#011132" />
              ) : (
                <ArrowDownIcon color="#011132" />
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
            {audioAya.title}
            {/* {`من الآية ${audioAya.aya_start_count} إلى ${audioAya.aya_end_count}`} */}
          </Text>
        </View>
      </View>
      <ImageBackground
        source={require("../../assets/images/sura-new-border.png")}
        resizeMode="contain"
        style={{
          flex: 1,
          height: layoutHeight,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          // marginBottom: 8,
          // marginHorizontal: 1,
          // paddingVertical: 24,
          overflow: "hidden",
          // backgroundColor: Colors.SeaGreen,
        }}
      >
        <View
          style={{
            // flex: 1,
            height: scale(500),
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            paddingHorizontal: scale(32),
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
            <Text>Hey</Text>
            {/* <Text
								numberOfLines={null}
								style={{
									fontSize: fontScale(18),
									textAlign: 'center',
									color: '#011132',
								}}
							>
								{suraTextJoiner(
									ayatExtractor(
										sura,
										audioAya.aya_start_count,
										audioAya.aya_end_count,
									),
									audioAya.aya_start.count,
								)}
							</Text> */}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AudioFavoriteItem;
