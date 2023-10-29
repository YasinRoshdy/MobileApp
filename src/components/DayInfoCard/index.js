import React from 'react';
import { View, Text, Image } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';
import { styles } from './style';

const DayInfoCard = (props) => {
	const { content } = props;

	const { container } = styles;

	return (
		<View
			style={{
				height: scale(120),
				// height: 150,
				justifyContent: 'center',
				alignItems: 'center',
				marginVertical: scale(8),
				borderRadius: scale(8),
				overflow: 'hidden',
				backgroundColor: '#011132',
			}}
		>
			<View
				style={{
					position: 'absolute',
					top: -10,
					left: -10,
				}}
			>
				<Image
					source={require('../../assets/images/islamic-star.png')}
				/>
			</View>
			<View
				style={{
					position: 'absolute',
					bottom: -10,
					right: -10,
				}}
			>
				<Image
					source={require('../../assets/images/islamic-star.png')}
				/>
			</View>
			<Text
				style={{
					fontSize: fontScale(12),
					fontFamily: 'NotoKufiArabic-Regular',
					textAlign: 'center',
					color: Colors.White,
				}}
			>
				{content}
			</Text>
		</View>
	);
};

export default DayInfoCard;
