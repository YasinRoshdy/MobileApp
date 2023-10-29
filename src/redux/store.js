import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from '../ReactotronConfig';
import hadithReducer from './reducers/hadithReducer';
import quranReducer from './reducers/quranReducer';
import fatwasReducer from './reducers/fatwasReducer';
import otherScienceReducer from './reducers/otherScienceReducer';
import booksReducer from './reducers/booksReducer';
import articlesReducer from './reducers/articlesReducer';
import sessionsReducer from './reducers/sessionsReducer';
import favoritesReducer from './reducers/favoritesReducer';
import callUsReducer from './reducers/callUsReducer';

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: [
		'Quran',
		'Hadith',
		'Fatwas',
		'OtherScience',
		'Books',
		'Article',
		'Sessions',
		'CallUs',
	],
};

const favoritesPersistConfig = {
	key: 'favorites',
	storage: AsyncStorage,
	blacklist: ['isFavoritesLoading'],
};

const rootReducer = combineReducers({
	Quran: quranReducer,
	Hadith: hadithReducer,
	Fatwas: fatwasReducer,
	OtherScience: otherScienceReducer,
	Books: booksReducer,
	Articles: articlesReducer,
	Sessions: sessionsReducer,
	Favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
	CallUs: callUsReducer,
});

export const store = createStore(
	persistReducer(rootPersistConfig, rootReducer),
	Reactotron.createEnhancer(),
);

export const persistor = persistStore(store);
