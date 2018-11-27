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
      <View style={{ marginTop: 20}}>
        <Text>Question:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question, added: false})}
          value={this.state.question}
        />
        <Text>Answer:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(answer) => this.setState({answer, added: false})}
          value={this.state.answer}
        />
        <TouchableOpacity
          onPress={this.submit}>
            <Text>Add Question</Text>
        </TouchableOpacity>
         {this.state.added && <FadeAlert alert={'Question has been added'} />}
         <TouchableOpacity
           onPress={this.toDeck}>
             <Text>Back to Deck</Text>
         </TouchableOpacity>
        </View>
    )}
  }
  const styles = StyleSheet.create({
    item: {

    }
  })
function mapStateToProps (decks) {
  const allDecks = decks.decks
    return {
     decks: allDecks
   }
 }
export default connect(mapStateToProps)(AddQuestion)
