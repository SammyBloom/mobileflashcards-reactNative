import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { StyleSheet, Text, View } from "react-native"; 
import { theme } from './src/utils/theme';
import AppBar from './src/components/AppBar';
import { createStore, applyMiddleware } from "redux";
import reducer from "./src/reducers/index";
import thunk from "redux-thunk";
import logger from "redux-logger";
import AppNavigator from './src/navigation/AppNavigator';
import { setLocalNotification } from './src/utils/helpers';


const store = createStore(
  reducer /* preloadedState, */,
  applyMiddleware(thunk, logger)
);
export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render(){
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <View style={styles.container}>
            <AppBar/>
            <AppNavigator/>
          </View>
        </PaperProvider>
      </StoreProvider>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
