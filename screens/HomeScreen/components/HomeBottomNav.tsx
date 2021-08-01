import React, { useState } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import theme, { CustomText } from "../../../Theme";
import { Ionicons } from "@expo/vector-icons";
import {CART, HOME, ORDERS} from "../../../navigators/Routes";
import * as RootNavigator from "../../../util/RootNavigator";

interface HomeBottomNavProps {}

const ROUTES = [
  HOME, ORDERS, HOME,HOME,CART
]

const { width } = Dimensions.get("window");
export default function HomeBottomNav() {
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(2);

  const getColor = (index: number) => {
    if (index === active) {
      return theme.colors.primary;
    }
    return theme.colors.darkGray;
  };

  const handleRoute= (index:number) => {
    setActive(index)
    RootNavigator.navigate(ROUTES[index])
  }

  return (
    <View style={styles.container}>
      <Ionicons
        name={active === 0 ? "md-home-sharp" : "md-home-outline"}
        color={getColor(0)}
        size={25}
        onPress={() => handleRoute(0)}
      />
      <Ionicons
        name={active === 1 ? "heart" : "heart-outline"}
        color={getColor(1)}
        size={25}
        onPress={() => handleRoute(1)}
      />
      <Ionicons
        name="search"
        style={styles.searchIconContainer}
        iconStyle={styles.searchIcon}
        color={theme.colors.white}
        size={25}
        onPress={() => handleRoute(2)}
      />
      <Ionicons
        name={active === 3 ? "notifications" : "notifications-outline"}
        color={getColor(3)}
        size={25}
        onPress={() => handleRoute(3)}
      />
      <View>
        <Ionicons
          name={active === 4 ? "cart" : "cart-outline"}
          color={getColor(4)}
          size={25}
          onPress={() => handleRoute(4)}
        />
        {count !== 0 && (
          <CustomText variant="caption" style={styles.badge}>
            {count}
          </CustomText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    marginHorizontal: -theme.spacing.l,
    bottom: 0,
    left: 0,
    width,
    backgroundColor: theme.colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopColor: "#ececec",
    borderTopWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
    paddingTop: 10,
    paddingHorizontal: 40,
  },
  searchIconContainer: {
    backgroundColor: theme.colors.gradient,
    borderRadius: 999,
    padding: 20,
    marginTop: -30,
    borderTopColor: "#ececec",
    borderTopWidth: 1,
  },
  searchIcon: {
    transform: [{ rotate: "45deg" }],
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -10,
    paddingVertical: 1,
    paddingHorizontal: 5,
    backgroundColor: "red",
    color: "#ffff",
    borderRadius: 99,
  },
});
