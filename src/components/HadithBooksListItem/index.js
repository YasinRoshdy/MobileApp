import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import Colors from "../../constants/Colors";
import { styles } from "./style";

const HadithBooksListItem = (props) => {
  const { book } = props;
  const [isActive, setIsActive] = useState(false);

  const { container } = styles;

  return (
    <View
      style={{
        height: scale(40),
        justifyContent: "center",
        alignItems: "center",
        marginVertical: scale(4),
        paddingVertical: scale(2),
        borderRadius: scale(5),
        overflow: "hidden",
        backgroundColor: isActive ? "#c79546" : "#011132",
      }}
    >
      <TouchableWithoutFeedback
        onPressIn={() => setIsActive(true)}
        onPressOut={() => {
          setIsActive(false);
        }}
        onPress={() =>
          props.navigation.navigate("HadithBookChaptersList", {
            bookId: book.id,
            bookName: book.name,
          })
        }
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: fontScale(14),
              fontFamily: "NotoKufiArabic-Regular",
              color: Colors.White,
            }}
          >
            {book.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HadithBooksListItem;
