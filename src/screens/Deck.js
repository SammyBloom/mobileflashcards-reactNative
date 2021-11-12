import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button as PaperButton, Colors } from "react-native-paper";
import TextHeader from '../components/TextHeader'
import Button from '../components/Button'


export default class Deck extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                {/* Omiplement TextHeader for title of deck */}
                <TextHeader>Programming</TextHeader>
                <Button
                    mode="outlined"
                    // disabled={deck.questions.length > 0 ? false : true}
                    // Implement onPress for start quiz button
                >
                    Start Quiz
                </Button>

                <Button
                    mode="contained"
                    // Implement onPress to navigate to New Card
                >
                    Add New Card
                </Button>

                <PaperButton
                    labelStyle={styles.buttonDeleteDeckLabel}
                    mode="text"
                    // Implement onPress to Delete deck
                >
                    Delete Deck
                </PaperButton>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      width: "100%",
      maxWidth: 340,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    buttonDeleteDeckLabel: {
      color: Colors.red500,
      textTransform: "none"
    }
});