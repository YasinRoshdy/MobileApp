import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
	View,
	Text,
	FlatList,
	ImageBackground,
	Image,
	TouchableOpacity,
	TouchableWithoutFeedback,
	ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PlayBigIcon from '../svg/PlayBigIcon';
import Colors from '../../constants/Colors';
import { videoTafsirs } from '../../data/tafser';
import { styles } from './style';
import { fontScale, scale } from 'react-native-utils-scale';
import {
	setIsSuraVideoTafsirLoading,
	setSuraVideoTafsirList,
} from '../../redux/actions/quranActions';
import { getAyatTafsirVideoList } from '../../api/quran';

const QuranSuraVideoTafsirList = (props) => {
	const { navigation } = props;
	const { isSuraVideoTafsirLoading, suraVideoTafsirList, sura } = useSelector(
		(state) => state.Quran,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsSuraVideoTafsirLoading(true));
		getAyatTafsirVideoList(sura.id, {
			success: (res) => {
				dispatch(setIsSuraVideoTafsirLoading(false));
				dispatch(setSuraVideoTafsirList(res.data));
			},
			error: (error) => {
				dispatch(setIsSuraVideoTafsirLoading(false));
				console.log('Sura Audio Tafsir Error:', error);
			},
		});
	}, []);

	const RenderVideoTafsirs = ({ tafsir }) => {
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
						style={{
							fontSize: fontScale(16),
							fontFamily: 'NotoKufiArabic-Regular',
							color: Colors.White,
						}}
					>
						{/* {tafsir.title} */}
						{/* </Text> */}
						{/* <Text style={{ color: '#000825' }}> */}
						من الآية {tafsir.aya_start_count} إلى{' '}
						{tafsir.aya_end_count}
						{/* من الآية {tafsir.aya_start_count} إلى {tafsir.aya_end_count} */}
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
								navigation.navigate('QuranSuraVideoTafsir', {
									tafsir: tafsir,
								})
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

	return isSuraVideoTafsirLoading ? (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				alignSelf: 'stretch',
			}}
		>
			<ActivityIndicator size={52} color='#011132' />
		</View>
	) : (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				// alignItems: 'center',
				alignSelf: 'stretch',
				paddingHorizontal: scale(16),
				// backgroundColor: Colors.SeaGreen,
			}}
		>
			<FlatList
				keyExtractor={(videoTafsir, index) => `${index}-${videoTafsir}`}
				data={suraVideoTafsirList}
				renderItem={({ item }) => <RenderVideoTafsirs tafsir={item} />}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					flexGrow: 1,
				}}
			/>
		</View>
	);
};

export default QuranSuraVideoTafsirList;
