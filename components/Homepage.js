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
    <View style={{ marginTop: 20}}>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.push('AddDeck')}
          >
        <Text>Add a new deck</Text>
      </TouchableOpacity>
      <DeckList decks={decks} navigation={this.props.navigation} />
    </View>
     )
  }
}
const styles = StyleSheet.create({
  item: {

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
