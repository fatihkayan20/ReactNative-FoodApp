import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { CART } from "../../navigators/Routes";
import theme, { CustomText } from "../../Theme";
import HomeHeader from "../HomeScreen/components/HomeHeader";
import * as RootNavigator from "../../util/RootNavigator";

interface CartScreenProps {}
const CART_ITEMS = [0, 0, 0, 0];

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <CustomText variant="header1" style={styles.mainText}>
        Your Cart
      </CustomText>

      {CART_ITEMS.map((_, index) => (
        <View key={index} style={styles.card}>
          <Image
            source={require("../../assets/bigburger.png")}
            style={styles.image}
          />
          <View>
            <CustomText variant="button">The Macdonalds</CustomText>
            <CustomText variant="caption">Classic cheesburger</CustomText>
            <CustomText variant="button">$23.99</CustomText>
          </View>

          <View style={styles.countContainer}>
            <Pressable style={styles.countButton}>
              <CustomText variant="button">-</CustomText>
            </Pressable>
            <CustomText variant="button">1</CustomText>
            <Pressable style={styles.countButton}>
              <CustomText variant="button">+</CustomText>
            </Pressable>
          </View>
        </View>
      ))}

      <View style={styles.totalContainer}>
        <CustomText variant="body">Total</CustomText>
        <CustomText variant="header1">$47.98</CustomText>
      </View>

      <Pressable
        style={styles.paymentContainer}
        onPress={() => RootNavigator.navigate(CART)}
      >
        <CustomText variant="button" style={styles.paymentText}>
          Process to payment
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
  mainText: {
    textAlign: "left",
    marginVertical: theme.spacing.l,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
    marginVertical: theme.spacing.s,
    borderRadius: 30,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.m,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
  },

  countContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countButton: {
    backgroundColor: theme.colors.gradient,
    paddingHorizontal: 8,
    borderRadius: 66,
    marginHorizontal: 4,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: theme.spacing.l,
  },

  paymentContainer: {
    backgroundColor: theme.colors.gradient,
    padding: 10,
    borderRadius: 50,
    marginVertical: theme.spacing.l,
  },
  paymentText: {
    color: theme.colors.white,
  },
});
