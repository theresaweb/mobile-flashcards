import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Question extends Component {
  state = {
    currQuestion: 0
  }
  render() {
    const { questions } = this.props
    numQuestions = questions.length
    const { currQuestion } = this.state
     return (
      <View>
        <Text>{numQuestions} Cards</Text>
        <Text>{currQuestion}</Text>
        <Text>{questions[currQuestion].question}</Text>
        <TouchableOpacity><Text>flip</Text></TouchableOpacity>
        <TouchableOpacity><Text>a correct button</Text></TouchableOpacity>
        <TouchableOpacity><Text>a incorrect button</Text></TouchableOpacity>
      </View>
      )
    }
  }
  const styles = StyleSheet.create({
    item: {

    }
  })
 export default Question
