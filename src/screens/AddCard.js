import React from "react";
import {
  StyleSheet, ScrollView, View, KeyboardAvoidingView } from "react-native";
import PropTypes from 'prop-types';  
import { Card } from "react-native-paper";
import TextHeader from '../components/TextHeader'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
// import { connect } from "react-redux";

export default class AddCard extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        addCardToDeck: PropTypes.func.isRequired
    };
    state = {
        question: '',
        answer: ''
    };
    handleQuestionChange = question => {
        this.setState({ question });
    };
    handleAnswerChange = answer => {
        this.setState({ answer });
    };
    handleSubmit = () => {
        // Start implementing Navigation and adding of cards function

        // const card = {
        //   question: this.state.question,
        //   answer: this.state.answer
        // };

        if (!question || !answer) {
            return alert("Please Enter all the fields");
        }
    
        // Implement adding of cards in the DB and App
    
        // Handle Navigation
    };
    render() {
        return (
          <View>
            <View style={styles.container}>
              <ScrollView>
                <KeyboardAvoidingView behavior="padding">
                  <Card style={styles.card}>
                    <Card.Content style={styles.cardContent}>
                      <TextHeader>What is the title of your card?</TextHeader>
                      <TextInput
                        label="Question"
                        returnKeyType="next"
                        onChangeText={this.handleQuestionChange}
                        autoCapitalize="sentences"
                        autoFocus={true}
                        onSubmitEditing={() => this.answerTextInput.focus()}/>

                      <TextHeader>What is the answer of your card?</TextHeader>
                      <TextInput
                        label="Answer"
                        returnKeyType="done"
                        onChangeText={this.handleAnswerChange}
                        autoCapitalize="sentences"
                        ref={(input) => {
                          this.answerTextInput = input;
                        }}
                        onSubmitEditing={this.handleSubmit}/>
                    </Card.Content>
                    <Card.Actions>
                      <Button
                        mode="contained"
                        style={styles.button}
                        onPress={this.handleSubmit}
                        disabled={this.state.question === '' || this.state.answer === ''}>
                          Add New Card
                      </Button>
                    </Card.Actions>
                  </Card>
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
    
// Implement mapStateToProps

// Export addCard with connect