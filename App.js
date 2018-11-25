import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import MainNavigator from './components/MainNavigator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Constants } from 'expo'
import { setLocalNotification } from './utils/helpers'
import middleware from './middleware'

{/*function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}*/}
export default class App extends React.Component {
  componentDidMount() {
    //setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex: 1}}>
           {/*<UdaciStatusBar backgroundColor={purple} barStyle="light-content" />*/}
           <MainNavigator />
        </View>
      </Provider>
    );
  }
}
