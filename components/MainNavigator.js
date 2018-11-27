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
    elevation: 0, // only applied to Android to remove the shadow in the header
    shadowOpacity: 0, // for removing the shadow in the header
    backgroundColor: 'blue'
  },
  headerTitleStyle: {
    color: 'white'
  }
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
})
export default createAppContainer(MainNavigator)
