import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import theme, { CustomText } from "../../Theme";
import HomeBottomNav from "./components/HomeBottomNav";
import HomeHeader from "./components/HomeHeader";

interface HomeScreenProps {}

const FOODS = [
  { title: "Pizza", image: require("../../assets/pizza.png") },
  { title: "Burger", image: require("../../assets/burger.png") },
  { title: "Hotdog", image: require("../../assets/hotdog.png") },
  { title: "Taco", image: require("../../assets/taco.png") },
];

const RESTAURANTS = new Array(5).fill(0);
const { width } = Dimensions.get("window");
export default function HomeScreen() {
  const [active, setActive] = useState(1);
  return (
    <View style={styles.container}>
      <HomeHeader />

      <CustomText variant="header1" style={styles.mainText}>
        Enjoy Delicious food
      </CustomText>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {FOODS.map(({ title, image }, index) => (
          <Pressable
            key={index}
            style={[styles.food, active === index && styles.activeFood]}
            onPress={() => setActive(index)}
          >
            <Image source={image} style={[styles.image]} />
            <CustomText> {title} </CustomText>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.popularContainer}>
        <CustomText variant="header2" style={styles.mainText}>
          Popular Restaurants
        </CustomText>

        <CustomText variant="header2" style={styles.viewAll}>
          View all(29)
        </CustomText>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {RESTAURANTS.map((restaurant, index) => (
          <View key={index} style={styles.restaurantCard}>
            <Image source={require("../../assets/bigburger.png")} />
            <CustomText variant="button" style={styles.restaurantTitle}>
              Big Cheese Burger
            </CustomText>
            <CustomText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              enim.
            </CustomText>

            <View></View>
          </View>
        ))}
      </ScrollView>
      <HomeBottomNav />
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
    marginVertical: theme.spacing.xl,
  },
  scroll: {
    flexGrow: 0,
  },
  food: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0CAC1",
    borderRadius: 50,
    paddingVertical: 40,
    paddingHorizontal: 25,
    marginHorizontal: 15,
  },
  activeFood: {
    borderColor: "#3EC032",
  },
  image: {
    width: 30,
    height: 30,
  },
  popularContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAll: {
    color: "#FE554A",
    textDecorationLine: "underline",
  },

  restaurantCard: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    width: width / 2,
    padding: theme.spacing.l,
    marginHorizontal: theme.spacing.m,
    marginBottom: theme.spacing.m,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  restaurantTitle: {
    textAlign: "left",
  },
});
