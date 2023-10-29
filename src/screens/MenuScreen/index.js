import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Linking,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { fontScale, scale, height } from "react-native-utils-scale";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MenuItems from "../../components/MenuITems";
import { useNavigation } from "@react-navigation/native";
function MenuScreen(props) {
  const { navigate, goBack } = useNavigation();
  const handleClick = (url) => {
    Linking.openURL(url);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "#c79546",
      }}
    >
      <StatusBar barStyle="light-content" animated backgroundColor="#c79546" />
      <View style={styles.container}>
        <ScrollView>
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
              zIndex: 3,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
              }}
              onPress={goBack}
              // onPress={() => props.navigation.closeDrawer()}
            >
              <Icon name="chevron-right" size={32} color={Colors.White} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              // alignItems: "center",
              alignSelf: "stretch",
              marginTop: scale(5),
              marginBottom: scale(5),
              marginRight: 30,
            }}
          >
            <Text
              style={{
                fontSize: fontScale(36),
                fontFamily: "W_esteghlal",
                // fontFamily: 'NotoKufiArabic-Regular',
                color: Colors.White,
                textAlign: "right",
              }}
            >
              فضيلة الشيخ ياسين رشدى
            </Text>
          </View>
          <View
            style={{
              // justifyContent: "center",
              // alignItems: "center",
              alignSelf: "stretch",
              marginTop: scale(5),
              marginBottom: scale(5),
              marginRight: 30,
            }}
          >
            <Text
              style={{
                fontSize: fontScale(16),
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
                textAlign: "right",
              }}
            >
              جمعية المواساة الإسلامية
            </Text>
          </View>
          <MenuItems />
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
                  handleClick(
                    "https://instagram.com/almouassa?igshid=YmMyMTA2M2Y="
                  )
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
                onPress={() =>
                  handleClick("https://twitter.com/almouassa?s=11")
                }
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
                onPress={() =>
                  handleClick("https://youtube.com/c/YassinRoshdy")
                }
              >
                <Image
                  source={require("../../assets/images/drawer-youtube.png")}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c79546",
    width: "100%",
    height: "100%",
  },
});
export default MenuScreen;
