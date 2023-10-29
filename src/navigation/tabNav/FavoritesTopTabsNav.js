import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavoriteAudioDetails from '../../components/FavoriteAudioDetails';
import FavoriteVideoDetails from '../../components/FavoriteVideoDetails';
import FavoritePDFDetails from '../../components/FavoritePDFDetails';

const FavoritesTopTabs = createMaterialTopTabNavigator();

const FavoritesTopTabsNav = (props) => {
	return (
		<FavoritesTopTabs.Navigator>
			<FavoritesTopTabs.Screen
				name='FavoriteAudioDetails'
				component={FavoriteAudioDetails}
			/>
			<FavoritesTopTabs.Screen
				name='FavoriteVideoDetails'
				component={FavoriteVideoDetails}
			/>
			<FavoritesTopTabs.Screen
				name='FavoritePDFDetails'
				component={FavoritePDFDetails}
			/>
		</FavoritesTopTabs.Navigator>
	);
};

export default FavoritesTopTabsNav;
