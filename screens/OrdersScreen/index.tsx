import React, { useState } from "react";
import {Pressable, StyleSheet, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons"
import {StatusBar, Image} from "react-native";
import theme, {CustomText} from "../../Theme";
import * as RootNavigator from "../../util/RootNavigator"

interface OrdersScreenProps {
}

const ORDERS =[
    0,0,0
]
export default function OrdersScreen() {
    const [active ,setActive] = useState(0)

    const getStyle = (index:number) => {
        return active === index && styles.navItemActive
    }


    return (
        <View style={styles.container}>

            <FontAwesome5 name={"angle-left"} size={25} onPress={() => RootNavigator.goBack()} />

            <CustomText variant={"header1"} style={styles.mainText} >Your Orders</CustomText>

            <View style={styles.nav}>
                <View>
                <CustomText variant={"header2"}  onPress={() => setActive(0)} >Completed orders</CustomText>
                    <View style={getStyle(0)} />
                </View>

                <View>
                    <CustomText variant={"header2"}  onPress={() => setActive(1)}>Pending orders</CustomText>
                    <View style={getStyle(1)} />
                </View>
            </View>

            {ORDERS.map((_,index) => (
                <View key={index} style={styles.card} >
                    <Image source={require("../../assets/bigburger.png")} style={styles.image} />
                    <View style={styles.contentContainer} >
                        <CustomText variant={"button"}>The Macdonald </CustomText>
                        <CustomText variant={"body"}>Classic cheeseburger </CustomText>
                        <CustomText variant={"button"}>$23.99 </CustomText>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button}>
                            <CustomText variant={"button"} style={styles.buttonText} >-</CustomText>
                        </Pressable>
                        <CustomText variant={"button"} >1</CustomText>
                        <Pressable style={styles.button}>
                            <CustomText variant={"button"} style={styles.buttonText}>+</CustomText>
                        </Pressable>
                    </View>

                    <View style={styles.completeContainer}>
                        <CustomText variant={"body"} style={styles.buttonText}>Complete</CustomText>
                    </View>
                </View>
            ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: theme.spacing.l
    },
    mainText:{
        textAlign:"left",
        marginVertical:theme.spacing.l
    },
    nav:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        paddingHorizontal: theme.spacing.m
    },
    navItemActive:{
        marginTop: 5,
        height: 2,
        width: "50%",
        alignSelf:"center",
        backgroundColor: "#333"
    },
    card:{
        backgroundColor: theme.colors.white,
        marginVertical: theme.spacing.s,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: theme.spacing.l,
        paddingHorizontal: theme.spacing.xl,
        borderRadius: theme.spacing.m,
        overflow: "hidden"
    },
    image:{
        width: 50,
        height: 50
    },
    contentContainer:{
        marginHorizontal: theme.spacing.m
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button:{
        backgroundColor: theme.colors.gradient,
        width:25,
        height: 25,
        borderRadius: 25/2,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color:theme.colors.white
    },
    completeContainer:{
        position:"absolute",
        top: 20,
        right: -50,
        transform: [{rotate: "45deg"}],
        backgroundColor: "#85BB72",
        overflow:"hidden",
        paddingHorizontal: 50
    }

});