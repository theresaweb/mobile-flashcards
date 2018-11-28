import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Questions from './Questions'
import AddQuestion from './AddQuestion'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
     return {
      title: `Deck: ${deck.title}`
    }
  }
  render() {
    const deck = this.props.navigation.getParam('deck', null)
     return (
      <View style={styles.view}>
        <Text style={styles.title}>{deck.title} ({deck.questions.length})</Text>
        {deck.questions.length > 0 &&
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'Questions',
              { deck: deck }
              )}
              >
            <Text style={styles.buttonQuiz}>Start a Quiz</Text>
          </TouchableOpacity>
        }
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'AddQuestion',
            { deck: deck }
            )}
            >
          <Text style={styles.button}>Add Card</Text>
        </TouchableOpacity>
      </View>
      )
    }
  }
  const styles = StyleSheet.create({
    view: {
      flex: 1,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10
    },
    title: {
      fontSize: 30,
      padding: 10,
      textAlign: 'center'
    },
    button: {
      backgroundColor: 'rgb(0,144,255)',
      fontSize: 30,
      padding: 10,
      margin: 10,
      textAlign: 'center'
    },
    buttonQuiz: {
      backgroundColor: 'rgb(249,255,0)',
      fontSize: 30,
      padding: 10,
      margin: 10,
      textAlign: 'center'
    }
  })
 export default Deck
