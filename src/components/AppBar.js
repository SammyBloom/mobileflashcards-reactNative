import * as React from "react";
import { Appbar } from "react-native-paper";

const AppBar = ({ title, navigation }) => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => navigation.goBack(null)} />

    <Appbar.Content
      titleStyle={{
        fontWeight: "bold",
        fontSize: 20
      }}
      title={title}
      subtitle={null}
    />
  </Appbar.Header>
);

export default AppBar;