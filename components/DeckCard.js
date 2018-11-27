import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckCard extends Component {

  render() {
    const deck = this.props.deck
    return (
        <View>
          <Text>Title: {deck.title}</Text>
          <Text>{deck.questions.length} card(s)</Text>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    item: {

    }
  })
 export default DeckCard
