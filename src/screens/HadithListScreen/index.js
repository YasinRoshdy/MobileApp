import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import {
  setIsHadithListLoading,
  setHadithList,
  setHadith,
} from "../../redux/actions/hadithAction";
import { getHadithListByChapter } from "../../api/hadith";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import { hadithBooks } from "../../data/hadithBooks";
import { convertNumberToArabic } from "../../utils/converters";
import { fontScale, scale } from "react-native-utils-scale";
import HadithListItem from "../../components/HadithListItem";

const HadithListScreen = (props) => {
  const { chapterId, chapterName, bookName } = props.route.params;

  const { isHadithListLoading, hadithList } = useSelector(
    (state) => state.Hadith
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsHadithListLoading(true));
    getHadithListByChapter(chapterId, {
      success: (res) => {
        dispatch(setIsHadithListLoading(false));
        dispatch(setHadithList(res.data));
      },
      error: (error) => {
        dispatch(setIsHadithListLoading(false));
        console.log("Get Hadith Books Error:", error);
      },
    });
  }, []);

  const RenderHadithItems = ({ hadith, index }) => {
    return (
      <HadithListItem
        hadith={hadith}
        index={index}
        chapterName={chapterName}
        bookName={bookName}
        navigation={props.navigation}
      />
    );
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
        {isHadithListLoading ? (
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
              // alignItems: 'center',
              alignSelf: "stretch",
              // backgroundColor: Colors.SeaGreen,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                // justifyContent: 'flex-end',
                alignItems: "center",
                alignSelf: "auto",
                marginHorizontal: scale(16),
                marginTop: scale(10),
                overflow: "hidden",
                // backgroundColor: Colors.SeaGreen,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#011132",
                }}
              >
                {chapterName}
              </Text>
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                }}
              >
                الحديث الشريف:{" "}
              </Text>
            </View>
            <FlatList
              keyExtractor={(hadith, index) => `${index}-${hadith}`}
              data={hadithList}
              renderItem={({ item, index }) => (
                <RenderHadithItems hadith={item} index={index + 1} />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                paddingHorizontal: scale(16),
                paddingVertical: scale(8),
              }}
            />
          </ImageBackground>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HadithListScreen;
