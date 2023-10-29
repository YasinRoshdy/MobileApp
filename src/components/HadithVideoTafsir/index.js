import React, { useCallback, useState } from 'react';
import {
	View,
	Text,
	Image,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';
import StyledButton from '../StyledButton';
import SaveIcon from '../svg/SaveIcon';
import FavoriteOutlineIcon from '../svg/FavoriteOutlineIcon';
import ShareIcon from '../svg/ShareIcon';
// import PlayBigIcon from '../svg/PlayBigIcon';
import Colors from '../../constants/Colors';
import { styles } from './style';
import { scale } from 'react-native-utils-scale';
import {onShare, saveHadithTafsirVideo} from '../../utils/savers';
import {
	addToFavorites,
	addToHadithVideoTafsirFavorites,
	removeFromFavorites,
	removeFromHadithVideoTafsirFavorites,
} from '../../redux/actions/favoritesActions';
import { hadithVideoTafsirFavoriteObject } from '../../utils/mappers';
import { convertNumberToArabic } from '../../utils/converters';
import { arrayIncludes, arrayItemIndex } from '../../utils/arrayOperations';
import YtPlayer from "../YoutubePlayer";
import {useNavigation} from "@react-navigation/native";

const HadithVideoTafsir = (props) => {
	const { hadithId, bookName, chapterName } = props;
	const { hadithTafsir } = useSelector((state) => state.Hadith);
	const {
		favorites,
		// hadithVideoTafsirFavorites
	} = useSelector((state) => state.Favorites);

	const [isPlaying, setIsPlaying] = useState(false);

	const dispatch = useDispatch();

	const { navigate } = useNavigation();

	const onStateChange = useCallback((state) => {
		if (state === 'ended') {
			setIsPlaying(false);
		}
		if (state === 'playing') {
			navigate("YtFullScreen", { videoId: hadithTafsir.video_url});
		}
	}, []);

	const togglePlaying = useCallback(() => {
		setIsPlaying((prev) => !prev);
	}, []);

	const favObject = {
		title: `تفسير الحديث ${convertNumberToArabic(
			hadithTafsir.hadith,
		)} - باب ${chapterName} - ${bookName}`,
		...hadithTafsir,
	};

	const { container } = styles;

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				// alignItems: 'center',
				alignSelf: 'stretch',
				marginHorizontal: scale(16),
			}}
		>
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
						marginVertical: scale(1),
						// backgroundColor: Colors.Blue,
					}}
				>
					<YtPlayer
						videoId={hadithTafsir.video_url}
						isPlaying={isPlaying}
						onStateChange={onStateChange}
					/>
				</View>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'stretch',
						// backgroundColor: Colors.Blue,
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							alignSelf: 'stretch',
							paddingHorizontal: scale(32),
							// backgroundColor: Colors.MediumOrchid,
						}}
					>
						<View style={{ flex: 1 }} />
						<StyledButton
							buttonTitle='مفضله'
							buttonTitleColor={Colors.White}
							activeColor='#011132'
							inactiveColor='#c79546'
							// buttonTitleColor='#c79546'
							hideBGShape
							icon={
								<FavoriteOutlineIcon
									color={
										arrayIncludes(favorites, favObject)
											? '#011132'
											: Colors.White
									}
								/>
							}
							// icon={<FavoriteOutlineIcon color='#c79546' />}
							style={{
								flex: 3,
								borderRadius: scale(5),
							}}
							onPress={
								arrayIncludes(favorites, favObject)
									? () =>
											dispatch(
												removeFromFavorites(
													favorites[
														arrayItemIndex(
															favorites,
															hadithVideoTafsirFavoriteObject(
																favObject,
															),
														)
													],
												),
											)
									: () =>
											dispatch(
												addToFavorites(
													hadithVideoTafsirFavoriteObject(
														favObject,
													),
												),
											)
							}
						/>
						<View style={{ flex: 1 }} />
						<StyledButton
							buttonTitle='تحميل'
							buttonTitleColor={Colors.White}
							activeColor='#011132'
							inactiveColor='#c79546'
							hideBGShape
							icon={<SaveIcon color={Colors.White} />}
							style={{
								flex: 3,
								borderRadius: scale(5),
								// backgroundColor: '#c79546',
							}}
							onPress={() =>
								saveHadithTafsirVideo(
									hadithTafsir.video_tafsir,
									`/Videos/Hadith/Tafsir/Hadith_${hadithId}`,
									`tafsir_${hadithId}`,
								)
							}
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
							activeColor='#011132'
							inactiveColor='#c79546'
							icon={<ShareIcon color={Colors.White} />}
							// icon={<ShareIcon color='#c79546' />}
							style={{
								flex: 3,
								// backgroundColor: '#c79546',
								borderRadius: scale(5),
								// backgroundColor: '#011132',
							}}
							onPress={ () => onShare(`${hadithTafsir.video_url}`) }
						/>
						<View style={{ flex: 4 }} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default HadithVideoTafsir;
