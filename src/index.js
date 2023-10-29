import React, { useEffect } from 'react';
import { I18nManager, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './navigation/RootNavigator';
import IntroScreen from './screens/IntroScreen';
import HomeScreen from './screens/HomeScreen';
import AboutSheikhScreen from './screens/AboutSheikhScreen';
import AboutJamiahScreen from './screens/AboutJamiahScreen';
import HadithBooksListScreen from './screens/HadithBooksListScreen';
import HadithBookChaptersListScreen from './screens/HadithBookChaptersListScreen';
import HadithDetailsScreen from './screens/HadithDetailsScreen';
import QuranSurasListScreen from './screens/QuranSurasListScreen';
import QuranSuraDetailsScreen from './screens/QuranSuraDetailsScreen';
import ContactsUsScreen from './screens/ContactsUsScreen';
import OtherScienceScreen from './screens/OtherScienceScreen';
import OtherScienceAudioScreen from './screens/OtherScienceAudioScreen';
import OtherScienceVideoScreen from './screens/OtherScienceVideoScreen';
import OtherScienceVideoLectureScreen from './screens/OtherScienceVideoLectureScreen';
import BooksAndArticlesScreen from './screens/BooksAndArticlesScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import ArticleDetailsScreen from './screens/ArticleDetailsScreen';
import FatwasScreen from './screens/FatwasScreen';
import SessionsScreen from './screens/SessionsScreen';
import SessionVideoLectureScreen from './screens/SessionVideoLectureScreen';
import HomeDrawerNavigator from './navigation/drawers/HomeDrawerNavigator';
import DrawerContent from './components/DrawerContent';
import { store, persistor } from './redux/store';
import HadithListScreen from './screens/HadithListScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Colors from './constants/Colors';

LogBox.ignoreAllLogs();

try {
	I18nManager.allowRTL(false);
} catch (error) {
	console.log('Allow RTL Error:', error);
}

const App = (props) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RootNavigator />
				{/* <FavoritesScreen /> */}
				{/* <HomeDrawerNavigator /> */}
				{/* <IntroScreen /> */}
				{/* <HomeScreen /> */}
				{/* <AboutSheikhScreen /> */}
				{/* <AboutJamiahScreen /> */}
				{/* <HadithListScreen /> */}
				{/* <HadithBooksListScreen /> */}
				{/* <HadithBookChaptersListScreen /> */}
				{/* <HadithDetailsScreen /> */}
				{/* <QuranSurasListScreen /> */}
				{/* <QuranSuraDetailsScreen /> */}
				{/* <ContactsUsScreen /> */}
				{/* <OtherScienceScreen /> */}
				{/* <OtherScienceAudioScreen /> */}
				{/* <OtherScienceVideoScreen /> */}
				{/* <OtherScienceVideoLectureScreen /> */}
				{/* <BooksAndArticlesScreen /> */}
				{/* <BookDetailsScreen /> */}
				{/* <ArticleDetailsScreen /> */}
				{/* <FatwasScreen /> */}
				{/* <SessionsScreen /> */}
				{/* <SessionVideoLectureScreen /> */}
				{/* <DrawerContent /> */}
				{/* <FavoritesScreen /> */}
			</PersistGate>
		</Provider>
	);
};

export default App;
