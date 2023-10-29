import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import Colors from "../../constants/Colors";
import { convertNumberToArabic } from "../../utils/converters";
import { styles } from "./style";

const QuranSurasListItem = (props) => {
  const { sura } = props;
  const [isActive, setIsActive] = useState(false);

  const { container } = styles;

  return (
    <View
      style={{
        height: scale(40),
        justifyContent: "center",
        alignItems: "center",
        marginVertical: scale(4),
        // paddingHorizontal: 16,
        borderRadius: scale(5),
        overflow: "hidden",
        backgroundColor: isActive ? "#c79546" : "#011132",
      }}
    >
      <TouchableWithoutFeedback
        /* style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					alignSelf: 'stretch',
					// backgroundColor: Colors.SeaGreen,
				}} */
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        /* onPressOut={() => {
					setIsActive(false);
					props.navigation.navigate('QuranSuraDetails', {
						suraId: sura.id,
					});
				}} */
        onPress={() =>
          props.navigation.navigate("QuranSuraDetails", {
            suraId: sura.id,
          })
        }
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <Text
            style={{
              fontSize: fontScale(14),
              fontFamily: "NotoKufiArabic-Regular",
              color: Colors.White,
            }}
          >{`${sura.location}`}</Text>
          <Text
            style={{
              fontSize: fontScale(14),
              fontFamily: "NotoKufiArabic-Regular",
              color: Colors.White,
            }}
          >
            -
          </Text>
          <Text
            style={{
              fontSize: fontScale(14),
              fontFamily: "NotoKufiArabic-Regular",
              color: Colors.White,
            }}
          >{` عدد الايات ${convertNumberToArabic(sura.ayas_count)}`}</Text>
          <Text
            style={{
              fontSize: fontScale(14),
              fontFamily: "NotoKufiArabic-Regular",
              color: Colors.White,
            }}
          >
            -
          </Text>
          <Text
            style={{
              fontSize: fontScale(14),
              fontFamily: "NotoKufiArabic-Regular",
              color: Colors.White,
            }}
          >{` ${sura.name}`}</Text>
          <Text
            style={{
              fontSize: fontScale(14),
              fontFamily: "NotoKufiArabic-Regular",
              color: Colors.White,
            }}
          >
            -
          </Text>
          <Text
            style={{
              fontSize: fontScale(14),
              fontFamily: "NotoKufiArabic-Regular",
              color: Colors.White,
            }}
          >{`${convertNumberToArabic(sura.number)}`}</Text>
          {/* <Text
					style={{
						fontSize: 16,
						fontFamily: 'NotoKufiArabic-Regular',
						color: Colors.White,
					}}
				>
					{`${sura.number} - ${sura.name} - عدد الايات ${sura.ayas_count} - ${sura.location}`}
				</Text> */}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default QuranSurasListItem;
