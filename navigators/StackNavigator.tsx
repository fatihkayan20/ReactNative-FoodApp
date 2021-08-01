import React, { useState } from "react";
import OnBoarding from "../screens/OnBoarding";
import { CART, DETAIL, HOME, LOGIN, ONBOARDING, REGISTER } from "./Routes";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import CartScreen from "../screens/CartScreen";

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
            <Stack.Screen name={DETAIL} component={DetailScreen} />
            <Stack.Screen name={CART} component={CartScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
