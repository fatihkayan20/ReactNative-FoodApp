import React, { useState } from "react";
import { Dimensions, Pressable } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import theme, { CustomText } from "../../Theme";
import HomeHeader from "../HomeScreen/components/HomeHeader";
import { Ionicons } from "@expo/vector-icons";
import { CART } from "../../navigators/Routes";
import * as RootNavigator from "../../util/RootNavigator";

interface DetailScreenProps {}

const { width } = Dimensions.get("window");

export default function DetailScreen() {
  const [count, setCount] = useState(1);

  const minusCount = () => {
    if (count - 1 > 0) {
      setCount(count - 1);
    }
  };

  const plusCount = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <HomeHeader {...{canGoBack:true}} />

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/bigburger.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.countContainer}>
        <Pressable onPress={minusCount}>
          <CustomText variant="button" style={styles.countText}>
            -
          </CustomText>
        </Pressable>
        <CustomText variant="button" style={styles.countText}>
          {count}
        </CustomText>

        <Pressable onPress={plusCount}>
          <CustomText variant="button" style={styles.countText}>
            +
          </CustomText>
        </Pressable>
      </View>

      <View style={styles.infoContainer}>
        <CustomText variant="header1">Big boys Cheese burger</CustomText>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Ionicons name="star" color="#F5A62E" size={20} />
            <CustomText variant="caption">4+</CustomText>
          </View>
          <View style={styles.stat}>
            <Ionicons name="flame" color="#F5A62E" size={20} />
            <CustomText variant="caption">300cal</CustomText>
          </View>
          <View style={styles.stat}>
            <Ionicons name="timer" color="#F5A62E" size={20} />
            <CustomText variant="caption">5-10min</CustomText>
          </View>
        </View>
      </View>

      <CustomText variant="body">
        Our simple, classic cheeseburger begins with a 100% pure beef burger
        seasoned with just a pinch of salt and pepper. The McDonald’s
        Cheeseburger is topped
        <CustomText variant="body" style={styles.moreButton}>
          {" "}
          more
        </CustomText>
      </CustomText>

      <Pressable
        style={styles.cartContainer}
        onPress={() => RootNavigator.navigate(CART)}
      >
        <CustomText variant="button" style={styles.cartText}>
          $23.99 Add to Cart
        </CustomText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.l,
    backgroundColor: theme.colors.background,
  },
  imageContainer: {
    width: (width / 3) * 2,
    height: (width / 3) * 2,
    alignSelf: "center",
    padding: 10,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.darkGray,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: theme.spacing.l,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  countContainer: {
    flexDirection: "row",
    backgroundColor: theme.colors.gradient,
    alignSelf: "center",
    borderRadius: 50,
  },
  countText: {
    color: theme.colors.white,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
  },
  infoContainer: {
    marginVertical: theme.spacing.l,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: theme.spacing.s,
    marginVertical: theme.spacing.s,
  },
  moreButton: {
    color: theme.colors.primary,
  },
  cartContainer: {
    backgroundColor: theme.colors.gradient,
    padding: 10,
    borderRadius: 50,
    marginVertical: theme.spacing.l,
  },
  cartText: {
    color: theme.colors.white,
  },
});
