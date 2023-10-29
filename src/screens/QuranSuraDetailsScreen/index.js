import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  StatusBar,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import QuranSuraTextTafsirList from "../../components/QuranSuraTextTafsirList";
import QuranSuraView from "../../components/QuranSuraView";
import QuranSuraVideoTafsirList from "../../components/QuranSuraVideoTafsirList";
import QuranSuraAudioList from "../../components/QuranSuraAudioList";
import QuranSuraAudioTafsirList from "../../components/QuranSuraAudioTafsirList";
import ScreenHeader from "../../components/ScreenHeader";
import StyledButton from "../../components/StyledButton";
import {
  getSura,
  getAyatTafsirAudioList,
  getAyatTelawaList,
  getAyatTafsirVideoList,
} from "../../api/quran";
import Colors from "../../constants/Colors";
import { audioAyas } from "../../data/quran";
import { videoTafsirs } from "../../data/tafser";
import { styles } from "./style";
import { getDailyPublish } from "../../api/dailyPublish";
import {
  setIsSuraDetailsLoading,
  setSura,
  setSuraAudioList,
  setSuraAudioTafsirList,
  setSuraVideoTafsirList,
} from "../../redux/actions/quranActions";
import { fontScale, scale } from "react-native-utils-scale";

const QuranSuraDetailsScreen = (props) => {
  // console.log(props.navigation);
  const { suraId } = props.route.params;

  const { isSuraDetailsLoading, sura } = useSelector((state) => state.Quran);

  const [sectionIndex, setSectionIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsSuraDetailsLoading(true));
    getSura(suraId, {
      success: (res) => {
        dispatch(setIsSuraDetailsLoading(false));
        dispatch(setSura(res.data));
      },
      error: (error) => {
        dispatch(setIsSuraDetailsLoading(false));
        console.log("The Sura Error:", error);
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
          onBackPress={() => props.navigation.goBack()}
        />
        {isSuraDetailsLoading ? (
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
              // paddingBottom: 8,
              // paddingHorizontal: 16,
              // backgroundColor: Colors.Blue,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                // justifyContent: 'flex-end',
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
                {sura.name}
              </Text>
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                }}
              >
                القرآن الكريم:{" "}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                // backgroundColor: Colors.SeaGreen,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  alignSelf: "stretch",
                  paddingVertical: scale(8),
                  // backgroundColor: Colors.Magenta,
                }}
              >
                <StyledButton
                  buttonTitle="التفسير المرئى"
                  buttonTitleColor={sectionIndex === 2 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  // inactiveColor={sectionIndex === 2 ? "#c79546" : "#011132"}
                  onPress={() => {
                    setSectionIndex(2);
                  }}
                  style={{
                    // flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    // marginHorizontal: 38,
                    /* backgroundColor:
										sectionIndex === 2
											? '#c79546'
											: '#011132', */
                  }}
                />
                <StyledButton
                  buttonTitle="التلاوة"
                  buttonTitleColor={sectionIndex === 1 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  inactiveColor={sectionIndex === 1 ? "#c79546" : "#011132"}
                  onPress={() => {
                    setSectionIndex(1);
                  }}
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
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  alignSelf: "stretch",
                  paddingVertical: scale(8),
                  // backgroundColor: Colors.Maroon,
                }}
              >
                <StyledButton
                  buttonTitle="التفسير المقروء"
                  buttonTitleColor={sectionIndex === 4 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  inactiveColor={sectionIndex === 4 ? "#c79546" : "#011132"}
                  onPress={() => {
                    setSectionIndex(4);
                  }}
                  style={{
                    // flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    // marginHorizontal: 38,
                    /* backgroundColor:
										sectionIndex === 4
											? '#c79546'
											: '#011132', */
                  }}
                />
                <StyledButton
                  buttonTitle="التفسير الصوتى"
                  buttonTitleColor={sectionIndex === 3 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  inactiveColor={sectionIndex === 3 ? "#c79546" : "#011132"}
                  onPress={() => {
                    setSectionIndex(3);
                  }}
                  style={{
                    // flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    // marginHorizontal: 38,
                    /* backgroundColor:
										sectionIndex === 3
											? '#c79546'
											: '#011132', */
                  }}
                />
              </View>
            </View>
            {sectionIndex === 0 ? (
              <QuranSuraView
                sura={sura}
                suraId={suraId}
                style={{
                  marginHorizontal: scale(16),
                }}
              />
            ) : sectionIndex === 1 ? (
              <QuranSuraAudioList navigation={props.navigation} />
            ) : sectionIndex === 2 ? (
              <QuranSuraVideoTafsirList navigation={props.navigation} />
            ) : sectionIndex === 3 ? (
              <QuranSuraAudioTafsirList navigation={props.navigation} />
            ) : sectionIndex === 4 ? (
              <QuranSuraTextTafsirList
                content="هذا المحتوى غير متوفر حاليا"
                navigation={props.navigation}
              />
            ) : null}
          </ImageBackground>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuranSuraDetailsScreen;
