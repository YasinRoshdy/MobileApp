import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';
import PlayBigIcon from '../svg/PlayBigIcon';
import Colors from '../../constants/Colors';
import { styles } from './style';

const VideoFavoritesList = (props) => {
	const { item, onItemPress, onItemLongPress } = props;

	return (
		<ImageBackground
			source={require('../../assets/images/tafsir-list-item-placeholder.png')}
			resizeMode='cover'
			style={{
				flex: 1,
				height: scale(150),
				justifyContent: 'center',
				alignItems: 'center',
				alignSelf: 'stretch',
				marginVertical: scale(8),
				borderRadius: scale(8),
				borderWidth: scale(1),
				borderColor: '#011132',
				overflow: 'hidden',
			}}
		>
			<TouchableOpacity
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'stretch',
				}}
				onLongPress={onItemLongPress}
			>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'stretch',
						backgroundColor: '#01113270',
					}}
				>
					<Text
						style={{
							fontSize: fontScale(16),
							fontFamily: 'NotoKufiArabic-Regular',
							color: Colors.White,
						}}
					>
						{item.title}
					</Text>
					<View
						style={{
							marginVertical: scale(12),
							borderRadius: scale(32),
							overflow: 'hidden',
						}}
					>
						<TouchableOpacity
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'stretch',
							}}
							onPress={onItemPress}
						>
							<PlayBigIcon color={Colors.White} />
						</TouchableOpacity>
					</View>
				</View>
			</TouchableOpacity>
		</ImageBackground>
	);
};

export default VideoFavoritesList;
