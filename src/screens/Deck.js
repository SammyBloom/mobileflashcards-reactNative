import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button as PaperButton, Colors } from "react-native-paper";
import Button from '../components/Button'
import { connect } from "react-redux";
import { removeDeck } from "../actions/index";
import { removeDeckAsync } from "../utils/api";
import { NavigationActions } from "react-navigation";
import PropTypes  from 'prop-types'
import DeckComp from '../components/DeckComp'


export class Deck extends React.Component{
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        removeDeck: PropTypes.func.isRequired,
        deck: PropTypes.object
    };
    shouldComponentUpdate(nextProps) {
        return nextProps.deck !== undefined;
    }
      
    handleDelete = id => {
        const { removeDeck, navigation } = this.props;
    
        removeDeck(id);
        removeDeckAsync(id);
    
        navigation.goBack();
    };
    render(){
        const { deck } = this.props
        return(
            <View style={styles.container}>
                <DeckComp id={deck.title}/>
                <Button
                    mode="outlined"
                    disabled={deck.questions.length > 0 ? false : true}
                    onPress={() =>
                        this.props.navigation.navigate('Quiz', { title: deck.title })
                    }
                >
                    Start Quiz
                </Button>

                <Button
                    mode="contained"
                    onPress={() =>
                        this.props.navigation.navigate('AddCard', { title: deck.title })
                    }
                >
                    Add New Card
                </Button>

                <PaperButton
                    labelStyle={styles.buttonDeleteDeckLabel}
                    mode="text"
                    onPress={() => this.handleDelete(deck.title)}
                >
                    Delete Deck
                </PaperButton>
          </View>
        );
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

const mapStateToProps = (state, { navigation }) => {
    const title = navigation.getParam('title', 'undefined');
    const deck = state[title];
  
    return {
      deck
    };
};
  
export default connect(
    mapStateToProps,
    { removeDeck }
)(Deck);