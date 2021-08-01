import React from "react";
import {StyleSheet, View, Image, StatusBar, Dimensions, Pressable} from "react-native";
import theme, {CustomText} from "../../../Theme";
import {FontAwesome5} from "@expo/vector-icons"

interface HomeSidebarProps {
    handleNavClose: () => void
}

const {width} = Dimensions.get("window")
export default function HomeSidebar({handleNavClose}: HomeSidebarProps) {
    return (
        <View style={styles.container}>
            <View>
                <CustomText variant={"header1"} style={styles.closeButton} onPress={handleNavClose}> X</CustomText>
                <Image
                    source={{
                        uri: "https://pbs.twimg.com/profile_images/1242891099338924033/tqcNzY47_400x400.jpg",
                    }}
                    style={styles.avatar}
                />
                <CustomText variant={"header2"} style={styles.name}>Fatih KAYAN</CustomText>
                <CustomText variant={"body"} style={styles.mail}>fatih.kayan83@gmail.com</CustomText>

                <View style={styles.navItem}>
                    <FontAwesome5 name={"credit-card"} size={20}/>
                    <CustomText variant={"body"} style={styles.navText}>Payment Method</CustomText>
                </View>
                <View style={styles.navItem}>
                    <FontAwesome5 name={"cog"} size={20}/>
                    <CustomText variant={"body"} style={styles.navText}>Settings</CustomText>
                </View>
                <View style={styles.navItem}>
                    <FontAwesome5 name={"comment"} size={20}/>
                    <CustomText variant={"body"} style={styles.navText}>Help</CustomText>
                </View>
                <View style={styles.navItem}>
                    <FontAwesome5 name={"file"} size={20}/>
                    <CustomText variant={"body"} style={styles.navText}>Privacy Policy</CustomText>
                </View>
            </View>

            <Pressable style={styles.buttonContainer}>
                <CustomText variant={"button"} style={styles.buttonText}>Log Out</CustomText>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: "space-between",

    },
    closeButton: {
        marginBottom: 25,
        alignSelf: "flex-start",
        color:"#000000",
        opacity: 0.6
    },
    avatar: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2
    },
    name: {
        marginVertical: 10,
        alignSelf:"flex-start"
    },
    mail: {
        marginBottom: 50
    },
    navItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        marginVertical: 20
    },
    navText: {
        marginLeft: 10
    },
    buttonContainer: {
        backgroundColor: theme.colors.gradient,
        marginBottom: theme.spacing.l,
        paddingVertical: theme.spacing.s,
        paddingHorizontal: theme.spacing.m,
        borderRadius: theme.spacing.s
    },
    buttonText:{
        color:"#fff"
    }
});