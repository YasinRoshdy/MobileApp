import React from "react";
import { View, Text } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import Colors from "../../constants/Colors";
import StyledButton from "../StyledButton";
import { styles } from "./style";

const ArticleBrief = (props) => {
  const { title, body, buttonTitle, onButtonPress, buttonStyle } = props;

  const { container } = styles;

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        marginVertical: scale(4),
      }}
    >
      <View
        style={{
          alignSelf: "stretch",
          alignItems: "flex-end",
          marginVertical: scale(3),
        }}
      >
        <Text
          style={{
            fontSize: fontScale(16),
            fontFamily: "NotoKufiArabic-Regular",
            color: "#c79546",
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          alignSelf: "stretch",
          alignItems: "flex-end",
          marginVertical: scale(3),
        }}
      >
        <Text
          numberOfLines={3}
          style={{
            fontSize: fontScale(12),
            fontFamily: "NotoKufiArabic-Regular",
            color: "#011132",
            textAlign: "right",
          }}
        >
          {body}
        </Text>
      </View>
      <View
        style={{
          alignSelf: "stretch",
        }}
      >
        <StyledButton
          buttonTitle={buttonTitle}
          onPress={onButtonPress}
          inactiveColor="#011132"
          activeColor="#c79546"
          style={[
            {
              width: scale(135),
              left: scale(10),
              // backgroundColor: '',
            },
            buttonStyle,
          ]}
        />
      </View>
    </View>
  );
};

export default ArticleBrief;
