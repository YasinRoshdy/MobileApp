import React from "react";
import { View, ImageBackground, Text, ScrollView } from "react-native";
import { scale } from "react-native-utils-scale";
import {
  elfatehaTextJoiner,
  eltaoubaTextJoiner,
  suraTextJoiner,
  suraTextJoinerWithBasmala,
} from "../../utils/arrayOperations";
import { styles } from "./style";
import QuranText from "../../utils/QuranText";

const QuranSuraView = (props) => {
  // const { sura } = useSelector((state) => state.Quran);

  const { sura, suraId, style } = props;

  const { container } = styles;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "stretch",
      }}
    >
      <ImageBackground
        source={require("../../assets/images/sura-new-border.png")}
        resizeMode="stretch"
        style={[
          {
            // flex: 1,
            // flexShrink: 1,
            // height: 50,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            marginBottom: scale(10),
            paddingHorizontal: scale(16),
            paddingVertical: scale(16),
          },
          style,
        ]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            // flex: 1,
            flexShrink: 1,
            alignSelf: "stretch",
          }}
        >
          <QuranText
            style={{
              fontSize: scale(18),
              fontFamily: "Quran",
              // fontFamily: 'Al-Qalam-Quran',
              // fontWeight: 'bold',
              // fontFamily: 'NotoKufiArabic-Regular',
              textAlign: "center",
              color: "#011132",
              // backgroundColor: Colors.SeaGreen,
            }}
          >
            {suraId === 231
              ? elfatehaTextJoiner(sura?.text)
              : suraId === 239
              ? eltaoubaTextJoiner(sura?.text)
              : suraTextJoinerWithBasmala(sura?.text)}
          </QuranText>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default QuranSuraView;
