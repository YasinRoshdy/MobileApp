import {
	SET_IS_FAVORITES_LOADING,
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
} from '../types';

export const setIsFavoritesLoading = (isFavoritesLoading) => ({
	type: SET_IS_FAVORITES_LOADING,
	payload: isFavoritesLoading,
});

export const addToFavorites = (favoriteItem) => ({
	type: ADD_TO_FAVORITES,
	payload: favoriteItem,
});

export const removeFromFavorites = (favoriteItem) => ({
	type: REMOVE_FROM_FAVORITES,
	payload: favoriteItem,
});
