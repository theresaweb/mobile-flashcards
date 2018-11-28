import React from 'react'
import { View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'
import middleware from './middleware'
import MainNavigator from './components/MainNavigator'
import { Notifications, Permissions } from 'expo'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
           <MainNavigator />
      </Provider>
    );
  }
}
