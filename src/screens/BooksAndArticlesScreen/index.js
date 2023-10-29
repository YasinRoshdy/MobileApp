import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import BooksList from "../../components/BooksList";
import ArticlesList from "../../components/ArticlesList";
import { articlesExtractor, booksExtractor } from "../../utils/extractors";
import { fontScale, scale } from "react-native-utils-scale";
import { useNavigation } from "@react-navigation/native";

const BooksAndArticlesScreen = (props) => {
  const [isBooksSelected, setIsBooksSelected] = useState(true);

  const { container } = styles;
  const { navigate } = useNavigation();

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
          // onMenuPress={() => navigate("HomeDrawer")}
          flipBackButton
          onMenuPress={() =>
            props.navigation.openDrawer ? props.navigation.openDrawer() : {}
          }
        />
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
                textAlign: "right",
                color: "#c79546",
              }}
            >
              الكتب والمقالات
            </Text>
          </View>
          <View
            style={{
              height: scale(35),
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              marginVertical: scale(8),
              paddingHorizontal: scale(16),
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                // borderRadius: 8,
                borderTopLeftRadius: scale(8),
                borderBottomLeftRadius: scale(8),
                borderWidth: scale(1),
                borderColor: "#011132",
                backgroundColor: isBooksSelected
                  ? Colors.Transparent
                  : "#c79546",
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
                onPress={() => setIsBooksSelected(!isBooksSelected)}
              >
                <Text
                  style={{
                    fontFamily: "NotoKufiArabic-Regular",
                    color: isBooksSelected ? "#011132" : Colors.White,
                  }}
                >
                  المقالات
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                // borderRadius: 8,
                borderTopRightRadius: scale(8),
                borderBottomRightRadius: scale(8),
                borderWidth: scale(1),
                borderColor: "#011132",
                backgroundColor: isBooksSelected
                  ? "#c79546"
                  : Colors.Transparent,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
                onPress={() => setIsBooksSelected(!isBooksSelected)}
              >
                <Text
                  style={{
                    fontFamily: "NotoKufiArabic-Regular",
                    color: isBooksSelected ? Colors.White : "#011132",
                  }}
                >
                  الكتب
                </Text>
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
            {isBooksSelected ? (
              <BooksList navigation={props.navigation} />
            ) : (
              <ArticlesList navigation={props.navigation} />
            )}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default BooksAndArticlesScreen;
