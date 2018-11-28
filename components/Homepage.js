import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../actions'
import DeckList from './DeckList'

class Homepage extends Component {
  state = {
    ready: false,
  }
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getDecks())
    if(this.props.decks) {
      this.setState(() => ({ready: true}))
    }
  }
  render()
    {
    const { decks } = this.props
    const { ready } = this.state
    if (ready === false) {
      return <Text>Loading...</Text>
    }
    return (
    <View style={styles.view}>
      <DeckList decks={decks} navigation={this.props.navigation} />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          this.props.navigation.push('AddDeck')}
          >
        <Text>Add a new deck</Text>
      </TouchableOpacity>
    </View>
     )
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
  },
  button: {
    color: 'black',
    backgroundColor: 'blue',
    padding: 20,
    margin: 20,
  }
})
function mapStateToProps (decks) {
  let allDecks = {}
  let decksArr = []
  if (decks.decks) {
    allDecks = decks.decks
    decksArr = Object.keys(allDecks).map(function(key) {
      return [allDecks[key]];
    });
  }
 return {
   decks: decksArr.length ? decksArr : {}
 }
}
export default connect(mapStateToProps)(Homepage)
