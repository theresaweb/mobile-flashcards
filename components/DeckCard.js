import React, { Component } from 'react'
import {
  Animated,
  Easing,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  } from 'react-native'
import { NavigationActions, withNavigation } from 'react-navigation'

class DeckCard extends Component {
  state = {
   backgroundColor: new Animated.Value(0)
  }
  toDeck = () => {
    const deck = this.props.deck
    const navigateAction = NavigationActions.navigate({
      routeName: 'Deck',
      params: {deck: deck},
    });
    this.props.navigation.dispatch(navigateAction);
  }
  cardClick = () => {
    Animated.sequence([
        Animated.timing(this.state.backgroundColor, {
            delay: 0,
            duration: 700,
            toValue: 1
        }),
        Animated.timing(this.state.backgroundColor, {
            delay: 200,
            duration: 50,
            toValue: 0
        })
    ]).start(() => this.toDeck())

  }
  render() {
    const backgroundColor = this.state.backgroundColor.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(255, 0, 0, 1)', 'rgba(255, 128, 0, .5)']
    });
    const deck = this.props.deck
    let AnimatedCard = Animated.createAnimatedComponent(TouchableOpacity);
    return (
        <AnimatedCard
          activeOpacity={1}
          style={[styles.card,{backgroundColor}]}
          onPress={this.cardClick.bind(this)}
          >
          <Text style={styles.text}>{deck.title} ({deck.questions.length})</Text>
        </AnimatedCard>
      )
    }
  }
  const styles = StyleSheet.create({
    card: {
      marginTop: 10,
      marginBottom: 10,
    },
    text: {
      fontSize: 30,
      padding: 10,
      textAlign: 'center'
    }
  })
 export default withNavigation(DeckCard)
