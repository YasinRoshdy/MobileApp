import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import StyledButton from "../../components/StyledButton";
import SaveIcon from "../../components/svg/SaveIcon";
import FavoriteOutlineIcon from "../../components/svg/FavoriteOutlineIcon";
import ShareIcon from "../../components/svg/ShareIcon";
import BrowseIcon from "../../components/svg/BrowseIcon";
import Colors from "../../constants/Colors";
import { baseUrl } from "../../../app.json";
import { styles } from "./style";
import { fontScale, scale } from "react-native-utils-scale";
import {onShare, saveBook} from "../../utils/savers";
import Icon from "react-native-vector-icons/Ionicons";
import {
  addToBookFavorites,
  addToFavorites,
  removeFromBookFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";
import { bookFavoriteObject } from "../../utils/mappers";
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";
import { useState } from "react";

const BookDetailsScreen = (props) => {
  const { book } = props.route.params;
  const { favorites } = useSelector((state) => state.Favorites);
  const [searchText, setSearchText] = useState("");
  const [isResponseAvailable, setIsResponseAvailable] = useState(false);
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState();
  const dispatch = useDispatch();
  console.log(book);
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
                {book.title}
              </Text>
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                }}
              >
                الكتاب:{" "}
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
                    uri: `${
                      book.cover.startsWith("/")
                        ? book.cover.slice(1)
                        : book.cover
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
                  marginTop: scale(30),
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
                    {book.file_data.sizify}
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
                    {book.file_data.type.split("/")[1]}
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
                    {book.page_count}
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
                          arrayIncludes(favorites, book)
                            ? "star"
                            : "star-outline"
                        }
                        size={18}
                        style={{
                          marginTop: -3,
                          color: arrayIncludes(favorites, book)
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
                      // backgroundColor: '#c79546',
                      borderRadius: scale(5),
                    }}
                    onPress={
                      arrayIncludes(favorites, book)
                        ? () =>
                            dispatch(
                              removeFromFavorites(
                                favorites[
                                  arrayItemIndex(
                                    favorites,
                                    bookFavoriteObject(book)
                                  )
                                ]
                              )
                            )
                        : () =>
                            dispatch(addToFavorites(bookFavoriteObject(book)))
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
                        fileUrl: book.file,
                        fileTitle: book.title,
                        page: 0,
                      })
                    }
                  />
                  <View style={{ flex: 1 }} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
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
                    icon={<ShareIcon color={"#011132"} />}
                    style={{
                      // backgroundColor: '#c79546',
                      borderRadius: scale(5),
                      textAlign: "center",
                    }}
                    onPress={ () => onShare(`${book.file}`) }
                  />
                  <View style={{ flex: 1 }} />
                  <StyledButton
                    buttonTitle="تحميل"
                    buttonTitleColor={"#011132"}
                    // hideBGShape
                    activeColor="#011132"
                    inactiveColor="#c79546"
                    icon={<SaveIcon color={"#011132"} />}
                    style={{
                      // backgroundColor: '#c79546',
                      borderRadius: scale(5),
                    }}
                    onPress={() =>
                      saveBook(book.file, `/PDF/Books`, `book_${book.id}`)
                    }
                  />
                  <View style={{ flex: 1 }} />
                </View>
              </View>
            </View>

            <View style={{ width: "90%", alignSelf: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#c79546",
                  height: 45,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "20%",
                    borderWidth: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ textAlign: "center", color: "white" }}>
                    رابط
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "20%",
                    borderWidth: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ textAlign: "center", color: "white" }}>
                    صفحة
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: "60%",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderBottomWidth: 0.3,
                    // alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "right",
                      marginRight: 10,
                      color: "white",
                    }}
                  >
                    فهرس الكتاب
                  </Text>
                </View>
              </View>
              {book?.chapter?.map((item, index) => (
                <View style={{ flexDirection: "row" }} key={{ index }}>
                  <TouchableOpacity
                    style={{
                      width: "20%",
                      borderWidth: 1,
                      borderRightWidth: 0.2,
                      borderBottomWidth: 0.3,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() =>
                      props.navigation.navigate("PDFViewer", {
                        fileUrl: item?.chapter_url,
                        fileTitle: book.title,
                        page: item?.page,
                      })
                    }
                  >
                    <Text style={{ textAlign: "center", color: "black" }}>
                      تصفح
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: "20%",
                      borderWidth: 1,
                      borderBottomWidth: 0.3,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "black" }}>
                      {item.page}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "60%",
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderBottomWidth: 0.5,
                      // alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "right",
                        color: "black",
                        marginRight: 10,
                      }}
                    >
                      {item.key}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BookDetailsScreen;
