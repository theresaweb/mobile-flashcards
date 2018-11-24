import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import { submitEntry } from '../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

class AddDeck extends Component {
  state = {
   deck: {},
   title: 'Deck Title'
  }
  submit = () => {
    const key = this.state.title
    const newDeck = {}
    newDeck[key] = {title: this.state.title}
    console.log("newDeck",newDeck)
    this.props.dispatch(addDeck(newDeck))
    this.setState(() => ({ deck: {}, title: '' }))
    this.toHome()
    submitEntry({ newDeck })
     //clearLocalNotification()
       //.then(setLocalNotification)
  }
  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddDeck'}))
  }
  render() {
    return (
      <View style={{ marginTop: 20}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <Text>{this.state.title}</Text>
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
  console.log("the decks store",decks)
  const allDecks = decks.decks
    return {
     decks: allDecks
   }
 }
export default connect(mapStateToProps)(AddDeck)
