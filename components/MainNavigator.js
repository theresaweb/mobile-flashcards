import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Deck from './Deck'
import Tabs from './Tabs'


const MainNavigator = createStackNavigator({
  home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      inactiveTintColor: 'black',
      headerStyle: {
        backgroundColor: 'red',
      },
    }),
  },
});

export default createAppContainer(MainNavigator)
