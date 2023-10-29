import React, { useCallback, useState } from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fontScale, scale } from 'react-native-utils-scale';
import YoutubePlayer from 'react-native-youtube-iframe';
import ScreenHeader from '../../components/ScreenHeader';
import StyledButton from '../../components/StyledButton';
import SaveIcon from '../../components/svg/SaveIcon';
import FavoriteOutlineIcon from '../../components/svg/FavoriteOutlineIcon';
import ShareIcon from '../../components/svg/ShareIcon';
import Colors from '../../constants/Colors';
import { styles } from './style';
import Orientation from "react-native-orientation";
import YtPlayer from "../../components/YoutubePlayer";
import {onShare} from "../../utils/savers";
import {useNavigation} from "@react-navigation/native";
// import { saveSuraAyatTafsirVideo } from '../../utils/savers';
/* import {
	addToFavorites,
	addToQuranVideoTafsirFavorites,
	removeFromQuranVideoTafsirFavorites,
} from '../../redux/actions/favoritesActions'; */

const HadithVideoTafsirScreen = (props) => {
	const { tafsir } = props.route.params;
	const { hadithVideoTafsirFavorites } = useSelector(
		(state) => state.Favorites,
	);

	const [isPlaying, setIsPlaying] = useState(false);

	const { navigate } = useNavigation();

	const onStateChange = useCallback((state) => {
		if (state === 'ended') {
			setIsPlaying(false);
		}
		if (state === 'playing') {
			navigate("YtFullScreen", { videoId: tafsir.video_url});
		}
	}, []);
	const togglePlaying = useCallback(() => {
		setIsPlaying((prev) => !prev);
	}, []);

	const { container } = styles;

	return (
		<View style={container}>
			<StatusBar
				barStyle='light-content'
				animated
				backgroundColor='#000825'
			/>
			<ScreenHeader
				hasBackButton
				replaceMenu
				onBackPress={() => props.navigation.goBack()}
			/>
			<ImageBackground
				source={require('../../assets/images/app-background.png')}
				resizeMode='cover'
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'stretch',
					// paddingBottom: 8,
					paddingHorizontal: scale(16),
					// backgroundColor: Colors.Blue,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-end',
						alignSelf: 'stretch',
						marginHorizontal: scale(16),
						// backgroundColor: Colors.SeaGreen,
					}}
				>
					<Text
						style={{
							fontSize: fontScale(16),
							fontFamily: 'NotoKufiArabic-Regular',
							color: '#c79546',
						}}
					>
						التفسير المرئى
					</Text>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: 'flex-start',
						alignItems: 'center',
						alignSelf: 'stretch',
						// backgroundColor: Colors.SeaGreen,
					}}
				>
					<View
						style={{
							alignSelf: 'stretch',
							marginVertical: scale(8),
							// backgroundColor: Colors.Blue,
						}}
					>
						<YtPlayer
							videoId={tafsir.video_url}
							isPlaying={isPlaying}
							onStateChange={onStateChange}
						/>
					</View>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'stretch',
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'stretch',
								paddingHorizontal: scale(32),
							}}
						>
							<View style={{ flex: 1 }} />
							<StyledButton
								buttonTitle='مفضله'
								buttonTitleColor={Colors.White}
								// buttonTitleColor='#c79546'
								hideBGShape
								inactiveColor='#011132'
								activeColor='#c79546'
								icon={
									<FavoriteOutlineIcon
										color={
											hadithVideoTafsirFavorites.includes(
												tafsir,
											)
												? '#011132'
												: Colors.White
										}
									/>
								}
								// icon={<FavoriteOutlineIcon color='#c79546' />}
								style={{
									flex: 3,
									// backgroundColor: '#c79546',
									borderRadius: scale(5),
									// backgroundColor: '#011132',
								}}
								/* onPress={
									hadithVideoTafsirFavorites.includes(tafsir)
										? () =>
												dispatch(
													removeFromQuranVideoTafsirFavorites(
														tafsir,
													),
												)
										: () =>
												dispatch(
													addToQuranVideoTafsirFavorites(
														tafsir,
													),
												)
								} */
							/>
							<View style={{ flex: 1 }} />
							<StyledButton
								buttonTitle='تحميل'
								buttonTitleColor={Colors.White}
								// buttonTitleColor='#c79546'
								inactiveColor='#011132'
								activeColor='#c79546'
								hideBGShape
								icon={<SaveIcon color={Colors.White} />}
								style={{
									flex: 3,
									// backgroundColor: '#c79546',
									borderRadius: scale(5),
									// backgroundColor: '#011132',
								}}
								/* onPress={() =>
									saveSuraAyatTafsirVideo(
										tafsir.file,
										`/Videos/Quran/Tafsir/Sura_${sura.id}`,
										`tafsir_as${tafsir.aya_start_count}_ae${tafsir.aya_end_count}`,
									)
								} */
							/>
							<View style={{ flex: 1 }} />
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'stretch',
							}}
						>
							<View style={{ flex: 4 }} />
							<StyledButton
								buttonTitle='شارك'
								buttonTitleColor={Colors.White}
								// buttonTitleColor='#c79546'
								hideBGShape
								inactiveColor='#011132'
								activeColor='#c79546'
								icon={<ShareIcon color={Colors.White} />}
								// icon={<ShareIcon color='#c79546' />}
								style={{
									flex: 3,
									// backgroundColor: '#c79546',
									borderRadius: scale(5),
									// backgroundColor: '#011132',
								}}
								onPress={ () => onShare(`${tafsir.video_url}`) }
							/>
							<View style={{ flex: 4 }} />
						</View>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

export default HadithVideoTafsirScreen;
