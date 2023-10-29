import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import { styles } from "./style";

const DayInfoButton = (props) => {
  const { icon, title, selected, onPress } = props;

  const { container } = styles;

  return (
    <View
      style={{
        width: scale(75),
        height: scale(75),
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: scale(5),
        borderWidth: scale(1),
        borderColor: selected ? "#c79546" : "#011132",
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
        }}
        onPress={onPress}
      >
        {icon}
        <Text
          style={{
            fontSize: fontScale(10),
            fontFamily: "NotoKufiArabic-Regular",
            color: selected ? "#c79546" : "#011132",
            textAlign: "right",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DayInfoButton;
