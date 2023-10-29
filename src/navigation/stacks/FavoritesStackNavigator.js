import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from '../../screens/FavoritesScreen';
import ArticleDetailsScreen from '../../screens/ArticleDetailsScreen';
import BookDetailsScreen from '../../screens/BookDetailsScreen';
import PDFViewerScreen from '../../screens/PDFViewerScreen';
import HadithVideoTafsir from '../../components/HadithVideoTafsir';
import HadithVideoTafsirScreen from '../../screens/HadithVideoTafsirScreen';
import OtherScienceVideoLectureScreen from '../../screens/OtherScienceVideoLectureScreen';
import QuranSuraVideoTafsirScreen from '../../screens/QuranSuraVideoTafsirScreen';
import SessionVideoLectureScreen from '../../screens/SessionVideoLectureScreen';
import FavoriteVideoScreen from '../../screens/FavoriteVideoScreen';
// import QuranSuraVideoTafsirScreen from '../../screens/QuranSuraVideoTafsirScreen';

const FavoritesStack = createStackNavigator();

const FavoritesStackNavigator = (props) => {
	return (
		<FavoritesStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<FavoritesStack.Screen
				name='Favorites'
				component={FavoritesScreen}
			/>
			<FavoritesStack.Screen
				name='ArticleDetails'
				component={ArticleDetailsScreen}
			/>
			<FavoritesStack.Screen
				name='BookDetails'
				component={BookDetailsScreen}
			/>
			<FavoritesStack.Screen
				name='PDFViewer'
				component={PDFViewerScreen}
			/>
			<FavoritesStack.Screen
				name='FavoriteVideo'
				component={FavoriteVideoScreen}
			/>
		</FavoritesStack.Navigator>
	);
};

export default FavoritesStackNavigator;
