import React, { useEffect } from 'react';
import {
	View,
	FlatList,
	Image,
	TouchableOpacity,
	ActivityIndicator,
	Dimensions,
} from 'react-native';
import { scale } from 'react-native-utils-scale';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../../app.json';
import { getArticlesList } from '../../api/articles';
import Colors from '../../constants/Colors';
import {
	setArticles,
	setIsArticlesLoading,
} from '../../redux/actions/articlesActions';
import { styles } from './style';

const ArticlesList = (props) => {
	const { isArticlesLoading, articles } = useSelector(
		(state) => state.Articles,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsArticlesLoading(true));
		getArticlesList({
			success: (res) => {
				dispatch(setIsArticlesLoading(false));
				dispatch(setArticles(res.data));
			},
			error: (error) => {
				dispatch(setIsArticlesLoading(false));
				console.log('Get Articles List Error:', error);
			},
		});
	}, []);

	const RenderArticles = ({ article }) => {
		return (
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginHorizontal: scale(14),
					marginVertical: scale(12),
					borderRadius: scale(5),
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
					onPress={() =>
						props.navigation.navigate('ArticleDetails', {
							article,
						})
					}
				>
					<Image
						source={{
							uri: `${
								article.cover.startsWith('/')
									? article.cover.slice(1)
									: article.cover
							}`,
						}}
						resizeMode='cover'
						style={{
							width: Dimensions.get('screen').width / 2.3,
							height: Dimensions.get('screen').height / 3.5,
						}}
					/>
				</TouchableOpacity>
			</View>
		);
	};

	const { container } = styles;

	return isArticlesLoading ? (
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
		<FlatList
			keyExtractor={(article, index) => `${index}-${article}`}
			data={articles}
			numColumns={2}
			renderItem={({ item }) => <RenderArticles article={item} />}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				flexGrow: 1,
			}}
		/>
	);
};

export default ArticlesList;
