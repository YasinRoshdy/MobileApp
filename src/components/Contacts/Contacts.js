import React from "react";
import { Linking } from "react-native";
import { Text, View } from "react-native";

export const Contacts = ({ number, institution, contact, line }) => {
  return (
    <View
      style={{
        width: "98%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 3,
      }}
    >
      <Text
        style={{
          width: "40%",
          fontSize: 10,
          color: "#000",
          fontFamily: "NotoKufiArabic-Regular",
          textAlign: "center",
        }}
      >
        {line}
      </Text>
      <Text
        style={{
          width: "25%",
          fontSize: 10,
          color: "#000",
          fontFamily: "NotoKufiArabic-Regular",
          textAlign: "center",
        }}
        onPress={() => {
          Linking.openURL("tel:" + contact);
        }}
      >
        {contact}
      </Text>
      <Text
        style={{
          width: "30%",
          fontSize: 10,
          color: "#000",
          fontFamily: "NotoKufiArabic-Regular",
          textAlign: "center",
        }}
      >
        {institution}
      </Text>
      <Text
        style={{
          width: "2%",
          fontSize: 10,
          color: "#000",
          fontFamily: "NotoKufiArabic-Regular",
          textAlign: "center",
        }}
      >
        {number}
      </Text>
    </View>
  );
};
