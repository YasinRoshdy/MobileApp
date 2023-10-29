import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { fontScale, scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';
import { styles } from './style';
import { convertNumberToArabic } from '../../utils/converters';
import { setHadith } from '../../redux/actions/hadithAction';

const HadithListItem = (props) => {
	const { hadith, chapterName, bookName, index } = props;
	const [isActive, setIsActive] = useState(false);

	const dispatch = useDispatch();

	const { container } = styles;

	return (
		<View
			style={{
				height: scale(40),
				justifyContent: 'center',
				alignItems: 'center',
				marginVertical: scale(4),
				paddingVertical: scale(2),
				borderRadius: scale(5),
				overflow: 'hidden',
				backgroundColor: isActive ? '#c79546' : '#011132',
			}}
		>
			<TouchableWithoutFeedback
				onPressIn={() => setIsActive(true)}
				onPressOut={() => {
					setIsActive(false);
					dispatch(setHadith(hadith));
					props.navigation.navigate('HadithDetails', {
						hadithId: hadith.id,
						chapterName: chapterName,
						bookName: bookName,
					});
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'stretch',
					}}
				>
					<Text
						style={{
							fontSize: fontScale(14),
							fontFamily: 'NotoKufiArabic-Regular',
							color: Colors.White,
						}}
					>
						الحديث {convertNumberToArabic(index)}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default HadithListItem;
