import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PDF from "react-native-pdf";
import { baseUrl } from "../../../app.json";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import { fontScale, scale } from "react-native-utils-scale";
import { SafeAreaView } from "react-native";

const PDFViewerScreen = (props) => {
  const { fileUrl, fileTitle, page } = props.route.params;

  console.log(fileUrl);
  const { container } = styles;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        // backgroundColor: "#000825",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: scale(56),
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            alignSelf: "stretch",
            paddingHorizontal: scale(16),
            elevation: 3,
            backgroundColor: "#011132",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: fontScale(16),
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
              }}
            >
              {fileTitle}
            </Text>
          </View>
          <View
            style={{
              width: scale(48),
              height: scale(48),
              justifyContent: "center",
              alignItems: "center",
              marginLeft: scale(16),
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
              onPress={() => props.navigation.goBack()}
            >
              <Icon name="chevron-right" color="#fff" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <PDF
          trustAllCerts={false}
          source={{
            uri: `${fileUrl.startsWith("/") ? fileUrl.slice(1) : fileUrl}`,
          }}
          // onLoadComplete={(numberOfPages, filePath) => {}}
          // onPageChanged={(page, numberOfPages) => {}}
          onError={(error) => {
            console.log("Loading PDF Error:", error);
          }}
          // onPressLink={(uri) => {}}
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
          page={page}
        />
      </View>
    </SafeAreaView>
  );
};

export default PDFViewerScreen;
