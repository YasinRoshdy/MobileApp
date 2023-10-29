import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import AboutSheikhScreen from "../../screens/AboutSheikhScreen";
import AboutJamiahScreen from "../../screens/AboutJamiahScreen";
import HomeDrawerNavigator from "../drawers/HomeDrawerNavigator";

const HomeStack = createStackNavigator();

const HomeStackNavigator = (props) => {
  // const { onGoBack } = props.route.params;

  return (
    <HomeStack.Navigator
      // initialRouteName='ContactUs'
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{
          onGoBack: () => onGoBack(),
        }}
      />
      <HomeStack.Screen name="AboutSheikh" component={AboutSheikhScreen} />
      <HomeStack.Screen name="AboutJamiah" component={AboutJamiahScreen} />
      {/* <HomeStack.Screen name="HomeDrawer" component={HomeDrawerNavigator} /> */}
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
