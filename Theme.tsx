import { createText, createTheme } from "@shopify/restyle";

const palette = {
  primary: "#FE554A",
  gradient: "##F9881F,  #F9881F, #FF774C",
  accent: "#0b735f",
  black: "#2a3037",
  darkGray: "#c6c9cc",
  gray: "#dfe2e5",
  lightGray: "#fcfcfc",
  background: "#f7f7fb",
};

const theme = createTheme({
  colors: {
    primary: "#FE554A",
    gradient: "#FF774C",
    accent: "#0b735f",
    black: "#2a3037",
    darkGray: "#c6c9cc",
    gray: "#dfe2e5",
    lightGray: "#fcfcfc",
    white: "#fff",
    background: "#f7f7fb",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header1: {
      fontWeight: "700",
      fontSize: 24,
      lineHeight: 32,
      textAlign: "center",
    },
    header2: {
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 20,
      textAlign: "center",
    },
    button: {
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 24,
      textAlign: "center",
    },
    body: {
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 21,
      textAlign: "center",
    },
    caption: {
      fontWeight: "400",
      fontSize: 11,
      lineHeight: 16,
      textAlign: "center",
    },
  },
});

export type Theme = typeof theme;

export const CustomText = createText<Theme>();

export default theme;
