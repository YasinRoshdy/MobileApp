import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Colors from "../../constants/Colors";
import {
  setIsHadithBookChaptersListLoading,
  setHadithBookChaptersList,
} from "../../redux/actions/hadithAction";
import { styles } from "./style";
import { getHadithByChapterList } from "../../api/hadith";
import { fontScale, scale } from "react-native-utils-scale";
import HadithBookChaptersListItem from "../../components/HadithBookChaptersListItem";

const HadithBookChaptersListScreen = (props) => {
  const { bookId, bookName } = props.route.params;

  const { isHadithBookChaptersListLoading, hadithBookChaptersList } =
    useSelector((state) => state.Hadith);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsHadithBookChaptersListLoading(true));
    getHadithByChapterList(bookId, {
      success: (res) => {
        dispatch(setIsHadithBookChaptersListLoading(false));
        dispatch(setHadithBookChaptersList(res.data));
      },
      error: (error) => {
        dispatch(setIsHadithBookChaptersListLoading(false));
        console.log("Get Hadith Book Chapters Error:", error);
      },
    });
  }, []);

  const RenderHadithBook = ({ chapter }) => {
    return (
      <HadithBookChaptersListItem
        bookName={bookName}
        chapter={chapter}
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
        {isHadithBookChaptersListLoading ? (
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
              alignSelf: "stretch",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginHorizontal: scale(16),
                marginTop: scale(10),
              }}
            >
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#011132",
                }}
              >
                {bookName}
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
              keyExtractor={(hadithBook, index) => `${index}-${hadithBook}`}
              data={hadithBookChaptersList}
              renderItem={({ item }) => <RenderHadithBook chapter={item} />}
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

export default HadithBookChaptersListScreen;
