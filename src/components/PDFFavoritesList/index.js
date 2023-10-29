import React from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	Dimensions,
} from 'react-native';
import { scale } from 'react-native-utils-scale';
import { useDispatch } from 'react-redux';
import { baseUrl } from '../../../app.json';
import Colors from '../../constants/Colors';
import { removeFromFavorites } from '../../redux/actions/favoritesActions';
import { styles } from './style';

const PDFFavoritesList = (props) => {
	const { item, onItemPress } = props;
	// const { data, type } = props;

	const dispatch = useDispatch();

	// const RenderItems = ({ item }) => {
	return (
		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				marginHorizontal: scale(14),
				marginVertical: scale(12),
				borderRadius: scale(5),
				overflow: 'hidden',
				// backgroundColor: Colors.MediumBlue,
			}}
		>
			<TouchableOpacity
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					borderWidth: scale(1),
					borderColor: Colors.Black,
					borderRadius: scale(5),
					overflow: 'hidden',
				}}
				onPress={onItemPress}
				/* onPress={() =>
					props.navigation.navigate(
						item.type === 'article'
						? 'ArticleDetails'
						: 'BookDetails',
						{
							[item.type]: item,
						},
						)
					} */
				onLongPress={() => {
					dispatch(removeFromFavorites(item));
				}}
			>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'stretch',
					}}
				>
					<Image
						source={{
							uri: `${baseUrl}${
								item.cover.startsWith('/')
									? item.cover.slice(1)
									: item.cover
							}`,
						}}
						resizeMode='cover'
						style={{
							width: Dimensions.get('screen').width / 2.3,
							height: Dimensions.get('screen').height / 3.5,
							borderRadius: scale(8),
							overflow: 'hidden',
						}}
					/>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'stretch',
							marginHorizontal: scale(4),
						}}
					>
						<Text
							numberOfLines={1}
							style={{
								flex: 1,
								flexWrap: 'wrap',
								fontFamily: 'NotoKufiArabic-Regular',
								color: '#000825',
							}}
						>
							{item.title}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
	// };

	const { container } = styles;

	/* return (
		<FlatList
			keyExtractor={(item, index) => `${index}-${item}`}
			data={data}
			numColumns={2}
			renderItem={({ item }) => <RenderItems item={item} />}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				flexGrow: 1,
			}}
		/>
	); */
};

export default PDFFavoritesList;
