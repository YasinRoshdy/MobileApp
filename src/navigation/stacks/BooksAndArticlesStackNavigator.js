import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BooksAndArticlesScreen from '../../screens/BooksAndArticlesScreen';
import BookDetailsScreen from '../../screens/BookDetailsScreen';
import ArticleDetailsScreen from '../../screens/ArticleDetailsScreen';
import PDFViewerScreen from '../../screens/PDFViewerScreen';

const BooksAndArticlesStack = createStackNavigator();

const BooksAndArticlesStackNavigator = (props) => {
	return (
		<BooksAndArticlesStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<BooksAndArticlesStack.Screen
				name='BooksAndArticles'
				component={BooksAndArticlesScreen}
			/>
			<BooksAndArticlesStack.Screen
				name='BookDetails'
				component={BookDetailsScreen}
			/>
			<BooksAndArticlesStack.Screen
				name='ArticleDetails'
				component={ArticleDetailsScreen}
			/>
			<BooksAndArticlesStack.Screen
				name='PDFViewer'
				component={PDFViewerScreen}
			/>
		</BooksAndArticlesStack.Navigator>
	);
};

export default BooksAndArticlesStackNavigator;
