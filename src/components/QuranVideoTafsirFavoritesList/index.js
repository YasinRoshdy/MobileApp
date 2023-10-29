import React from 'react';
import {
	View,
	Text,
	FlatList,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';
import PlayBigIcon from '../svg/PlayBigIcon';
import Colors from '../../constants/Colors';
import { styles } from './style';
import { convertNumberToArabic } from '../../utils/converters';

const QuranVideoTafsirFavoritesList = (props) => {
	const { data } = props;

	console.log('The List:', data);

	const RenderItems = ({ item }) => {
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
						numberOfLines={1}
						style={{
							fontSize: fontScale(16),
							fontFamily: 'NotoKufiArabic-Regular',
							color: Colors.White,
						}}
					>
						{`من الآية ${convertNumberToArabic(
							item.aya_start_count,
						)} إلى ${convertNumberToArabic(item.aya_end_count)}`}
					</Text>
					<View
						style={{
							marginVertical: scale(12),
							borderRadius: scale(32),
							overflow: 'hidden',
							// backgroundColor: Colors.MediumSlateBlue,
						}}
					>
						<TouchableOpacity
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'stretch',
								// backgroundColor: Colors.SeaGreen,
							}}
							onPress={() =>
								props.navigation.navigate(
									'QuranSuraVideoTafsir',
									{
										tafsir: item,
									},
								)
							}
						>
							<PlayBigIcon color={Colors.White} />
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		);
	};

	const { container } = styles;

	return (
		<FlatList
			keyExtractor={(item, index) => `${index}-${item}`}
			data={data}
			renderItem={({ item }) => <RenderItems item={item} />}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				flexGrow: 1,
				paddingHorizontal: scale(16),
			}}
		/>
	);
};

export default QuranVideoTafsirFavoritesList;
