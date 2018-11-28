import React, { Component } from 'react'
import { Text, Animated } from 'react-native'

class FadeAlert extends Component {
  state = {
   fadeAnim: new Animated.Value(.6)
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
        duration: 6000,
      }
    ).start()
  }
  render() {
    let { fadeAnim, height } = this.state
    return (
           <Animated.Text
             style={{
                 ...this.props.style,
                 opacity: fadeAnim,
                 backgroundColor: 'rgb(0,217,0)',
                 padding: 5,
                 margin: 20
               }}
           >
           {this.props.alert}
           </Animated.Text>
    )}
  }
export default FadeAlert
