import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'
import middleware from './middleware'
import MainNavigator from './components/MainNavigator'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
          <MainNavigator />
      </Provider>
    )
  }
}
