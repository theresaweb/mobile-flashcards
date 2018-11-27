import React, { Component } from 'react'
import { Text, Animated, StyleSheet } from 'react-native'

class FadeAlert extends Component {
  state = {
   fadeAnim: new Animated.Value(1)
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
        duration: 10000,
      }
    ).start();
  }
  render() {
    let { fadeAnim } = this.state
    return (
           <Animated.Text
             style={{
                 ...this.props.style,
                 opacity: fadeAnim,
               }}
           >
           {this.props.alert}
           </Animated.Text>
    )}
  }
  const styles = StyleSheet.create({
    item: {

    }
  })
export default FadeAlert
