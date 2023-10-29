import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AudioFavoriteItem from '../AudioFavoriteItem';
import { styles } from './style';

const AudioFavoriteList = (props) => {
	const { data } = props;

	const RenderItems = ({ item, index }) => {
		return (
			<AudioFavoriteItem
				audioAya={item}
				// sura={sura}
				// shouldCollapse={activeIndex !== index}
				// onExpand={() => {
				// setActiveIndex(index);
				// }}
				// onCollapse={() => {
				// setActiveIndex(-1);
				// }}
				// isFavorite={quranAudioTelawaFavorites.includes(audioAya)}
			/>
		);
	};

	const { container } = styles;

	return (
		<View
			style={{
				paddingHorizontal: 16,
			}}
		>
			<FlatList
				keyExtractor={(item, index) => `${index}-${item}`}
				data={data}
				renderItem={({ item, index }) => (
					<RenderItems item={item} index={index} />
				)}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					flexGrow: 1,
				}}
			/>
		</View>
	);
};

export default AudioFavoriteList;
