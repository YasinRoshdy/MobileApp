import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';
import HomeIcon from '../svg/HomeIcon';
import { styles } from './style';

const BottomNavigationButton = (props) => {
	const { title, icon, selected, onPress } = props;

	const { container } = styles;

	return (
		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<TouchableOpacity
				style={{
					flex: 1,
					justifyContent: 'space-evenly',
					alignItems: 'center',
					alignSelf: 'stretch',
				}}
				onPress={onPress}
			>
				{icon}
				<Text
					style={{
						fontSize: fontScale(10),
						fontFamily: 'NotoKufiArabic-Regular',
						color: '#011132',
					}}
				>
					{title}
				</Text>
				{selected ? (
					<View
						style={{
							width: '100%',
							height: scale(3),
							position: 'absolute',
							top: 0,
							borderRadius: scale(20),
							overflow: 'hidden',
							backgroundColor: '#c79546',
						}}
					/>
				) : null}
			</TouchableOpacity>
		</View>
	);
};

export default BottomNavigationButton;
