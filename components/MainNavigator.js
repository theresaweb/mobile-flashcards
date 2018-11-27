import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Deck from './Deck'
import Questions from './Questions'
import AddQuestion from './AddQuestion'
import AddDeck from './AddDeck'
import Homepage from './Homepage'

const options = {
  headerTintColor: 'white',
  inactiveTintColor: 'black',
  headerStyle: {
    backgroundColor: 'blue',
  },
}
const MainNavigator = createStackNavigator({
  home: {
    screen: Homepage,
    navigationOptions: {
      header: null,
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: ({ navigation }) => (options),
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => (options),
  },
  Questions: {
    screen: Questions,
    navigationOptions: ({ navigation }) => (options),
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: ({ navigation }) => (options),
  },
});

export default createAppContainer(MainNavigator)
