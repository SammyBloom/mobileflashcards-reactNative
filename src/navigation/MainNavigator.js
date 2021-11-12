import React from 'react';
import {
  createStackNavigator
} from 'react-navigation-stack';
import { AppBar } from "../components/AppBar";
import ListDeck from '../screens/ListDeck';
import AddDeck from '../screens/AddDeck';
import Deck from '../screens/Deck';
import AddCard from '../screens/AddCard';
import Quiz from '../screens/Quiz';
import { Colors } from 'react-native-paper';



const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: ListDeck,
      navigationOptions: {
          headerTintColor: Colors.amber100.white,
          headerStyle: {
              backgroundColor: Colors.blue700,
          },
          title: 'Flash Cards'
      }
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        headerTintColor: Colors.white,  
        headerStyle: {
          backgroundColor: Colors.blue700,
        },
        title: 'Deck Details'
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.blue700
        },
        headerTitleStyle: {
          justifyContent: 'center',
          textAlign: 'center'
        },
        title: 'Add New Card'
      }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.blue700
          },
          headerTitleStyle: {
            justifyContent: 'center',
            textAlign: 'center'
          },
          title: 'Add New Deck'
        }
      },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.blue700
        }
      }
    }
  },
  { headerLayoutPreset: 'center' }
);

export default MainNavigator;