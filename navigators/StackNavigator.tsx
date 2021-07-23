import React, { useState } from "react";
import OnBoarding from "../screens/OnBoarding";
import { HOME, LOGIN, ONBOARDING, REGISTER } from "./Routes";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();
export default function StackNavigator() {
  const [authentication, setAuthentication] = useState(false);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={!authentication ? ONBOARDING : HOME}
    >
      {!authentication ? (
        <>
          <Stack.Screen name={ONBOARDING}>
            {() => <OnBoarding {...{ setAuthentication }} />}
          </Stack.Screen>
          <Stack.Screen name={LOGIN}>
            {() => <Login {...{ setAuthentication }} />}
          </Stack.Screen>
          <Stack.Screen name={REGISTER}>
            {() => <Register {...{ setAuthentication }} />}
          </Stack.Screen>
        </>
      ) : (
        <>
          <Stack.Screen name={HOME} component={HomeScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
