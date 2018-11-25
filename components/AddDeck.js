import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

class AddDeck extends Component {
  state = {
   title: ''
  }
  submit = () => {
    const { dispatch } = this.props
    const newDeck  = {title: this.state.title, questions: []}
    dispatch(addDeck(newDeck))
    this.setState(() => ({ deck: {}, title: '' }))
    this.toHome()
     //clearLocalNotification()
       //.then(setLocalNotification)
  }
  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddDeck'}))
  }
  render() {
    return (
      <View style={{ marginTop: 20}}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <TouchableOpacity
          onPress={this.submit}>
            <Text>Add Deck</Text>
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
