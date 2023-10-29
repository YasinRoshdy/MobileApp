import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OtherScienceScreen from '../../screens/OtherScienceScreen';
import OtherScienceAudioScreen from '../../screens/OtherScienceAudioScreen';
import OtherScienceVideoScreen from '../../screens/OtherScienceVideoScreen';
import OtherScienceVideoLectureScreen from '../../screens/OtherScienceVideoLectureScreen';

const OtherScienceStack = createStackNavigator();

const OtherScienceStackNavigator = (props) => {
	return (
		<OtherScienceStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<OtherScienceStack.Screen
				name='OtherScience'
				component={OtherScienceScreen}
			/>
			<OtherScienceStack.Screen
				name='OtherScienceAudio'
				component={OtherScienceAudioScreen}
			/>
			<OtherScienceStack.Screen
				name='OtherScienceVideo'
				component={OtherScienceVideoScreen}
			/>
			<OtherScienceStack.Screen
				name='OtherScienceVideoLecture'
				component={OtherScienceVideoLectureScreen}
			/>
		</OtherScienceStack.Navigator>
	);
};

export default OtherScienceStackNavigator;
