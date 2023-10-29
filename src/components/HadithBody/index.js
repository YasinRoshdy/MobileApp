import React from "react";
import { View, Text, ScrollView } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import { useSelector } from "react-redux";
import { styles } from "./style";
import RenderHTML from "react-native-render-html";
const HadithBody = (props) => {
  const { hadith } = useSelector((state) => state.Hadith);
  const { container } = styles;
  const tagsStyles = {
    body: {
      textAlign: "right",
      alignItems: "flex-end",
      justifyContent: "start",
      dir: "rtl",
      color: "#000000"
    },
    ul: {
      dir: "rtl",
    },
    ol: {
      dir: "rtl",
    },
    li: {
      dir: "rtl",
    },
  };
  const renderersProps = {
    // Experimental RTL support is only available for list elements.
    ol: { enableExperimentalRtl: true },
    ul: { enableExperimentalRtl: true },
  };

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: scale(16),
        marginVertical: scale(4),
        paddingHorizontal: scale(4),
        paddingVertical: scale(4),
        borderRadius: scale(8),
        borderWidth: scale(1),
        borderColor: "#011132",
        overflow: "hidden",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          alignSelf: "stretch",
          paddingHorizontal: 4,
          textAlign: "right",
        }}
      >
        <RenderHTML
          source={{ html: hadith?.text_without_tashkil }}
          contentWidth="100%"
          tagsStyles={tagsStyles}
          renderersProps={renderersProps}
        />
        {/* <Text
          style={{
            fontSize: fontScale(19),
            fontFamily: "NotoKufiArabic-Regular",
            textAlign: "right",
            textAlignVertical: "center",
            lineHeight: scale(35),
            color: "#011132",
          }}
        >
          {hadith.text}
        </Text> */}
      </ScrollView>
    </View>
  );
};

export default HadithBody;
