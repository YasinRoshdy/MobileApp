import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: scale(20),
	},
});
