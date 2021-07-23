import React from "react";
import OnBoarding from "../screens/OnBoarding";
import { LOGIN, ONBOARDING, REGISTER } from "./Routes";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Post */}
      <Stack.Screen name={ONBOARDING} component={OnBoarding} />
      <Stack.Screen name={LOGIN} component={Login} />
      {/* <Stack.Screen name={REGISTER} component={OnBoarding} /> */}
    </Stack.Navigator>
  );
}
