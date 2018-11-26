import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Deck from './Deck'
import Tabs from './Tabs'
import Questions from './Questions'
import AddQuestion from './AddQuestion'

const options = {
  headerTintColor: 'white',
  inactiveTintColor: 'black',
  headerStyle: {
    backgroundColor: 'blue',
  },
}
const MainNavigator = createStackNavigator({
  home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
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
