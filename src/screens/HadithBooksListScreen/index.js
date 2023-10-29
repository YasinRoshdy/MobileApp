import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import {
  setIsHadithBooksListLoading,
  setHadithBooksList,
} from "../../redux/actions/hadithAction";
import { getBooksInAlSaheh } from "../../api/hadith";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import { hadithBooks } from "../../data/hadithBooks";
import { fontScale, scale } from "react-native-utils-scale";
import HadithBooksListItem from "../../components/HadithBooksListItem";
import { useNavigation } from "@react-navigation/native";

const HadithBooksListScreen = (props) => {
  const { navigate } = useNavigation();
  const [books, setBooks] = useState(null);
  const { isHadithBooksListLoading, hadithBooksList } = useSelector(
    (state) => state.Hadith
  );
  //console.log(hadithBooksList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsHadithBooksListLoading(true));
    getBooksInAlSaheh({
      success: async (res) => {
        dispatch(setIsHadithBooksListLoading(false));
        dispatch(setHadithBooksList(res.results));
        // const booksList = res.results;
        const booksList = [...res.results];
        booksList.unshift(booksList.pop());
        // var temp = booksList[0];
        // booksList[0] = booksList[booksList.length - 1];
        // booksList[booksList.length - 1] = temp;
        setBooks(booksList);
      },
      error: (error) => {
        dispatch(setIsHadithBooksListLoading(false));
        console.log("Get Hadith Books Error:", error);
      },
    });
  }, []);

  
  const RenderHadithBook = ({ book }) => {
    return <HadithBooksListItem book={book} navigation={props.navigation} />;
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
          flipBackButton
          onMenuPress={() =>
            props.navigation.getParent().openDrawer
              ? props.navigation.getParent().openDrawer()
              : {}
          }
          // onMenuPress={() => navigate("HomeDrawer")}
        />
        {isHadithBooksListLoading ? (
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
                alignItems: "center",
                marginHorizontal: scale(16),
                marginTop: scale(10),
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
            <FlatList
              keyExtractor={(hadithBook, index) => `${index}-${hadithBook}`}
              data={books}
              renderItem={({ item }) => <RenderHadithBook book={item} />}
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

export default HadithBooksListScreen;
