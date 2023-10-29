import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HadithBooksListScreen from "../../screens/HadithBooksListScreen";
import HadithBookChaptersListScreen from "../../screens/HadithBookChaptersListScreen";
import HadithListScreen from "../../screens/HadithListScreen";
import HadithDetailsScreen from "../../screens/HadithDetailsScreen";

const HadithStack = createStackNavigator();

const HadithStackNavigator = (props) => {
  return (
    <HadithStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HadithStack.Screen
        name="HadithBooksList"
        component={HadithBooksListScreen}
      />
      <HadithStack.Screen
        name="HadithBookChaptersList"
        component={HadithBookChaptersListScreen}
      />
      <HadithStack.Screen name="HadithList" component={HadithListScreen} />
      <HadithStack.Screen
        name="HadithDetails"
        component={HadithDetailsScreen}
      />
    </HadithStack.Navigator>
  );
};

export default HadithStackNavigator;
