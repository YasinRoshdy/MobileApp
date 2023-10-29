import { SET_IS_FATWAS_LIST_LOADING, SET_FATWAS_LIST } from '../types';

export const setIsFatwasListLoading = (isFatwasListLoading) => ({
	type: SET_IS_FATWAS_LIST_LOADING,
	payload: isFatwasListLoading,
});

export const setFatwasList = (fatwasList) => ({
	type: SET_FATWAS_LIST,
	payload: fatwasList,
});
