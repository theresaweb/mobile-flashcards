import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers'
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
  restartQuiz = () => {
    this.setState({
      currQuestion: 1,
      flipped: false,
      numCorrect: 0,
      complete: false
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
  toDeck = () => {
    const { navigation } = this.props
    const deck = navigation.getParam('deck', null)
    const navigateAction = NavigationActions.navigate({
      routeName: 'Deck',
      params: {deck: deck},
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    const { navigation } = this.props
    const deck = navigation.getParam('deck', null)
    const { questions } = deck
    const { flipped } = this.state
    if (this.state.currQuestion > questions.length) {
      clearLocalNotification()
        .then(setLocalNotification)
      return (
        <View style={styles.view}>
          <Text style={styles.subTitle}>You're done!</Text>
          <Text style={styles.subTitle}>You got {this.state.numCorrect} correct out of {questions.length} questions</Text>
          <TouchableOpacity
            onPress={this.restartQuiz}>
              <Text style={styles.buttonQuiz}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.toDeck}>
              <Text style={styles.button}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }
     return (
      <View style={styles.view}>
        <Text style={styles.numQuestions}>Question {this.state.currQuestion}/{questions.length}</Text>
        <Text style={styles.quesAns}>{flipped ? questions[this.state.currQuestion -1].answer : questions[this.state.currQuestion - 1].question}</Text>
        {!flipped &&
        <TouchableOpacity
          onPress={this.flipCard}
        >
          <Text style={styles.buttonFlip}> Show Answer </Text>
        </TouchableOpacity>
        }
        {flipped &&
        <Fragment>
          <TouchableOpacity
            onPress={this.tallyCorrect}
            >
            <Text style={styles.buttonCorrect}>I was correct!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.tallyIncorrect}
            >
            <Text style={styles.buttonIncorrect}>I got it wrong :(</Text>
          </TouchableOpacity>
        </Fragment>
      }
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
    quesAns: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    numQuestions: {
      fontSize: 20,
      padding: 10,
      textAlign: 'left'
    },
    subTitle: {
      fontSize: 20,
      padding: 1,
      textAlign: 'left'
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
    },
    buttonFlip: {
      backgroundColor: 'rgb(0,144,255)',
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 40,
      marginRight: 40,
      padding: 20,
      textAlign: 'center'
    },
    buttonCorrect: {
      backgroundColor: 'rgb(0,217,0)',
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 40,
      marginRight: 40,
      padding: 20,
      textAlign: 'center'
    },
    buttonIncorrect: {
      backgroundColor: 'rgb(255,0,0)',
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 40,
      marginRight: 40,
      padding: 20,
      textAlign: 'center'
    }
  })
 export default Questions
