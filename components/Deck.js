import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Questions from './Questions'
import AddQuestion from './AddQuestion'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
     return {
      title: deck.title
    }
  }
  render() {
    const deck = this.props.navigation.getParam('deck', null)
    console.log("dec in Deck", deck)
     return (
      <View>
        <Text>{deck.title}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'AddQuestion',
            { deck: deck }
            )}
            >
          <Text>Add Question</Text>
        </TouchableOpacity>
        {deck.questions.length > 0 &&
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'Questions',
              { deck: deck }
              )}
              >
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        }
      </View>
      )
    }
  }
  const styles = StyleSheet.create({
    item: {

    }
  })
 export default Deck
