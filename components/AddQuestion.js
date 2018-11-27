import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { updateDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

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
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <Text>Answer:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <TouchableOpacity
          onPress={this.submit}>
            <Text>Add Question</Text>
        </TouchableOpacity>
         {this.state.added && <Text>Question has been added}</Text>}
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
