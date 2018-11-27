import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { NavigationActions, withNavigation } from 'react-navigation'

class DeckCard extends Component {
  toDeck = () => {
    const deck = this.props.deck
    const navigateAction = NavigationActions.navigate({
      routeName: 'Deck',
      params: {deck: deck},
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    console.log("this.propsss",this.props)
    const deck = this.props.deck
    return (
        <Animated.View style={styles.deckBtn}>
          <TouchableOpacity
            onPress={this.toDeck} >

            <Text>Title: {deck.title}</Text>
            <Text>{deck.questions.length} card(s)</Text>
          </TouchableOpacity>
        </Animated.View>
      )
    }
  }
  const styles = StyleSheet.create({
    item: {

    }
  })
 export default withNavigation(DeckCard)
