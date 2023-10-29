import React from 'react';
import { View, Text } from 'react-native';
import { scale } from 'react-native-utils-scale';
import { styles } from './style';

const HadithTextTafsirList = (props) => {
	const { content } = props;

	const { container } = styles;

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				alignSelf: 'stretch',
				marginHorizontal: scale(16),
				marginBottom: scale(12),
				borderRadius: scale(8),
				borderWidth: scale(1),
				borderColor: '#011132',
				overflow: 'hidden',
			}}
		>
			<Text
				style={{
					fontFamily: 'NotoKufiArabic-Regular',
					color: '#011132',
				}}
			>
				{content}
			</Text>
		</View>
	);
};

export default HadithTextTafsirList;
