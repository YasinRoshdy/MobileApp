import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import { scale, fontScale } from "react-native-utils-scale";

const StyledButton = (props) => {
  const {
    buttonTitle,
    buttonTitleColor,
    icon,
    hideBGShape,
    onPress,
    style,
    activeColor,
    inactiveColor,
  } = props;
  const [isActive, setIsActive] = useState(false);

  const { container } = styles;

  return (
    <View
      style={[
        {
          width: scale(160),
          height: scale(40),
          justifyContent: "center",
          marginVertical: scale(3),
          padding: scale(4),
          overflow: "hidden",
          backgroundColor: isActive ? "#c79546" : "transparent",

          // backgroundColor: '#c79546',
          // backgroundColor: '#011132',
        },
        style,
      ]}
    >
      <TouchableWithoutFeedback
        /* style={{
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'stretch',
				}} */
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        onPress={onPress}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          {hideBGShape ? (
            <View
              style={{
                flexDirection: icon ? "row" : "column",
                justifyContent: icon ? "center" : "center",
                alignItems: "center",
                alignSelf: "stretch",
                padding: scale(1),
              }}
            >
              <Text
                numberOfLines={null}
                style={{
                  fontSize: fontScale(13),
                  fontFamily: "NotoKufiArabic-Bold",
                  color: buttonTitleColor ?? "#011132",
                  textAlign: "center",
                }}
              >
                {buttonTitle}
              </Text>
              {icon}
            </View>
          ) : (
            <ImageBackground
              source={require("../../assets/images/intro-new-button.png")}
              resizeMode="stretch"
              style={{
                flexDirection: icon ? "row" : "column",
                justifyContent: icon ? "center" : "center",
                alignItems: "center",
                alignSelf: "stretch",
                padding: scale(7),
                height: scale(70),
              }}
            >
              <Text
                numberOfLines={null}
                style={{
                  fontSize: fontScale(13),
                  fontFamily: "NotoKufiArabic-Bold",
                  color: buttonTitleColor ?? "#011132",
                  textAlign: "center",
                  marginHorizontal: 5,
                }}
              >
                {buttonTitle}
              </Text>
              {icon}
            </ImageBackground>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default StyledButton;
