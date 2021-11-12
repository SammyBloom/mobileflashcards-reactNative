import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View, SafeAreaView } from "react-native";
import { Card, Divider, Colors, Avatar, FAB } from "react-native-paper";
import DeckComp from "../components/DeckComp";
import { handleInitialData } from "../actions/index";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
export class ListDeck extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    handleInitialData: PropTypes.func.isRequired,
    decks: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.handleInitialData();
  }

  onAddDeck() {
    this.props.navigation.navigate("AddDeck");
  }


  render() {
    const { decks, navigation } = this.props;
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.container} behavior="padding">
        <ScrollView>
        {Object.values(decks).map(deck => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() =>
              navigation.navigate('Deck', { title: deck.title })}
            >    
                
              <Card.Title
                title={decks[deck.title].title}
                right={props => (
                  <Avatar.Text
                    size={24}
                    style={styles.avatarText}
                    label={decks[deck.title].questions.length}
                  />
                )}
              />
              <Divider />
            </TouchableOpacity>
          );
          })}  
        </ScrollView>
        <FAB style={styles.fab} icon="plus"
          onPress={() => this.onAddDeck()}
        />
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
    fab: {
      position: "absolute",
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: Colors.blue700
    },
    text: {
      color: "#fff",
      fontSize: 30,
      fontWeight: "500"
    },
    avatarText: {
      marginRight: 16,
      backgroundColor: Colors.pink100
    }
  });

const mapStateToProps = state => ({ decks: state });

export default connect(
  mapStateToProps,
  { handleInitialData }
)(ListDeck);