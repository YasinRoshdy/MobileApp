import axios from 'axios';
import buildURL from 'axios/lib/helpers/buildURL';
import { baseUrl } from '../../app.json';

const baseUrlApi = `${baseUrl}api/`;

export const get = async (url, params, options) => {
	let requestUrl = `${baseUrlApi}${url}`;
	console.log("Getting requestUrl:", requestUrl);

	axios
		.get(buildURL(requestUrl, params))
		.then((response) => {
			if (options.success) {
				options.success(response.data);
			}
		})
		.catch((error) => {
			console.warn('[Get Error]:', error);
			if (options.error) {
				options.error(error);
			}
		});
};

export const post = async (url, body, options) => {
	let requestUrl = `${baseUrlApi}${url}`;
	let CancelToken = axios.CancelToken;

	axios
		.post(requestUrl, body, {
			onUploadProgress: (progress) => {
				if (options.onUploadProgress) {
					options.onUploadProgress(progress);
				}
			},
			cancelToken: new CancelToken((cancel) => {
				if (options.cancel) {
					options.cancel(cancel);
				}
			}),
		})
		.then((response) => {
			if (options.success) {
				options.success(response.data);
			}
		})
		.catch((error) => {
			console.warn('[Post Error]:', error);
			if (options.error) {
				options.error(error);
			}
		});
};
