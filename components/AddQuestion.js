import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

class AddQuestion extends Component {
  state = {
   question: '',
   answer: ''
  }
  submit = () => {
    const { dispatch, deck } = this.props
    const newQuestion  = {question: this.state.question, answer: this.state.answer}
    dispatch(updateDeck(updatedDeck))
    this.setState(() => ({ question: '', answer: '' }))
    this.toDeck()
     //clearLocalNotification()
       //.then(setLocalNotification)
  }
  toDeck = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'Deck'}))
  }
  render() {
    return (
      <View style={{ marginTop: 20}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <TouchableOpacity
          onPress={this.submit}>
            <Text>Add Question</Text>
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
export default connect(mapStateToProps)(AddDeck)
