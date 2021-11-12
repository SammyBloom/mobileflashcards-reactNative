
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { white, textGray } from '../utils/colors';
import { connect } from 'react-redux';
import TextHeader from './TextHeader';
import TextNormal from './TextNormal';

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
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: white,
    borderRadius: 5,
    marginBottom: 10
  },
  cardText: {
    fontSize: 18,
    color: textGray
  }
});

const mapStateToProps = (state, { id }) => {
  const deck = state[id];
  return {
    deck
  };
};

export default connect(mapStateToProps)(DeckComp);