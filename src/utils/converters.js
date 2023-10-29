export const convertNumberToArabic = (number) => {
	const arabicNumbers = ['۰', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
	var chars = number.toString().split('');
	for (var i = 0; i < chars.length; i++) {
		chars[i] = arabicNumbers[chars[i]];
	}

	return chars.join('');
};
