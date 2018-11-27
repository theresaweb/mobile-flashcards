import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import DeckCard from './DeckCard'

class DeckList extends Component {
  state = {
    ready: false,
  }
  selectDeckx = () => {
    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.04}),
      Animated.spring(bounceValue, { toValue: 1, friction: 4})
    ]).start()
  }
  render()
    {
    const { decks } = this.props
    return (
      decks.map(function(deck, index) {
        const thisDeck = deck[0]
         return (
          <View key={index}>
            <DeckCard deck={thisDeck} />
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
