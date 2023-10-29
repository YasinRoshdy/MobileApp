import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import Colors from "../../constants/Colors";
import { styles } from "./style";

const OtherScienceAudioListItem = (props) => {
  const { audio, onItemPress } = props;
  const [isActive, setIsActive] = useState(false);

  const { container } = styles;

  return (
    <View
      style={{
        height: scale(40),
        justifyContent: "center",
        alignItems: "center",
        marginVertical: scale(4),
        borderRadius: scale(5),
        overflow: "hidden",
        backgroundColor: isActive ? "#c79546" : "#011132",
      }}
    >
      <TouchableWithoutFeedback
        /* style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'stretch',
				}} */
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        onPress={() => onItemPress(audio.id, audio.subjects)}
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
            style={{
              fontSize: fontScale(16),
              fontFamily: "NotoKufiArabic-Regular",
              color: Colors.White,
            }}
          >
            {audio.subjects}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default OtherScienceAudioListItem;
