import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Animated } from 'react-native'
import { connect } from 'react-redux'
import { updateDeck } from '../actions'
import { NavigationActions } from 'react-navigation'
import FadeAlert from './FadeAlert'

class AddQuestion extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
     return {
      title: deck.title
    }
  }
  state = {
   question: '',
   answer: '',
   added: false
  }
  submit = () => {
    const { navigation } = this.props
    const deck = navigation.getParam('deck', null)
    const { questions } = deck
    const { dispatch } = this.props
    const newQuestion  = {question: this.state.question, answer: this.state.answer}
    let  updatedDeck = {title: deck.title, questions: deck.questions}
    updatedDeck.questions.push(newQuestion)
    dispatch(updateDeck(updatedDeck))
    this.setState(() => ({ question: '', answer: '', added: true }))
     //clearLocalNotification()
       //.then(setLocalNotification)
  }
  toDeck = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Deck',
      params: {},
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          onPress={this.toDeck}>
            <Text style={styles.button}>Back to Deck</Text>
        </TouchableOpacity>
        {this.state.added && <FadeAlert alert={'Question has been added'} />}
        <Text style={styles.subTitle}>Question:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(question) => this.setState({question, added: false})}
          value={this.state.question}
        />
        <Text style={styles.subTitle}>Answer:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(answer) => this.setState({answer, added: false})}
          value={this.state.answer}
        />
        <TouchableOpacity
          onPress={this.submit}>
            <Text style={styles.buttonQuiz}>Add</Text>
        </TouchableOpacity>
        </View>
    )}
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
    }
  })
function mapStateToProps (decks) {
  const allDecks = decks.decks
    return {
     decks: allDecks
   }
 }
export default connect(mapStateToProps)(AddQuestion)
