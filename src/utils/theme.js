import { DefaultTheme, Colors } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.blue700,
    secondary: Colors.blue300,
    error: Colors.red300
  }
};