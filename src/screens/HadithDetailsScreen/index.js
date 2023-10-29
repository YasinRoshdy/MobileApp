import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HadithBody from "../../components/HadithBody";
import HadithVideoTafsir from "../../components/HadithVideoTafsir";
import ScreenHeader from "../../components/ScreenHeader";
import StyledButton from "../../components/StyledButton";
import { getHadithTafsir } from "../../api/hadith";
import {
  setIsHadithDetailsLoading,
  setHadithAudioTafsirList,
  setHadithVideoTafsir,
  setHadithTafsir,
} from "../../redux/actions/hadithAction";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import HadithAudioTafsirList from "../../components/HadithAudioTafsirList";
import HadithTextTafsirList from "../../components/HadithTextTafsirList";
import { fontScale, scale } from "react-native-utils-scale";

const HadithDetailsScreen = (props) => {
  const { hadithId, bookName, chapterName } = props.route.params;
  const [playingId, setPlayingId] = useState(null);
  const { isHadithDetailsLoading, hadithVideoTafsir, hadith } = useSelector(
    (state) => state.Hadith
  );

  const [sectionIndex, setSectionIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsHadithDetailsLoading(true));
    getHadithTafsir(hadithId, {
      success: (res) => {
        dispatch(setIsHadithDetailsLoading(false));
        dispatch(setHadithTafsir(res.data));
      },
      error: (error) => {
        dispatch(setIsHadithDetailsLoading(false));
        console.log("Get Hadith Tafsir Error:", error);
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
        {isHadithDetailsLoading ? (
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
                marginVertical: scale(15),
              }}
            >
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                }}
              >
                الحديث الشريف
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
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  // paddingVertical: 8,
                  // backgroundColor: Colors.Magenta,
                }}
              >
                <StyledButton
                  buttonTitle="التفسير المرئى"
                  buttonTitleColor={sectionIndex === 1 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  onPress={() => {
                    setSectionIndex(1);
                  }}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: scale(15),

                    /* backgroundColor:
										sectionIndex === 1
											? '#c79546'
											: '#011132', */
                  }}
                />
                <StyledButton
                  buttonTitle="نص الحديث"
                  buttonTitleColor={sectionIndex === 0 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  onPress={() => {
                    setSectionIndex(0);
                  }}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: scale(15),

                    /* backgroundColor:
										sectionIndex === 0
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
                  buttonTitleColor={sectionIndex === 3 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  onPress={() => {
                    setSectionIndex(3);
                    /* Alert.alert(
										'خطأ',
										'المحتوى غير متوفر حاليا',
										[
											{
												text: 'حسناً',
											},
										],
									); */
                  }}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: scale(15),
                    /* backgroundColor:
										sectionIndex === 3
											? '#c79546'
											: '#011132', */
                  }}
                />
                <StyledButton
                  buttonTitle="التفسير الصوتى"
                  buttonTitleColor={sectionIndex === 2 ? "#c79546" : "#011132"}
                  activeColor="#c79546"
                  onPress={() => {
                    setSectionIndex(2);
                  }}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: scale(15),
                    /* backgroundColor:
										sectionIndex === 2
											? '#c79546'
											: '#011132', */
                  }}
                />
              </View>
            </View>
            {sectionIndex === 0 ? (
              <HadithBody />
            ) : sectionIndex === 1 ? (
              <HadithVideoTafsir
                hadithId={hadithId}
                bookName={bookName}
                chapterName={chapterName}
              />
            ) : sectionIndex === 2 ? (
              <HadithAudioTafsirList
                hadithId={hadithId}
                hadithText={hadith.text}
                bookName={bookName}
                chapterName={chapterName}
                navigation={props.navigation}
                setPlayingId={setPlayingId}
                playingId={playingId}
              />
            ) : sectionIndex === 3 ? (
              <HadithTextTafsirList
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

export default HadithDetailsScreen;
