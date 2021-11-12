
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TextHeader from './TextHeader';
import TextNormal from './TextNormal';
import { Colors } from 'react-native-paper';

const DeckComp = props => {
  const { deck } = props;

  if (deck === undefined) {
    return <View style={styles.deckContainer} />;
  }
  return (
    <View style={styles.deckContainer}>
      <View>
        <TextHeader>{deck.title}</TextHeader>
      </View>
      <View>
        <TextNormal style={styles.cardText}>{deck.questions.length} cards</TextNormal>
      </View>
    </View>
  );
};
DeckComp.propTypes = {
  deck: PropTypes.object
};

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 120,
    minHeight: 120,
  },
  cardText: {
    fontSize: 18,
    color: Colors.grey200
  }
});

const mapStateToProps = (state, { id }) => {
  const deck = state[id];
  return {
    deck
  };
};

export default connect(mapStateToProps)(DeckComp);