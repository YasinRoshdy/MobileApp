import { Item } from '../../models/Item';
import {
	SET_IS_FAVORITES_LOADING,
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
	/* ADD_TO_ARTICLE_FAVORITES,
	ADD_TO_BOOKS_FAVORITES,
	ADD_TO_FATWA_FAVORITES,
	ADD_TO_HADITH_AUDIO_TAFSIR_FAVORITES,
	ADD_TO_HADITH_VIDEO_TAFSIR_FAVORITES,
	ADD_TO_OTHER_SCIENCE_AUDIO_FAVORITES,
	ADD_TO_OTHER_SCIENCE_VIDEO_FAVORITES,
	ADD_TO_QURAN_AUDIO_TAFSIR_FAVORITES,
	ADD_TO_QURAN_AUDIO_TELAWA_FAVORITES,
	ADD_TO_QURAN_VIDEO_TAFSIR_FAVORITES,
	ADD_TO_SESSIONS_FAVORITES,
	REMOVE_FROM_ARTICLE_FAVORITES,
	REMOVE_FROM_BOOKS_FAVORITES,
	REMOVE_FROM_FATWA_FAVORITES,
	REMOVE_FROM_HADITH_AUDIO_TAFSIR_FAVORITES,
	REMOVE_FROM_HADITH_VIDEO_TAFSIR_FAVORITES,
	REMOVE_FROM_OTHER_SCIENCE_AUDIO_FAVORITES,
	REMOVE_FROM_OTHER_SCIENCE_VIDEO_FAVORITES,
	REMOVE_FROM_QURAN_AUDIO_TAFSIR_FAVORITES,
	REMOVE_FROM_QURAN_AUDIO_TELAWA_FAVORITES,
	REMOVE_FROM_QURAN_VIDEO_TAFSIR_FAVORITES,
	REMOVE_FROM_SESSIONS_FAVORITES, */
} from '../types';

const initState = {
	isFavoritesLoading: true,
	favorites: [],
	/* articleFavorites: [],
	bookFavorites: [],
	fatwaFavorites: [],
	hadithAudioTafsirFavorites: [],
	hadithVideoTafsirFavorites: [],
	otherScienceAudioFavorites: [],
	otherScienceVideoFavorites: [],
	quranAudioTafsirFavorites: [],
	quranAudioTelawaFavorites: [],
	quranVideoTafsirFavorites: [],
	sessionsFavorites: [], */
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_FAVORITES_LOADING:
			return {
				...state,
				isFavoritesLoading: action.payload,
			};
		case ADD_TO_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		case REMOVE_FROM_FAVORITES:
			return {
				...state,
				favorites: [
					...state.favorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		/* case ADD_TO_ARTICLE_FAVORITES:
			return {
				...state,
				articleFavorites: [...state.articleFavorites, action.payload],
			};
		case ADD_TO_BOOKS_FAVORITES:
			return {
				...state,
				bookFavorites: [...state.bookFavorites, action.payload],
			};
		case ADD_TO_FATWA_FAVORITES:
			return {
				...state,
				fatwaFavorites: [...state.fatwaFavorites, action.payload],
			};
		case ADD_TO_HADITH_AUDIO_TAFSIR_FAVORITES:
			return {
				...state,
				hadithAudioTafsirFavorites: [
					...state.hadithAudioTafsirFavorites,
					action.payload,
				],
			};
		case ADD_TO_HADITH_VIDEO_TAFSIR_FAVORITES:
			return {
				...state,
				hadithVideoTafsirFavorites: [
					...state.hadithVideoTafsirFavorites,
					action.payload,
				],
			};
		case ADD_TO_OTHER_SCIENCE_AUDIO_FAVORITES:
			return {
				...state,
				otherScienceAudioFavorites: [
					...state.otherScienceAudioFavorites,
					action.payload,
				],
			};
		case ADD_TO_OTHER_SCIENCE_VIDEO_FAVORITES:
			return {
				...state,
				otherScienceVideoFavorites: [
					...state.otherScienceVideoFavorites,
					action.payload,
				],
			};
		case ADD_TO_QURAN_AUDIO_TAFSIR_FAVORITES:
			return {
				...state,
				quranAudioTafsirFavorites: [
					...state.quranAudioTafsirFavorites,
					action.payload,
				],
			};
		case ADD_TO_QURAN_AUDIO_TELAWA_FAVORITES:
			return {
				...state,
				quranAudioTelawaFavorites: [
					...state.quranAudioTelawaFavorites,
					action.payload,
				],
			};
		case ADD_TO_QURAN_VIDEO_TAFSIR_FAVORITES:
			return {
				...state,
				quranVideoTafsirFavorites: [
					...state.quranVideoTafsirFavorites,
					action.payload,
				],
			};
		case ADD_TO_SESSIONS_FAVORITES:
			return {
				...state,
				sessionsFavorites: [...state.sessionsFavorites, action.payload],
			};
		case REMOVE_FROM_ARTICLE_FAVORITES:
			return {
				...state,
				articleFavorites: [
					...state.articleFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		case REMOVE_FROM_BOOKS_FAVORITES:
			return {
				...state,
				bookFavorites: [
					...state.bookFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		case REMOVE_FROM_FATWA_FAVORITES:
			return {
				...state,
				fatwaFavorites: [
					...state.fatwaFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		case REMOVE_FROM_HADITH_AUDIO_TAFSIR_FAVORITES:
			return {
				...state,
				hadithAudioTafsirFavorites: [
					...state.hadithAudioTafsirFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		case REMOVE_FROM_HADITH_VIDEO_TAFSIR_FAVORITES:
			return {
				...state,
				hadithVideoTafsirFavorites: [
					...state.hadithVideoTafsirFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		case REMOVE_FROM_OTHER_SCIENCE_AUDIO_FAVORITES:
			return {
				...state,
				otherScienceAudioFavorites: [
					...state.otherScienceAudioFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		case REMOVE_FROM_OTHER_SCIENCE_VIDEO_FAVORITES:
			return {
				...state,
				otherScienceVideoFavorites: [
					...state.otherScienceVideoFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		case REMOVE_FROM_QURAN_AUDIO_TAFSIR_FAVORITES:
			return {
				...state,
				quranAudioTafsirFavorites: [
					...state.quranAudioTafsirFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		case REMOVE_FROM_QURAN_AUDIO_TELAWA_FAVORITES:
			return {
				...state,
				quranAudioTelawaFavorites: [
					...state.quranAudioTelawaFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		case REMOVE_FROM_QURAN_VIDEO_TAFSIR_FAVORITES:
			return {
				...state,
				quranVideoTafsirFavorites: [
					...state.quranVideoTafsirFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			};
		case REMOVE_FROM_SESSIONS_FAVORITES:
			return {
				...state,
				sessionsFavorites: [
					...state.sessionsFavorites.filter(
						(favorite) => favorite !== action.payload,
					),
				],
			}; */
		default:
			return state;
	}
};
