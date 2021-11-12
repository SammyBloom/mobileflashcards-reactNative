import React from "react";
import { Card, Colors, Title, Text, IconButton } from "react-native-paper";
import { StyleSheet, View, ScrollView, ViewPagerAndroidComponent } from "react-native";
import TextHeader from '../components/TextHeader'
import Button from '../components/Button'
import TextNormal from '../components/TextNormal'
import { connect } from "react-redux";
import PropTypes from 'prop-types' 

const screen = {
    QUESTION: 'question',
    ANSWER: 'answer',
    RESULT: 'result'
};

const answer = {
    CORRECT: 'correct',
    INCORRECT: 'incorrect'
};

export class Quiz extends React.Component{
    static propTypes = {
        decks: PropTypes.object.isRequired
      };

      state = {
        display: screen.QUESTION,
        correct: 0,
        incorrect: 0,
        page: 0,
        questions: Object.values(this.props.decks)[2].questions.length,
        answered: Array(Object.values(this.props.decks)[2].questions.length).fill(0)
      };

      handlePageChange = evt => {
        this.setState({
          display: screen.QUESTION,
          page: evt.nativeEvent.position
        });
      };

      handleAnswer = response => {
        const { decks } = this.props;
        if (response === answer.CORRECT) {
          this.setState(prevState => ({ correct: prevState.correct + 1 }));
        } else {
          this.setState(prevState => ({ incorrect: prevState.incorrect + 1 }));
        }
        this.setState(prevState => ({
          answered: prevState.answered.map((val, idx) =>
            prevState.page === idx ? 1 : val
          )
        }));
    
        const { correct, incorrect } = this.state;
        const questions = Object.values(decks)[2].questions;
        const numQuestions = questions.length - 1;
    
        if (numQuestions === correct + incorrect) {
          this.setState({ display: screen.RESULT });
        }
      };

      handleReset = () => {
        this.setState(prevState => ({
          display: screen.QUESTION,
          correct: 0,
          incorrect: 0,
          // answered: Array(Object.values(this.props.decks)[2].questions.length).fill(
          answered: Array(prevState.questions).fill(0)
        }));
      };

    render(){
        const { decks } = this.props;
        const { display } = this.props;
        const questions = Object.values(decks)[2].questions;

        if (this.state.display === screen.RESULT){
            const { correct, incorrect } = this.state;
            const total = correct + incorrect;
            const percent = ((correct / total) * 100).toFixed(0);
            const resultStyle =
            percent >= 70 ? styles.resultTextGood : styles.resultTextBad;
            return(
                <View style={styles.quizCompleteContainer}>
                    <TextHeader >Quiz Complete !!!</TextHeader>
                    <TextNormal style={resultStyle}>You got {correct} / {total} correct.</TextNormal>
                    <TextNormal style={resultStyle}>Score is {percent}%</TextNormal>
                    <Button mode="contained" onPress={this.handleReset}>
                        Restart Quiz
                    </Button>

                    <Button mode="outlined"
                    onPress={() => this.props.navigation.goBack()}
                    >
                        Go Back to Deck
                    </Button>
                </View>
            );
        }

        return(
            <ViewPagerAndroidComponent
            style={styles.container}
            scrollEnabled={true}
            onPageSelected={this.handlePageChange}
            >
                {questions.map((questions, idx) => (
                    <View style={styles.container2}>
                    <View style={styles.container}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Title style={styles.quiz}>
                                    {display === screen.QUESTION ? 'Question' : 'Answer'}
                                </Title>
                            </Card.Content>
                        </Card>
                        <TextNormal style={styles.    remainingQuestionText}>
                            {display === screen.QUESTION
                            ? question.question
                            : question.answer}  
                        </TextNormal>
                    </View>
                    <View style={styles.actionContainer}>
                        <IconButton
                        icon="checkbox-marked"
                        color={Colors.green300}
                        size={70}
                        style={styles.iconRight}
                        onPress={() => this.handleAnswer(answer.CORRECT)}
                        disabled={this.state.answered[idx] === 1}
                        />
                        <IconButton
                        icon="close-box"
                        color={Colors.red300}
                        size={70}
                        style={styles.iconLeft}
                        onPress={() => this.handleAnswer(answer.INCORRECT)}
                        disabled={this.state.answered[idx] === 1}
                        />
                    </View>
                </View>
                ))}

            </ViewPagerAndroidComponent>
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
    container2: {
        flex: 1,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        justifyContent: 'space-around'
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

const mapStateToProps = state => ({ decks: state });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
  