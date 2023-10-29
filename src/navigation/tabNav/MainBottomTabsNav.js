import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeDrawerNavigator from "../drawers/HomeDrawerNavigator";
import BottomNavigationBar from "../../components/BottomNavigationBar";
import HomeStackNavigator from "../stacks/HomeStackNavigator";
import QuranStackNavigator from "../stacks/QuranStackNavigator";
import HadithStackNavigator from "../stacks/HadithStackNavigator";
import OtherScienceStackNavigator from "../stacks/OtherScienceStackNavigator";
import BooksAndArticlesStackNavigator from "../stacks/BooksAndArticlesStackNavigator";
import FatwasScreen from "../../screens/FatwasScreen";
import Colors from "../../constants/Colors";
import MenuScreen from "../../screens/MenuScreen";
import SessionsStackNavigator from "../stacks/SessionsStackNavigator";
import FavoritesStackNavigator from "../stacks/FavoritesStackNavigator";
import FatwaNavigator from "../stacks/FatawaStackNavigator";
import FatwaStackNavigator from "../stacks/FatawaStackNavigator";
import ContactsUsScreen from "../../screens/ContactsUsScreen";

const MainBottomTabs = createBottomTabNavigator();

const MainBottomTabsNav = (props) => {
  const { tabIndex } = props.route.params;

  return (
    <MainBottomTabs.Navigator
      tabBar={(props) => <BottomNavigationBar {...props} />}
      backBehavior="history"
      initialRouteName={
        tabIndex === 0
          ? "HomeStack"
          : //   'HomeDrawer'
          tabIndex === 1
          ? "QuranStack"
          : tabIndex === 2
          ? "HadithStack"
          : tabIndex === 3
          ? "OtherScienceStack"
          : tabIndex === 4
          ? "BooksAndArticlesStack"
          : tabIndex === 5
          ? "Fatwas"
          : null
      }
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainBottomTabs.Screen
        name="Fatwas"
        component={FatwaStackNavigator}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />
      <MainBottomTabs.Screen
        name="BooksAndArticlesStack"
        options={{
          title: "الكتب والمقالات",
        }}
        component={BooksAndArticlesStackNavigator}
      />
      <MainBottomTabs.Screen
        name="SessionsStack"
        options={{}}
        component={SessionsStackNavigator}
      />
      <MainBottomTabs.Screen
        name="OtherScienceStack"
        options={{
          title: "العلوم الأخرى",
        }}
        component={OtherScienceStackNavigator}
      />
      <MainBottomTabs.Screen
        name="FavoritesStack"
        component={FavoritesStackNavigator}
      />
      <MainBottomTabs.Screen
        name="HadithStack"
        options={{
          title: "الحديث الشريف",
          tabBarIcon: ({ tintColor }) => (
            <Image source={require("../../assets/images/b-n-home.png")} />
          ),
        }}
        component={HadithStackNavigator}
      />
      <MainBottomTabs.Screen
        name="HomeDrawer"
        options={{
          tabBarItemStyle: {
            display: "none",
          },
        }}
        component={MenuScreen}
      />
      <MainBottomTabs.Screen
        name="QuranStack"
        options={{
          title: "القرآن الكريم",
        }}
        component={QuranStackNavigator}
      />
      <MainBottomTabs.Screen name="ContactsUs" component={ContactsUsScreen} />
      <MainBottomTabs.Screen
        name="HomeStack"
        options={{
          title: "الرئيسية",
        }}
        component={HomeStackNavigator}
      />
    </MainBottomTabs.Navigator>
  );
};

export default MainBottomTabsNav;
