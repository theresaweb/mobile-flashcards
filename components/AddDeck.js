import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { updateDeck } from '../actions'
import { NavigationActions } from 'react-navigation'
import DeckList from './DeckList'

class AddDeck extends Component {
  state = {
   title: ''
  }
  submit = () => {
    console.log("submit", this.state.title)
    const { dispatch } = this.props
    const newDeck  = {title: this.state.title, questions: []}
    dispatch(updateDeck(newDeck))
    this.setState(() => ({ deck: {}, title: '' }))
    this.toHome()
     //clearLocalNotification()
       //.then(setLocalNotification)
  }
  toHome = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'DeckList',
      params: {},
    });
    this.props.navigation.dispatch(navigateAction);
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
