import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import theme from "./Theme";
import StackNavigator from "./navigators/StackNavigator";
import { navigationRef } from "./util/RootNavigator";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
