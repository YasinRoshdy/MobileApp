import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const FavoriteAudioDetails = (props) => {
	const { container } = styles;

	return (
		<View style={container}>
			<Text>Hello From FavoriteAudioDetails</Text>
		</View>
	);
};

export default FavoriteAudioDetails;
