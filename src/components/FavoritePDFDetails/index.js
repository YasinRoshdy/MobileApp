import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const FavoritePDFDetails = (props) => {
	const { container } = styles;

	return (
		<View style={container}>
			<Text>Hello From FavoritePDFDetails</Text>
		</View>
	);
};

export default FavoritePDFDetails;
