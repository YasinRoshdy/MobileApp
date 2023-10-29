import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
function ScreenHeader(props) {
  const {
    hasBackButton,
    flipBackButton,
    replaceMenu,
    onBackPress,
    onMenuPress,
    isSearch,
  } = props;

  const { container } = styles;
  const [searchText, setSearchText] = useState("");
  const [isResponseAvailable, setIsResponseAvailable] = useState(false);
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState();
  const { navigate } = useNavigation();
  const handleSearch = async () => {
    setIsLoading(true);
    const response = await handleGetApi(
      "http://44.198.165.1/searchapi/?mainq=" + searchText
    );
    console.log(response);
    if (response) {
      setIsResponseAvailable(true);
      setIsLoading(false);
      navigate("SearchScreen", { result: response?.data, key: searchText });
    } else {
      setIsResponseAvailable(false);
      setIsLoading(false);
    }
  };
  const handleGetApi = async (url, token) => {
    // console.log(url, token);
    let requestOptions = {};
    if (token) {
      requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      };
    } else {
      requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
    }
    console.log("Get call started...");
    try {
      const response = await fetch(url, requestOptions);
      const responseJson = await response.json();
      console.log(responseJson);
      if (response.status === 200) {
        const finalResponse = { data: responseJson, status: response.status };
        return finalResponse;
      } else if (response.status === 401) {
        Alert.alert("Alert", "Unauthorized Request");
        return null;
      } else if (response.status === 500) {
        Alert.alert("Alert", "Internal server error");
        return null;
      } else if (response.status === 403) {
        Alert.alert(
          "Alert",
          "Incorrect Credentials, please verify your credentials"
        );
        return null;
      }
    } catch (error) {
      console.error(error.message);
      Alert.alert("Alert", error.message);
      return null;
    }
  };
  return (
    <View
      style={{
        width: "100%",
        height: scale(128),
        backgroundColor: "#011132",
      }}
    >
      {/* Top Header Container */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          // backgroundColor: Colors.IndianRed,
        }}
      >
        {/* Back Icon */}
        {hasBackButton ? (
          <View
            style={{
              width: scale(48),
              height: scale(48),
              position: "absolute",
              right: 16,
              borderRadius: scale(48),
              overflow: "hidden",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
              }}
              onPress={onBackPress}
            >
              <Icon name={"chevron-right"} color={Colors.White} size={24} />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              width: scale(48),
              height: scale(48),
              position: "absolute",
              right: 16,
              borderRadius: scale(48),
              overflow: "hidden",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
              }}
              onPress={onMenuPress}
            >
              <Icon name={"menu"} color={Colors.White} size={24} />
            </TouchableOpacity>
          </View>
        )}
        {/* Menu Icon */}

        {/* Header Titles */}
        <View
          style={{
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: scale(3),
          }}
        >
          <Text
            style={{
              fontSize: fontScale(24),
              fontFamily: "W_esteghlal",
              color: Colors.White,
            }}
          >
            فضيلة الشيخ ياسين رشدى
          </Text>
          <Text
            style={{
              fontSize: fontScale(12),
              fontFamily: "NotoKufiArabic-Regular",
              color: Colors.White,
            }}
          >
            جمعية المواساة الإسلامية
          </Text>
        </View>
      </View>
      {/* Bottom Header Container */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: Colors.SeaGreen,
        }}
      >
        {/* Header Search Input Container */}
        {isSearch === false ? null : (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              flexDirection: "row",
              marginHorizontal: scale(20),
              paddingHorizontal: scale(10),
              borderRadius: scale(26),
              overflow: "hidden",
              backgroundColor: Colors.White,
              height: 40,
              // backgroundColor: Colors.BlueViolet,
            }}
          >
            {/* Header Search Icon Container */}

            {isLoading ? (
              <View
                style={{
                  marginLeft: scale(4),
                  // backgroundColor: Colors.Yellow,
                }}
              >
                <ActivityIndicator />
              </View>
            ) : (
              <View
                style={{
                  marginLeft: scale(4),
                  // backgroundColor: Colors.Yellow,
                }}
              >
                <Icon
                  name="magnify"
                  color={Colors.Gray}
                  size={24}
                  onPress={() => handleSearch()}
                />
              </View>
            )}
            {/* Header Search Input Container */}
            <TextInput
              placeholder="ابحث هنا"
              placeholderTextColor={Colors.GreyOpacity}
              style={{
                flex: 1,
                // backgroundColor: Colors.Crimson,
                color: Colors.Black,
                textAlign: "right",
              }}
              onChangeText={(value) => setSearchText(value)}
              value={searchText}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export default ScreenHeader;
