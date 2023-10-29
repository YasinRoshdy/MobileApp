import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FavoriteOutlineIcon from "../svg/FavoriteOutlineIcon";
import ShareIcon from "../svg/ShareIcon";
import Colors from "../../constants/Colors";
import { scale, fontScale, height } from "react-native-utils-scale";
import { styles } from "./style";
import DayBookIcon from "../svg/DayBookIcon";
import { useNavigation } from "@react-navigation/native";
import Data from "../../data/datamanager";
import SessionsOutlineIcon from "../svg/SessionsOutlineIcon";
import { Linking } from "react-native";

const DrawerContent = (props) => {
  const { container } = styles;
  const handleClick = (url) => {
    Linking.openURL(url);
  };
  // console.log("Drawer Content Props:", props.state.routes);
  const { navigate } = useNavigation();
  const [shouldShow1, setShouldShow1] = useState(true);
  const [shouldShow2, setShouldShow2] = useState(true);
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: "#c79546",
      }}
    >
      <View
        style={{
          width: scale(48),
          height: scale(48),
          justifyContent: "center",
          alignItems: "center",
          borderRadius: scale(48),
          position: "absolute",
          top: height / 2 - scale(48),
          marginLeft: scale(8),
          // elevation: 3,
          zIndex: 3,
        }}
      >
        {/* <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
          }}
          onPress={() => props.navigation.closeDrawer()}
        >
          <Icon name="chevron-right" size={32} color={Colors.White} />
        </TouchableOpacity> */}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          marginTop: scale(5),
          marginBottom: scale(5),
        }}
      >
        <Text
          style={{
            fontSize: fontScale(36),
            fontFamily: "W_esteghlal",
            // fontFamily: 'NotoKufiArabic-Regular',
            color: Colors.White,
          }}
        >
          فضيلة الشيخ ياسين رشدى
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          marginTop: scale(5),
          marginBottom: scale(5),
        }}
      >
        <Text
          style={{
            fontSize: fontScale(16),
            fontFamily: "NotoKufiArabic-Regular",
            color: Colors.White,
          }}
        >
          جمعية المواساة الإسلامية
        </Text>
      </View>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label={() => {
          return (
            <DayBookIcon
              color={Colors.White}
              width={scale(26)}
              height={scale(22)}
              scale={0.5}
            />
          );
        }}
        icon={() => {
          return (
            <View>
              <TouchableOpacity
                style={styles.item}
                // onPress={() => navigate("OtherScienceStack")}
                onPress={() => setShouldShow1(!shouldShow1)}
              >
                <Text
                  style={{
                    fontFamily: "NotoKufiArabic-Regular",
                    color: Colors.White,
                  }}
                >
                  العلوم الأخرى
                </Text>
              </TouchableOpacity>
              {shouldShow1 ? (
                <TouchableOpacity
                  style={styles.subItem}
                  onPress={() =>
                    navigate(
                      "OtherScienceStack",
                      Data.setState({ isTab: false })
                    )
                  }
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: Colors.White,
                      fontSize: 12,
                      marginRight: scale(20),
                      marginTop: 5,
                    }}
                  >
                    المواضيع الصوتية
                  </Text>
                </TouchableOpacity>
              ) : null}
              {shouldShow1 ? (
                <TouchableOpacity
                  style={styles.subItem}
                  onPress={() =>
                    navigate(
                      "OtherScienceStack",
                      Data.setState({ isTab: true })
                    )
                  }
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: Colors.White,
                      fontSize: 12,
                      marginRight: scale(20),
                    }}
                  >
                    المواضيع المرئية
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          );
        }}
        style={{
          flexDirection: "row-reverse",
        }}
        onPress={() => {}}
      /> */}
      {/* <DrawerItem
        label={() => {
          return (
            <SessionsOutlineIcon
              color={Colors.White}
              width={scale(26)}
              height={scale(22)}
              scale={0.5}
            />
          );
        }}
        icon={() => {
          return (
            <View>
              <TouchableOpacity
                style={styles.item}
                // onPress={() => navigate("SessionsStack")}
                onPress={() => setShouldShow2(!shouldShow2)}
              >
                <Text
                  style={{
                    fontFamily: "NotoKufiArabic-Regular",
                    color: Colors.White,
                  }}
                >
                  المجالس
                </Text>
              </TouchableOpacity>
              {shouldShow2 ? (
                <TouchableOpacity
                  onPress={() =>
                    navigate(
                      "SessionsStack",
                      Data.setState({ selectionIndex: 0 })
                    )
                  }
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: Colors.White,
                      fontSize: 12,
                      marginRight: scale(20),
                    }}
                  >
                    القرآن الكريم
                  </Text>
                </TouchableOpacity>
              ) : null}
              {shouldShow2 ? (
                <TouchableOpacity
                  onPress={() =>
                    navigate(
                      "SessionsStack",
                      Data.setState({ selectionIndex: 1 })
                    )
                  }
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: Colors.White,
                      fontSize: 12,
                      marginRight: scale(20),
                    }}
                  >
                    الحديث الشريف
                  </Text>
                </TouchableOpacity>
              ) : null}

              {shouldShow2 ? (
                <TouchableOpacity
                  style={styles.subItem}
                  onPress={() =>
                    navigate(
                      "SessionsStack",
                      Data.setState({ selectionIndex: 2 })
                    )
                  }
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: Colors.White,
                      fontSize: 12,
                      marginRight: scale(20),
                    }}
                  >
                    العلوم الأخرى
                  </Text>
                </TouchableOpacity>
              ) : null}
              {shouldShow2 ? (
                <TouchableOpacity
                  style={styles.subItem}
                  onPress={() =>
                    navigate(
                      "SessionsStack",
                      Data.setState({ selectionIndex: 2 })
                    )
                  }
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: Colors.White,
                      fontSize: 12,
                      marginRight: scale(20),
                    }}
                  >
                    الإسلام وأركانه
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          );
        }}
        style={{
          flexDirection: "row-reverse",
        }}
        onPress={() => {}}
      /> */}
      <DrawerItem
        label={() => {
          return <ShareIcon color={Colors.White} />;
        }}
        icon={() => {
          return (
            <Text
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
              }}
            >
              شارك التطبيق
            </Text>
          );
        }}
        style={{
          flexDirection: "row-reverse",
        }}
        onPress={() => {}}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          alignSelf: "stretch",
          marginTop: scale(50),
          paddingHorizontal: scale(36),
        }}
      >
        <View
          style={{
            width: scale(36),
            height: scale(36),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: scale(36),
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
            onPress={() =>
              handleClick(
                "https://www.facebook.com/pages/category/Religious-organization/Almouassa-101939102496489/"
              )
            }
          >
            <Image
              source={require("../../assets/images/drawer-facebook.png")}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: scale(36),
            height: scale(36),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: scale(36),
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
            onPress={() =>
              handleClick("https://instagram.com/almouassa?igshid=YmMyMTA2M2Y=")
            }
          >
            <Image
              source={require("../../assets/images/drawer-instagram.png")}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: scale(36),
            height: scale(36),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: scale(36),
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
            onPress={() => handleClick("https://twitter.com/almouassa?s=11")}
          >
            <Image
              source={require("../../assets/images/drawer-twitter.png")}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: scale(36),
            height: scale(36),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: scale(36),
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
            onPress={() => handleClick("https://youtube.com/c/YassinRoshdy")}
          >
            <Image
              source={require("../../assets/images/drawer-youtube.png")}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
