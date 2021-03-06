import React, { SetStateAction } from "react";
import { Dispatch } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { REGISTER } from "../../navigators/Routes";
import theme, { CustomText } from "../../Theme";
import * as RootNavigator from "../../util/RootNavigator";
import OnBoardingHeader from "../OnBoarding/components/Header";

interface LoginProps {
  setAuthentication: Dispatch<SetStateAction<boolean>>;
}

export default function Login({ setAuthentication }: LoginProps) {
  return (
    <View style={{ flex: 1 }}>
      <OnBoardingHeader {...{ hasPrevious: true, setAuthentication }} />
      <CustomText variant="header1"> Login to your account</CustomText>
      <CustomText variant="caption" style={styles.captionText}>
        Good to see you again, enter your details below to continue ordering.
      </CustomText>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <CustomText variant="inputLabel" style={styles.inputLabel}>
            Email Address
          </CustomText>
          <TextInput style={styles.input} placeholder="Enter email" />
        </View>
        <View style={styles.inputContainer}>
          <CustomText variant="inputLabel" style={styles.inputLabel}>
            Password
          </CustomText>
          <TextInput style={styles.input} placeholder="Enter password" />
        </View>

        <Pressable onPress={() => setAuthentication(true)}>
          <CustomText variant="button" style={styles.loginButtonText}>
            Login
          </CustomText>
        </Pressable>
      </View>

      <View style={styles.optionsContainer}>
        <Pressable
          style={styles.googleContainer}
          onPress={() => setAuthentication(true)}
        >
          <Image
            source={require("../../assets/google.png")}
            style={styles.googleIcon}
          />
          <CustomText variant="button" style={styles.googleText}>
            Sign-in with Google
          </CustomText>
        </Pressable>

        <Pressable
          style={styles.registerContainer}
          onPress={() => RootNavigator.navigate(REGISTER)}
        >
          <CustomText variant="button" style={styles.registerText}>
            Create an account
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  captionText: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.xl,
    marginHorizontal: theme.spacing.l,
  },
  formContainer: {
    marginHorizontal: theme.spacing.l,
  },
  inputContainer: {
    marginVertical: theme.spacing.s,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DFE2E5",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  inputLabel: {
    marginLeft: 15,
    marginVertical: theme.spacing.s,
  },
  loginButtonText: {
    color: theme.colors.primary,
    marginTop: theme.spacing.s,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginVertical: theme.spacing.l,
  },

  googleContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.l,
    alignSelf: "center",
    borderRadius: 20,
    borderColor: "rgba(2, 32, 44, 0.05)",
    marginVertical: theme.spacing.s,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
  googleText: {
    marginLeft: theme.spacing.s,
    textDecorationLine: "underline",
  },

  registerContainer: {
    backgroundColor: theme.colors.gradient,
    paddingVertical: theme.spacing.m,
    marginHorizontal: theme.spacing.l,
    marginVertical: theme.spacing.s,
    borderRadius: 500,
  },
  registerText: {
    color: theme.colors.white,
  },
});
