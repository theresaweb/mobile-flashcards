import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Deck from './Deck'
import DeckCard from './DeckCard'

class DeckList extends Component {
  state = {
    ready: false,
  }
  render()
    {
      console.log("this.props is decklist",this.props)
    const { decks, navigation } = this.props
    return (
      decks.map(function(deck, index) {
        console.log("deck in decklist", deck)
        const thisDeck = deck[0]
        console.log("thisDeck in decklist", thisDeck)
         return (
          <View key={index}>
            <TouchableOpacity
              onPress={() => navigation.navigate(
                'Deck',
                { deck: thisDeck }
                )}
                >
              <DeckCard deck={thisDeck} />
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
export default DeckList
