import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import { Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='plus-box-outline' size={30} color={tintColor} />

      }
    }
  },{
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'lightblue',
      style: {
        height: 56,
        backgroundColor: 'red',
      }
    }
  }
);

export default createAppContainer(Tabs);
