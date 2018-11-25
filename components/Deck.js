import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Questions from './Questions'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
     return {
      title: deck[0].title
    }
  }
  render() {
    const { navigation } = this.props
    const {navigate} = navigation
    const deck = navigation.getParam('deck', null)
     return (
      <View>
        <Text>{deck[0].title}</Text>
        <TouchableOpacity
          onPress={() => navigate(
            'AddQuestion',
            { deck: deck[0] }
            )}
            >
          <Text>Add Card</Text>
        </TouchableOpacity>
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
