import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckCard extends Component {

  render() {
    const deck = this.props.deck
    return (
        <View>
          <Text>Title: {deck[0].title}</Text>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    item: {

    }
  })
 export default DeckCard
