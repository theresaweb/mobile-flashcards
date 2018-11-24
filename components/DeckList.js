import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../actions'
import { AppLoading} from 'expo'
import Deck from './Deck'
import DeckCard from './DeckCard'

class DeckList extends Component {
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
    const { decks, navigation } = this.props
    const {navigate} = navigation
    const { ready } = this.state
     if (ready === false) {
      return <Text>Loading...</Text>
    }
    return (
      decks.map(function(deck, index) {
        const thisDeck = [deck][0]
         return (
          <View key={index} style={{ marginTop: 20}}>
            <TouchableOpacity
              onPress={() => navigate(
                'Deck',
                { deck: thisDeck }
                )}
                >
              <DeckCard  deck={thisDeck}/>
            </TouchableOpacity>
        </View>
        )
       })
     )
  }
}
const styles = StyleSheet.create({
  item: {

  }
})
function mapStateToProps (decks) {
  const allDecks = decks.decks
  console.log("allDecks",allDecks)
  var decksArr = Object.keys(allDecks).map(function(key) {
    return [allDecks[key]];
  });
 return {
   decks: decksArr
 }
}
export default connect(mapStateToProps)(DeckList)
