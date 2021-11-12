import React from "react";
import { Card, Colors, Title, IconButton, Paragraph } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import TextHeader from '../components/TextHeader'
import Button from '../components/Button'
import TextNormal from '../components/TextNormal'
import { connect } from "react-redux";
import PropTypes from 'prop-types' 
import PagerView from "react-native-pager-view";

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
        show: screen.QUESTION,
        correct: 0,
        incorrect: 0,
        page: 0,
        questions: Object.values(this.props.decks)[2].questions.length,
        answered: Array(Object.values(this.props.decks)[2].questions.length).fill(0)
      };

      handlePageChange = evt => {
        this.setState({
          show: screen.QUESTION,
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
          this.setState({ show: screen.RESULT });
        }
      };

      handleReset = () => {
        this.setState(prevState => ({
          show: screen.QUESTION,
          correct: 0,
          incorrect: 0,
          answered: Array(prevState.questions).fill(0)
        }));
      };

      handleShowAnswer = () =>{
          
      }

    render(){
        const { decks } = this.props;
        const { show } = this.props;
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
            <PagerView
            style={styles.container}
            scrollEnabled={true}
            onPageSelected={this.handlePageChange}
            >
                {questions.map((question, idx) => (
                    <View style={styles.container2}>
                    <View style={styles.container}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Title style={styles.quiz}>
                                    {show === screen.QUESTION ? 'Question' : 'Answer'}
                                </Title>
                                <Paragraph>
                                    {show === screen.QUESTION
                                    ? question.question
                                    : question.answer}
                                </Paragraph>
                            </Card.Content>
                        </Card>
                        <TextNormal style={styles.    remainingQuestionText}>
                            {idx + 1} / {questions.length} remaining. 
                        </TextNormal>
                        {show === screen.QUESTION ? (
                        <Button
                            mode="contained"
                            onPress={() => this.setState({ show: screen.ANSWER })}
                        >
                                Answer
                        </Button>
                        ) : (
                        <Button
                            mode="contained"
                            onPress={() => this.setState({ show: screen.QUESTION })}
                        >
                            Question
                        </Button>
                        )}
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

            </PagerView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: "center",
      marginTop: 100,
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
  