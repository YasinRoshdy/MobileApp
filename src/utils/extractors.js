export const ayatExtractor = (sura, start, end) => {
	const tempArr = [];
	for (let i = start - 1; i < end - 1; i++) {
		tempArr.push(sura.text[i]);
	}
	return tempArr;
};

export const otherScienceAudioExtractor = (resData) => {
	const tempArr = [];
	resData.forEach((resItem) => {
		if (resItem.file_type === 'audio') {
			tempArr.push(resItem);
		}
	});
	return tempArr;
};

export const otherScienceVideoExtractor = (resData) => {
	const tempArr = [];
	resData.forEach((resItem) => {
		if (resItem.file_type === 'video') {
			tempArr.push(resItem);
		}
	});
	return tempArr;
};

export const articlesExtractor = (resData) => {
	const tempArr = [];
	resData.forEach((resItem) => {
		if (resItem.type === 'artical') {
			tempArr.push(resItem);
		}
	});
	return tempArr;
};

export const booksExtractor = (resData) => {
	const tempArr = [];
	resData.forEach((resItem) => {
		if (resItem.type === 'book') {
			tempArr.push(resItem);
		}
	});
	return tempArr;
};
