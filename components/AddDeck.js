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
      <View>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <TouchableOpacity
          onPress={this.submit}>
            <Text style={styles.button}>Add Deck</Text>
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
    button: {
      backgroundColor: 'rgb(0,144,255)',
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
export default connect(mapStateToProps)(AddDeck)
