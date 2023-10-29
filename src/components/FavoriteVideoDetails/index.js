import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const FavoriteVideoDetails = (props) => {
	const { container } = styles;

	return (
		<View style={container}>
			<Text>Hello From FavoriteVideoDetails</Text>
		</View>
	);
};

export default FavoriteVideoDetails;
