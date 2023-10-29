import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import OtherScienceVideoListItem from "../OtherScienceVideoListItem";
import { styles } from "./style";

const OtherScienceVideoList = (props) => {
  const { onItemPress } = props;

  const { otherScienceVideoList } = useSelector((state) => state.OtherScience);
  const RenderOtherScienceVideo = ({ video }) => {
    return (
      <OtherScienceVideoListItem video={video} onItemPress={onItemPress} />
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
					onPress={() => onItemPress(video.id, video.subjects)}
				>
					<Text
						style={{
							fontSize: fontScale(16),
							fontFamily: 'NotoKufiArabic-Regular',
							color: Colors.White,
						}}
					>
						{video.subjects}
					</Text>
				</TouchableOpacity>
			</View>
		); */
  };

  const { container } = styles;

  return (
    <FlatList
      keyExtractor={(otherScienceVideo, index) =>
        `${index}-${otherScienceVideo}`
      }
      data={otherScienceVideoList?.sort((a, b) => a.order > b.order)}
      renderItem={({ item }) => <RenderOtherScienceVideo video={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: scale(16),
        paddingVertical: scale(8),
      }}
    />
  );
};

export default OtherScienceVideoList;
