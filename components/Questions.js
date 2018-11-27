import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';
import DeckList from './DeckList'

class Questions extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
     return {
      title: deck.title
    }
  }
  state = {
    currQuestion: 1,
    flipped: false,
    numCorrect: 0,
    complete: false
  }
  flipCard = () => {
    this.setState((prevState) => {
      return { flipped: !prevState.flipped }
    })
  }
  tallyCorrect = () => {
    this.setState((prevState) => {
      return {
        currQuestion: prevState.currQuestion + 1,
        numCorrect: prevState.numCorrect + 1,
        flipped: false
      }
    })
  }
  tallyIncorrect = () => {
    this.setState((prevState) => {
      return {
        currQuestion: prevState.currQuestion + 1,
        flipped: false
      }
    })
  }
  toHomex = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'DeckList'}))
  }
  toHome = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'home',
      params: {},
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    const { navigation } = this.props
    const deck = navigation.getParam('deck', null)
    const { questions } = deck
    const { flipped } = this.state
    if (this.state.currQuestion > questions.length) {
      return (
        <View>
          <Text>You're done!</Text>
          <Text>You got {this.state.numCorrect} correct out of {questions.length} questions</Text>
          <TouchableOpacity
            onPress={this.toHome}>
              <Text>Back to Home</Text>
          </TouchableOpacity>
        </View>
      )
    }

     return (
      <View>
        <Text>{deck.title}</Text>
        <Text>Question {this.state.currQuestion}/{questions.length}</Text>
        <Text>{flipped ? questions[this.state.currQuestion -1].answer : questions[this.state.currQuestion - 1].question}</Text>
        <TouchableOpacity
          key="flip"
          onPress={this.flipCard}
        >
          <Text> Flip </Text>
        </TouchableOpacity>
        {flipped &&
        <Fragment>
          <TouchableOpacity
            onPress={this.tallyCorrect}
            >
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.tallyIncorrect}
            >
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </Fragment>
      }
      </View>
      )
    }
  }
  const styles = StyleSheet.create({
    item: {

    }
  })
 export default Questions
