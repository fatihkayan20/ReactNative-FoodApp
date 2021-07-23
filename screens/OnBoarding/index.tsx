import React, { Dispatch, SetStateAction } from "react";
import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { LOGIN, REGISTER } from "../../navigators/Routes";
import theme, { CustomText } from "../../Theme";
import * as RootNavigator from "../../util/RootNavigator";
import OnBoardingHeader from "./components/Header";

interface OnBoardingProps {
  setAuthentication: Dispatch<SetStateAction<boolean>>;
}

const { width } = Dimensions.get("window");
const DOTS = [0, 1, 2];
export default function OnBoarding({ setAuthentication }: OnBoardingProps) {
  const scrollX = useSharedValue(0);
  const slideHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const mainTextContainer = useAnimatedStyle(() => {
    return {
      flexDirection: "row",
      transform: [{ translateX: -scrollX.value }],
    };
  }, [scrollX.value]);

  return (
    <View style={styles.container}>
      {/* Header  */}
      <OnBoardingHeader {...{ setAuthentication }} />
      {/* Slider */}
      <Animated.View style={mainTextContainer}>
        <CustomText variant="header1" style={styles.mainText}>
          Order from your favourite stores or vendors
        </CustomText>
        <CustomText variant="header1" style={styles.mainText}>
          Choose from a wide range of delicious meals
        </CustomText>
        <CustomText variant="header1" style={styles.mainText}>
          Enjoy instant delivery and payment
        </CustomText>
      </Animated.View>

      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.scroll}
        onScroll={slideHandler}
        scrollEventThrottle={16}
      >
        <Image
          source={require("../../assets/onboarding-1.png")}
          style={styles.slideImage}
        />
        <Image
          source={require("../../assets/onboarding-2.jpg")}
          style={styles.slideImage}
        />
        <Image
          source={require("../../assets/onboarding-3.png")}
          style={styles.slideImage}
        />
      </Animated.ScrollView>
      {/* Slider Dots */}

      <View style={styles.slideDots}>
        {DOTS.map((dot, index) => {
          const dotStyle = useAnimatedStyle(() => {
            const scale = interpolate(
              scrollX.value,
              [(index - 1) * width, index * width, (index + 1) * width],
              [1, 1.3, 1],
              Extrapolate.CLAMP
            );
            const opacity = interpolate(
              scrollX.value,
              [(index - 1) * width, index * width, (index + 1) * width],
              [0.2, 1, 0.2],
              Extrapolate.CLAMP
            );
            return {
              width: 7,
              height: 7,
              borderRadius: 50,
              backgroundColor: "#333",
              marginHorizontal: 5,
              opacity,
              transform: [{ scale }],
            };
          }, [scrollX.value]);

          return <Animated.View key={index} style={dotStyle} />;
        })}
      </View>
      {/* Buttons */}

      <Pressable
        style={styles.registerButton}
        onPress={() => RootNavigator.navigate(REGISTER)}
      >
        <CustomText variant="button" style={styles.registerButtonText}>
          Create an account
        </CustomText>
      </Pressable>

      <Pressable
        style={styles.loginButton}
        onPress={() => RootNavigator.navigate(LOGIN)}
      >
        <CustomText variant="button" style={styles.loginButtonText}>
          Login
        </CustomText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  mainText: {
    paddingHorizontal: theme.spacing.l,
  },

  scroll: {
    flexGrow: 0,
  },
  slideImage: {
    width,
    aspectRatio: 4 / 3,
    marginTop: theme.spacing.l,
  },

  slideDots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: theme.spacing.l,
  },
  registerButton: {
    backgroundColor: theme.colors.gradient,
    paddingVertical: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  registerButtonText: {
    color: theme.colors.white,
  },

  loginButton: {
    marginTop: theme.spacing.m,
  },
  loginButtonText: {
    color: theme.colors.primary,
  },
});
