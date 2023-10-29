import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Icon from "react-native-vector-icons/Ionicons";
import StyledButton from "../../components/StyledButton";
import SaveIcon from "../../components/svg/SaveIcon";
import FavoriteOutlineIcon from "../../components/svg/FavoriteOutlineIcon";
import ShareIcon from "../../components/svg/ShareIcon";
import BrowseIcon from "../../components/svg/BrowseIcon";
import Colors from "../../constants/Colors";
import { baseUrl } from "../../../app.json";
import { styles } from "./style";
import { fontScale, scale } from "react-native-utils-scale";
import {onShare, saveArticle} from "../../utils/savers";
import {
  addToArticleFavorites,
  addToFavorites,
  removeFromArticleFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";
import { articleFavoriteObject } from "../../utils/mappers";
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";

const ArticleDetailsScreen = (props) => {
  const { article } = props.route.params;
  const { favorites } = useSelector((state) => state.Favorites);

  const dispatch = useDispatch();

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
        <ScrollView>
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
                marginHorizontal: scale(16),
                marginVertical: scale(15),
              }}
            >
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#011132",
                }}
              >
                {article.title}
              </Text>
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                }}
              >
                المقاله:{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
                alignSelf: "stretch",
                paddingHorizontal: scale(16),
                // backgroundColor: Colors.SeaGreen,
              }}
            >
              <View
                style={{
                  // flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  // alignSelf: 'stretch',
                  borderRadius: scale(8),
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{
                    uri: `${baseUrl}${
                      article.cover.startsWith("/")
                        ? article.cover.slice(1)
                        : article.cover
                    }`,
                  }}
                  resizeMode="cover"
                  style={{
                    width: Dimensions.get("screen").width / 1.5,
                    height: Dimensions.get("screen").height / 2.25,
                  }}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "flex-end",
                  alignSelf: "stretch",
                  marginTop: scale(20),
                  marginBottom: scale(8),
                  // backgroundColor: Colors.Magenta,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: scale(4),
                    // backgroundColor: Colors.Teal,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: "#011132",
                    }}
                  >
                    {article.file_data.sizify}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: "#011132",
                    }}
                  >
                    حجم الملف:{" "}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: scale(4),
                    // backgroundColor: Colors.Teal,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: "#011132",
                    }}
                  >
                    {article.file_data.type.split("/")[1]}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: "#011132",
                    }}
                  >
                    نوع الملف:{" "}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: scale(4),
                    // backgroundColor: Colors.Teal,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: "#011132",
                    }}
                  >
                    {article.page_count}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: "#011132",
                    }}
                  >
                    عدد الصفحات:{" "}
                  </Text>
                </View>
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
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    marginBottom: scale(5),
                  }}
                >
                  <View style={{ flex: 1 }} />
                  <StyledButton
                    buttonTitle="مفضله"
                    buttonTitleColor={"#011132"}
                    // hideBGShape
                    activeColor="#011132"
                    inactiveColor="#c79546"
                    icon={
                      <Icon
                        name={
                          arrayIncludes(favorites, article)
                            ? "star"
                            : "star-outline"
                        }
                        size={18}
                        style={{
                          marginTop: -3,
                          color: arrayIncludes(favorites, article)
                            ? "#c79546"
                            : "#011132",
                        }}
                      />
                      // <FavoriteOutlineIcon
                      //   color={
                      //     arrayIncludes(favorites, book) ? "#c79546" : "#011132"
                      //   }
                      // />
                    }
                    style={{
                      flex: 3,
                      borderRadius: scale(5),
                    }}
                    onPress={
                      arrayIncludes(favorites, article)
                        ? () =>
                            dispatch(
                              removeFromFavorites(
                                favorites[
                                  arrayItemIndex(
                                    favorites,
                                    articleFavoriteObject(article)
                                  )
                                ]
                              )
                            )
                        : () =>
                            dispatch(
                              addToFavorites(articleFavoriteObject(article))
                            )
                    }
                  />
                  <View style={{ flex: 1 }} />
                  <StyledButton
                    buttonTitle="تصفح"
                    buttonTitleColor={"#011132"}
                    // hideBGShape
                    activeColor="#011132"
                    inactiveColor="#c79546"
                    icon={<BrowseIcon color={"#011132"} />}
                    style={{
                      // backgroundColor: '#c79546',
                      borderRadius: scale(5),
                    }}
                    onPress={() =>
                      props.navigation.navigate("PDFViewer", {
                        fileUrl: article.file,
                        fileTitle: article.title,
                      })
                    }
                  />
                  <View style={{ flex: 1 }} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    marginTop: scale(5),
                    marginBottom: scale(32),
                  }}
                >
                  <View style={{ flex: 1 }} />
                  <StyledButton
                    buttonTitle="شارك"
                    buttonTitleColor={"#011132"}
                    // hideBGShape
                    activeColor="#011132"
                    inactiveColor="#c79546"
                    icon={<BrowseIcon color={"#011132"} />}
                    style={{
                      // backgroundColor: '#c79546',
                      borderRadius: scale(5),
                    }}
                    onPress={ () => onShare(`${article.title}`) }
                  />
                  <View style={{ flex: 1 }} />
                  <StyledButton
                    buttonTitle="تحميل"
                    buttonTitleColor={"#011132"}
                    // hideBGShape
                    activeColor="#011132"
                    inactiveColor="#c79546"
                    icon={<BrowseIcon color={"#011132"} />}
                    style={{
                      // backgroundColor: '#c79546',
                      borderRadius: scale(5),
                    }}
                    onPress={() =>
                      saveArticle(
                        article.file,
                        `/PDF/Articles`,
                        `article_${article.id}`
                      )
                    }
                  />
                  <View style={{ flex: 1 }} />
                </View>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ArticleDetailsScreen;
