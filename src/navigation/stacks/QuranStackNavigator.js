import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuranSurasListScreen from "../../screens/QuranSurasListScreen";
import QuranSuraDetailsScreen from "../../screens/QuranSuraDetailsScreen";
import QuranSuraVideoTafsirScreen from "../../screens/QuranSuraVideoTafsirScreen";
import HomeDrawerNavigator from "../drawers/HomeDrawerNavigator";

const QuranStack = createStackNavigator();

const QuranStackNavigator = (props) => {
  return (
    <QuranStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <QuranStack.Screen
        name="QuranSurasList"
        component={QuranSurasListScreen}
      />
      <QuranStack.Screen
        name="QuranSuraDetails"
        component={QuranSuraDetailsScreen}
      />
      <QuranStack.Screen
        name="QuranSuraVideoTafsir"
        component={QuranSuraVideoTafsirScreen}
      />
      {/* <QuranStack.Screen name="HomeDrawer" component={HomeDrawerNavigator} /> */}
    </QuranStack.Navigator>
  );
};

export default QuranStackNavigator;
