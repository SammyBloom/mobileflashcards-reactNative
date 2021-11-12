import React from "react";
import { StyleSheet, ScrollView, View, KeyboardAvoidingView } from "react-native";
import { Card } from "react-native-paper";
import TextHeader from '../components/TextHeader'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { addDeck } from "../actions";
import { StackActions, NavigationActions } from 'react-navigation'
import { saveDeckTitleAsync } from "../utils/api";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class AddDeck extends React.Component{

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    addDeck: PropTypes.func.isRequired
  };
  state = {
    text: ''
  };
  handleChange = text => {
    this.setState({ text });
  };
  handleSubmit = () => {
    const { addDeck, navigation } = this.props;
    const { text } = this.state;

    if (!this.state.text) {
      return alert("Please Enter Deck title");
    }
    this.props.addDeck(this.state.text);

    addDeck(text);
    saveDeckTitleAsync(text);

    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({
          routeName: 'Deck',
          params: { title: text }
        })
      ]
    });
    navigation.dispatch(resetAction);

    this.setState(() => ({ text: '' }));
  };
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
                    onChangeText={this.handleChange}
                    autoCapitalize="sentences"
                    autoFocus={true}
                    value={this.state.text}/>
              </Card.Content>
              <Card.Actions>
                <Button
                  mode="contained"
                  onPress={this.handleSubmit}
                  style={styles.button}
                  disabled={this.state.text === ''}>
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

export default connect(null, { addDeck })(AddDeck);
