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
        tabBarLabel: 'Flashcards',
        tabBarIcon: () => <MaterialCommunityIcons name='cards-outline' size={30} color={'#fff'} />
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarIcon: () => <MaterialCommunityIcons name='plus-box-outline' size={30} color={'#fff'} />

      }
    }
  },{
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: 'maroon',
      style: {
        height: 56,
        backgroundColor: '#ee204d',
      }
    }
  }
);

export default createAppContainer(Tabs);
