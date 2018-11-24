import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Questions from './Questions'

class Deck extends Component {
  render() {
    const { navigation } = this.props
    const {navigate} = navigation
    const deck = navigation.getParam('deck', null)
     return (
      <View>
        <Text>{deck[0].title}</Text>
        <TouchableOpacity><Text>Add Card</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate(
            'Questions',
            { questions: deck[0].questions }
            )}
            >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
      )
    }
  }
  const styles = StyleSheet.create({
    item: {

    }
  })
 export default Deck
