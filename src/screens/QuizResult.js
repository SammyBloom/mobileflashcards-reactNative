import React from "react";
import { StyleSheet, View } from "react-native";
import TextHeader from '../components/TextHeader'
import TextNormal from '../components/TextNormal'
import { Colors } from "react-native-paper";
import { withNavigation } from "react-navigation";
import Button from '../components/Button'
import { markDateAsQuizAttempted } from '../utils/api'

export class QuizResult extends React.Component{
    componentDidMount(){
        markDateAsQuizAttempted()
    }
    
    render(){
        const { totalQuestions, correctCount, restartQuiz, navigation } = this.props
      const percent = ((correctCount / totalQuestions) * 100).toFixed(2);
      const resultStyle =
        percent >= 70 ? styles.resultTextGood : styles.resultTextBad;
          
      return (
        <View style={styles.quizCompleteContainer}>
          <TextHeader >Quiz Complete !!!</TextHeader>

          <TextNormal style={resultStyle}>{
              `You got ${percent}%`
          }</TextNormal>

            <TextNormal style={resultStyle}>{
              `Total ${correctCount} question(s) answered out of ${totalQuestions} question(s)`
          }</TextNormal>
    
          <Button mode="contained" onPress={restartQuiz}>
            Restart Quiz
          </Button>

          <Button mode="outlined"
            onPress={() => navigation.goBack()}
          >
            Go Back to Deck
          </Button>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    resultTextGood: {
        color: Colors.green200,
    },
    resultTextBad: {
        color: Colors.red200,
    },
    quizCompletedContainer: {
        flex: 1,
        padding: 20,
        width: "100%",
        maxWidth: 340,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default withNavigation(QuizResult)