import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from "react-native"; 
import { theme } from './src/utils/theme';
import ListDeck from './src/screens/ListDeck';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <ListDeck/>
      </View>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
