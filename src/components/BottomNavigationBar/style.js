import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		height: scale(75),
		justifyContent: 'space-evenly',
		alignItems: 'center',
		// alignSelf: 'stretch',
		borderTopColor: '#011132',
		borderTopWidth: scale(1),
	},
});
