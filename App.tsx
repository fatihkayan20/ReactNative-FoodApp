import {ThemeProvider} from "@shopify/restyle";
import React from "react";
import { SafeAreaView } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import theme from "./Theme";
import StackNavigator from "./navigators/StackNavigator";
import {navigationRef} from "./util/RootNavigator";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView
                style={{flex:1}}
                >
                <NavigationContainer ref={navigationRef}>
                <StackNavigator/>
            </NavigationContainer>
            </SafeAreaView>
        </ThemeProvider>
    );
}

