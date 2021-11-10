import React from "react";
import { StyleSheet, ScrollView, View, KeyboardAvoidingView } from "react-native";
import { Card, Colors } from "react-native-paper";
import TextHeader from '../components/TextHeader'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
export default class AddDeck extends React.Component{
render() {
  return(
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <TextHeader>Title of new deck?</TextHeader>
                <TextInput
                  label="Deck Title"
                  returnKeyType="done"
                  // Add onChangeText Functionality
                  autoCapitalize="sentences"/>
            </Card.Content>
            <Card.Actions>
              <Button
                mode="contained"
                // Add on Press function
                style={styles.button}>
                  Create New Deck
              </Button>
            </Card.Actions>
          </Card>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  ) 
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1
  },
  cardContent: {
    paddingTop: 30,
    paddingBottom: 30
  }
});
