import React from "react";
import { Card, Colors, Title, Text, IconButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import TextHeader from '../components/TextHeader'
import Button from '../components/Button'
import TextNormal from '../components/TextNormal'


const answer = {
    CORRECT: 'correct',
    INCORRECT: 'incorrect'
};

export default class Quiz extends React.Component{
    render(){
        const { correct, incorrect } = this.state;
        const total = correct + incorrect;
        const percent = ((correct / total) * 100).toFixed(0);
        const resultStyle =
        percent >= 70 ? styles.resultTextGood : styles.resultTextBad;
        // return(
        //     <View>
        //         <View style={styles.container}>
        //             <Card style={styles.card}>
        //                 <Card.Content>
        //                     <Title style={styles.quiz}>
        //                         {/* Implement the question here */}
        //                         What is the question?
        //                     </Title>
        //                 </Card.Content>
        //             </Card>
        //             <Text style={styles.    remainingQuestionText}>
        //                 {/* Implement the remaining question here */}
        //                 {/* {this.props.deck.questions.length - questionIndex}{" "}
        //                 {this.props.deck.questions.length - questionIndex > 1
        //                     ? "questions "
        //                     : "question "} left */}
        //                  You have 3 questions remaining   
        //             </Text>
        //         </View>
        //         <View style={styles.actionContainer}>
        //             <IconButton
        //             icon="checkbox-marked"
        //             color={Colors.green300}
        //             size={70}
        //             style={styles.iconRight}
        //             // Handle onPress
        //             />
        //             <IconButton
        //             icon="close-box"
        //             color={Colors.red300}
        //             size={70}
        //             style={styles.iconLeft}
        //             // Handle onPress
        //             />
        //         </View>
        //     </View>
        // )

        return(
            <View style={styles.quizCompleteContainer}>
                <TextHeader >Quiz Complete !!!</TextHeader>
                <TextNormal style={resultStyle}>You got {correct} / {total} correct.</TextNormal>
                <TextNormal style={resultStyle}>Score is {percent}%</TextNormal>
                <Button mode="contained" onPress={this.handleReset}>
                    Restart Quiz
                </Button>

                <Button mode="outlined"
                // onPress={() => this.props.navigation.goBack()}
                >
                    Go Back to Deck
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: "center",
      marginTop: 120,
      alignItems: "center"
    },
    actionContainer: {
      flexDirection: "row",  
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    card: {
      flex: 1,
      borderRadius: 10,
      backgroundColor: Colors.blue300,
      shadowColor: "rgba(0,0,0,0.5)",
      shadowOffset: {
        width: 2,
        height: 1
      },
      shadowOpacity: 0.8,
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    },
    quiz: {
      textAlign: "center",
      alignContent: "center",
      justifyContent: "center",
      fontSize: 24,
      padding: 20,
      color: Colors.white,
      fontFamily: "System"
    },
    iconLeft: {
      left: 0,
      marginBottom: 20,
      borderColor: Colors.red500,
      position: "absolute"
    },
    iconRight: {
      right: 0,
      marginBottom: 20,
      borderColor: Colors.green500,
      position: "absolute"
    },
    quizCompletedContainer: {
      flex: 1,
      padding: 20,
      width: "100%",
      maxWidth: 340,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    remainingQuestionText: {
      fontSize: 16,
      paddingTop: 20,
      color: Colors.grey500
    },
    resultTextGood: {
        color: Colors.green200,
      },
      resultTextBad: {
        color: Colors.red200,
      }
  });
  