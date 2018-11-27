import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { updateDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

class AddDeck extends Component {
  static navigationOptions = ({ navigation }) => {
     return {
      title: 'New Deck'
    }
  }
  state = {
   deck: {},
   title: ''
  }
  submit = () => {
    const { title } = this.state
    const { dispatch } = this.props
    const newDeck  = {title: title, questions: []}
    dispatch(updateDeck(newDeck))
    this.setState(() => ({ deck: {}, title: '' }))
    this.toDeck(newDeck)
     //clearLocalNotification()
       //.then(setLocalNotification)
  }
  toDeck(newDeck) {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Deck',
      params: {deck: newDeck },
      action: NavigationActions.navigate({ routeName: 'Deck' }),
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
