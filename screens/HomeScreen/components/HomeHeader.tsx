import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme, { CustomText } from "../../../Theme";
import { FontAwesome5 } from "@expo/vector-icons";

interface HomeHeaderProps {}

export default function HomeHeader() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable>
        <View style={[styles.line, styles.firstLine]} />
        <View style={[styles.line, styles.secondLine]} />
        <View style={[styles.line, styles.thirdLine]} />
      </Pressable>

      <View>
        <View style={styles.centerTop}>
          <CustomText variant="header2" style={styles.delivery}>
            Delivery to
          </CustomText>
          <FontAwesome5 name="chevron-down" size={15} />
        </View>
        <CustomText variant="header2" style={styles.address}>
          Acıpayam,Denizli
        </CustomText>
      </View>
      <View>
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1242891099338924033/tqcNzY47_400x400.jpg",
          }}
          style={styles.avatar}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  line: {
    backgroundColor: "#111",
    height: 3,
    marginBottom: 5,
  },
  firstLine: {
    width: 20,
  },
  secondLine: {
    width: 15,
  },
  thirdLine: {
    width: 10,
  },

  centerTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  delivery: {
    textDecorationLine: "underline",
    marginRight: 8,
  },
  address: {
    color: "#FE554A",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});
