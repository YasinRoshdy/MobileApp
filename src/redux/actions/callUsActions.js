import { SET_IS_CALL_US_LOADING, SET_CALL_US_PHONE_NUMBERS } from '../types';

export const setIsCallUsLoading = (isCallUsLoading) => ({
	type: SET_IS_CALL_US_LOADING,
	payload: isCallUsLoading,
});

export const setCallUsPhoneNumbers = (phoneNumbers) => ({
	type: SET_CALL_US_PHONE_NUMBERS,
	payload: phoneNumbers,
});
