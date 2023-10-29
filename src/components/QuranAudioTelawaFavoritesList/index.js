import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '../svg/SaveIcon';
import FavoriteOutlineIcon from '../svg/FavoriteOutlineIcon';
import ShareIcon from '../svg/ShareIcon';
import PlayAudioButton from '../PlayAudioButton';
import { scale } from 'react-native-utils-scale';
import { styles } from './style';
import { convertNumberToArabic } from '../../utils/converters';

const QuranAudioTelawaFavoritesList = (props) => {
	const { data } = props;
	const { quranAudioTelawaFavorites } = useSelector(
		(state) => state.Favorites,
	);

	const dispatch = useDispatch();

	const RenderItems = ({ item }) => {
		return (
			<View>
				<View
					style={{
						flex: 1,
						height: scale(40),
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						alignSelf: 'stretch',
						marginVertical: scale(8),
						paddingHorizontal: scale(8),
						borderRadius: scale(5),
						borderWidth: scale(1),
						borderColor: '#000825',
					}}
				>
					<View
						style={{
							alignSelf: 'stretch',
							flexDirection: 'row',
							paddingHorizontal: scale(8),
							// backgroundColor: Colors.SeaGreen,
						}}
					>
						<View
							style={{
								justifyContent: 'center',
								paddingHorizontal: scale(4),
							}}
						>
							<TouchableOpacity
								style={{
									flex: 1,
									justifyContent: 'center',
									alignItems: 'center',
									alignSelf: 'stretch',
								}}
								onPress={() =>
									saveFatwaAudio(
										item.file,
										`/Sounds/Fatwas`,
										`fatwa_${item.id}`,
									)
								}
							>
								<SaveIcon color='#011132' />
							</TouchableOpacity>
						</View>
						<View
							style={{
								width: scale(1.5),
								marginHorizontal: scale(6),
								marginVertical: scale(4),
								backgroundColor: '#000825',
							}}
						/>
						<PlayAudioButton url={item.file} />
						<View
							style={{
								width: scale(1.5),
								marginHorizontal: scale(6),
								marginVertical: scale(4),
								backgroundColor: '#000825',
							}}
						/>
						<View
							style={{
								justifyContent: 'center',
								paddingHorizontal: scale(4),
							}}
						>
							<TouchableOpacity
								style={{
									flex: 1,
									justifyContent: 'center',
									alignItems: 'center',
									alignSelf: 'stretch',
								}}
								/* onPress={
									quranAudioTelawaFavorites.includes(item)
										? () =>
												dispatch(
													removeFromFatwaFavorites(
														item,
													),
												)
										: () =>
												dispatch(
													addToFatwaFavorites(item),
												)
								} */
							>
								<FavoriteOutlineIcon
									color={
										quranAudioTelawaFavorites.includes(item)
											? '#c79546'
											: '#011132'
									}
								/>
							</TouchableOpacity>
						</View>
						<View
							style={{
								width: scale(1.5),
								marginHorizontal: scale(6),
								marginVertical: scale(4),
								backgroundColor: '#000825',
							}}
						/>
						<View
							style={{
								justifyContent: 'center',
								paddingHorizontal: scale(4),
							}}
						>
							<ShareIcon color='#011132' />
						</View>
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'stretch',
						}}
					>
						<Text
							numberOfLines={1}
							style={{
								fontFamily: 'NotoKufiArabic-Regular',
								alignSelf: 'stretch',
								textAlign: 'right',
								color: '#000825',
							}}
						>
							{`من الآية ${convertNumberToArabic(
								item.aya_start_count,
							)} إلى ${convertNumberToArabic(
								item.aya_end_count,
							)}`}
						</Text>
					</View>
				</View>
			</View>
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

export default QuranAudioTelawaFavoritesList;
