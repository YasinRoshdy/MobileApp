import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import QuranStackNavigator from './stacks/QuranStackNavigator';
// import HadithStackNavigator from './stacks/HadithStackNavigator';
import IntroScreen from "../screens/IntroScreen";
import HomeDrawerNavigator from "./drawers/HomeDrawerNavigator";
// import MainBottomTabsNav from './tabNav/MainBottomTabsNav';
import FatwasScreen from "../screens/FatwasScreen";
import HomeStackNavigator from "./stacks/HomeStackNavigator";
import QuranStackNavigator from "./stacks/QuranStackNavigator";
import HadithStackNavigator from "./stacks/HadithStackNavigator";
import OtherScienceStackNavigator from "./stacks/OtherScienceStackNavigator";
import BooksAndArticlesStackNavigator from "./stacks/BooksAndArticlesStackNavigator";
import SessionsStackNavigator from "./stacks/SessionsStackNavigator";
import FavoritesStackNavigator from "./stacks/FavoritesStackNavigator";
import ContactsUsScreen from "./../screens/ContactsUsScreen";
import MainBottomTabsNav from "./tabNav/MainBottomTabsNav";
import HomeOutlineIcon from "../components/svg/HomeOutlineIcon";
import QuranOutlineIcon from "../components/svg/QuranOutlineIcon";
import MosqueOutlineIcon from "../components/svg/MosqueOutlineIcon";
import OtherScienceOutlineIcon from "../components/svg/OtherScienceOutlineIcon";
import BooksOutlineIcon from "../components/svg/BooksOutlineIcon";
import SessionsOutlineIcon from "../components/svg/SessionsOutlineIcon";
import ContactUsOutlineIcon from "../components/svg/ContactUsOutlineIcon";
import FavoriteOutlineIcon from "../components/svg/FavoriteOutlineIcon";
import SeachScreen from "../screens/SearchScreen";
import YtPlayerFullScreen from "../components/YoutubePlayerFullScreen";

const RootStack = createStackNavigator();

/*
! Root Navigator
Intro Screen
Main Bottom Tabs
Drawer
Rest Of Stacks

! Main Bottom Tabs
Home Stack -> Home Screen -> Open Drawer
Quran Stack
Hadith Stack
Other Science Stack
Books And Articles Stack

! New Thoughts
- Root Navigator => Intro Screen => Drawer => Bottom Tabs => Home Stack => Home Screen => Open Drawer
- Root Navigator => Intro Screen => Drawer => Bottom Tabs => Screen Out Of Bottom Tabs => 

- Root Navigator => Intro Screen => Home Drawer \ Bottom Tabs

- Root Navigator => Intro Screen => Bottom Tabs => Home Drawer \ Rest Of Screens

*/

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Intro" component={IntroScreen} />
      {/* <RootStack.Screen name="MainBottomTabs" component={MainBottomTabsNav} /> */}
      <RootStack.Screen name="HomeDrawer" component={HomeDrawerNavigator} />
      <RootStack.Screen name="SearchScreen" component={SeachScreen} />
      <RootStack.Screen name="YtFullScreen" component={YtPlayerFullScreen} />
    </RootStack.Navigator>
  );
};

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
