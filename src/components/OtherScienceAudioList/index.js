import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import OtherScienceAudioListItem from "../OtherScienceAudioListItem";
import { styles } from "./style";

const OtherScienceAudioList = (props) => {
  const { onItemPress } = props;

  const { otherScienceAudioList } = useSelector((state) => state.OtherScience);
  const RenderOtherScienceAudio = ({ audio }) => {
    return (
      <OtherScienceAudioListItem audio={audio} onItemPress={onItemPress} />
    );
    /* return (
			<View
				style={{
					height: scale(40),
					justifyContent: 'center',
					alignItems: 'center',
					marginVertical: scale(4),
					borderRadius: scale(5),
					overflow: 'hidden',
					backgroundColor: '#011132',
				}}
			>
				<TouchableOpacity
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'stretch',
					}}
					onPress={() => onItemPress(audio.id, audio.subjects)}
				>
					<Text
						style={{
							fontSize: fontScale(16),
							fontFamily: 'NotoKufiArabic-Regular',
							color: Colors.White,
						}}
					>
						{audio.subjects}
					</Text>
				</TouchableOpacity>
			</View>
		); */
  };

  const { container } = styles;

  return (
    <FlatList
      keyExtractor={(otherScienceAudio, index) =>
        `${index}-${otherScienceAudio}`
      }
      data={otherScienceAudioList?.sort((a, b) => a.order > b.order)}
      renderItem={({ item }) => <RenderOtherScienceAudio audio={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: scale(16),
        paddingVertical: scale(8),
      }}
    />
  );
};

export default OtherScienceAudioList;
