import React, { Dispatch, SetStateAction } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme, { CustomText } from "../../../Theme";
import * as RootNavigation from "../../../util/RootNavigator";

interface OnBoardingHeaderProps {
  hasPrevious?: boolean;
  setAuthentication?: Dispatch<SetStateAction<boolean>>;
}

export default function OnBoardingHeader({
  hasPrevious,
  setAuthentication,
}: OnBoardingHeaderProps) {

  const handleSkip = ()=> {
    setAuthentication && setAuthentication(true)
  }
  return (
    <SafeAreaView style={styles.header}>
      <Pressable
        style={!hasPrevious && styles.backButtonHidden}
        onPress={() => RootNavigation.goBack()}
      >
        <CustomText variant="button">Back</CustomText>
      </Pressable>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <Pressable onPress={handleSkip}>
        <CustomText variant="button" style={styles.skipButton}>
          Skip
        </CustomText>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    // marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacing.m,
    marginBottom: theme.spacing.xl,
  },
  logo: {
    width: 20,
    height: 20,
  },
  skipButton: {
    color: theme.colors.gradient,
  },
  backButtonHidden: {
    opacity: 0,
  },
});
