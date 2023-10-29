import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { scale } from "react-native-utils-scale";
import Colors from "../../constants/Colors";
import reactotron from "../../ReactotronConfig";
import { styles } from "./style";

const OtherScienceVideoItemsList = (props) => {
  const { data, onItemPress } = props;

  const RenderOtherScienceVideoItems = ({ otherScienceVideoItem }) => {
    return (
      <ImageBackground
        source={require("../../assets/images/tafsir-list-item-placeholder.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          height: scale(150),
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          marginVertical: scale(8),
          borderRadius: scale(8),
          borderWidth: scale(1),
          borderColor: "#011132",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            backgroundColor: "#01113270",
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "NotoKufiArabic-Regular",
              textAlign: "center",
              color: Colors.White,
            }}
          >
            {otherScienceVideoItem.title}
          </Text>
          <View
            style={{
              marginVertical: scale(12),
              borderRadius: scale(32),
              overflow: "hidden",
              // backgroundColor: Colors.SeaGreen,
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
              }}
              onPress={() => onItemPress(otherScienceVideoItem)}
            >
              <Image
                source={require("../../assets/images/media-play-button.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const { container } = styles;

  return (
    <FlatList
      keyExtractor={(otherScienceVideoItem, index) =>
        `${index}-${otherScienceVideoItem}`
      }
      data={data}
      renderItem={({ item }) => (
        <RenderOtherScienceVideoItems otherScienceVideoItem={item} />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
  );
};

export default OtherScienceVideoItemsList;
