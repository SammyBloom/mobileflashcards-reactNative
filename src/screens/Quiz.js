import React from "react";
import { Card, Colors, Title, IconButton, Paragraph } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import TextHeader from '../components/TextHeader'
import TextNormal from '../components/TextNormal'
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import QuizResult from "./QuizResult";
import { ScrollView } from "react-native-gesture-handler";
import PropTypes from 'prop-types'
class Quiz extends React.Component {

  static propTypes = {
    decks: PropTypes.object.isRequired
  }

  state = {
    correctCount: 0,
    currentQuestion: 0,
    faceUp: true,
    questions: Object.values(this.props.decks)[2].questions.length,
  }

  

  static getDerivedStateFromProps(props) {
    const { deck } = props.navigation.state.params
    return { deck }
  }

  handleCorrect = () => {
    this.setState((prevState) => ({
      correctCount: ++prevState.correctCount,
      currentQuestion: ++prevState.currentQuestion
    }));
  }

  handleIncorrect = () => {
    this.setState((prevState) => ({
      currentQuestion: ++prevState.currentQuestion
    }));
  }

  toggleFace = () => {
    this.setState((prevState) => ({
      faceUp: !prevState.faceUp
    }));
  }

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      correctCount: 0,
      faceUp: true,
    });
  }

  render() {
    const { currentQuestion } = this.state
    const { decks } = this.props;
    // const totalQuestions = this.props.deck.questions.length
    const totalQuestions = Object.values(decks)[2].questions.length;
    // const totalQuestions = decks[deck.title].questions.length
    // const totalQuestions = decks.questions.length
    
    const { question, answer } = (totalQuestions) && (currentQuestion < totalQuestions) 
      ? this.state.deck.questions[currentQuestion]
      : { question: null, answer: null }

    return (!totalQuestions) 
      ? (
        <View style={styles.noQuiz}>
          <TextHeader style={styles.remainingQuestionText}>
            There is no question here.
          </TextHeader>
        </View>
      )
      : (currentQuestion >= totalQuestions) ? (
        <QuizResult
          totalQuestions={totalQuestions}
          correctCount={this.state.correctCount}
          deck={this.state.deck}
          restartQuiz={this.restartQuiz}
        />
      )
      : (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.container2}>
              <Card style={styles.card}>
                <Card.Content>
                  <Title style={styles.quiz}>
                    {`${(this.state.faceUp) ? 'QUESTION' : 'ANSWER'}`}
                  </Title>
                  <Paragraph>
                    {(this.state.faceUp) ? question : answer}
                  </Paragraph>
                </Card.Content>
              </Card>
              <TextNormal style={styles.remainingQuestionText}>
                {`There are ${currentQuestion + 1} / ${totalQuestions} questions remaining.`}
              </TextNormal>
              <TouchableOpacity
                onPress={this.toggleFace}>
                  <TextNormal style={styles.showAnswerText}>
                    {`DISPLAY ${(this.state.faceUp) ? 'ANSWER' : 'QUESTION'}`}
                  </TextNormal>
              </TouchableOpacity>
            </View>
            <View style={styles.actionContainer}>
              <IconButton
                icon="checkbox-marked"
                color={Colors.green300}
                size={70}
                style={styles.iconRight}
                onPress={this.handleCorrect}
              />
              <IconButton
                icon="close-box"
                color={Colors.red300}
                size={70}
                style={styles.iconLeft}
                onPress={this.handleIncorrect}
              />
            </View>
          </View>
        </ScrollView>
      ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
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
  remainingQuestionText: {
    fontSize: 16,
    paddingTop: 20,
    color: Colors.grey500
  },
  showAnswerText: {
    fontSize: 20,
    paddingTop: 20,
    color: Colors.orange400
  },
  noQuiz: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});

const mapStateToProps = state => ({ decks: state });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
