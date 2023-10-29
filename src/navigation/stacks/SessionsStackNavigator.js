import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SessionsScreen from "../../screens/SessionsScreen";
import SessionVideoLectureScreen from "../../screens/SessionVideoLectureScreen";

const SessionsStack = createStackNavigator();

const SessionsStackNavigator = (props) => {
  return (
    <SessionsStack.Navigator
      initialRouteName="Sessions"
      screenOptions={{
        headerShown: false,
      }}
    >
      <SessionsStack.Screen name="Sessions" component={SessionsScreen} />
      <SessionsStack.Screen
        name="SessionVideoLecture"
        component={SessionVideoLectureScreen}
      />
    </SessionsStack.Navigator>
  );
};

export default SessionsStackNavigator;
