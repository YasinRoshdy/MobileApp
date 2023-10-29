import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SessionsScreen from '../../screens/SessionsScreen';
import SessionVideoLectureScreen from '../../screens/SessionVideoLectureScreen';
import FatwasScreen from '../../screens/FatwasScreen';

const Fatwa = createStackNavigator();

const FatwaStackNavigator = (props) => {
	return (
		<Fatwa.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Fatwa.Screen name='Fatwa' component={FatwasScreen} />
		</Fatwa.Navigator>
	);
};

export default FatwaStackNavigator;
