import React from 'react'
import { View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
//import { setLocalNotification } from './utils/helpers'
import middleware from './middleware'
import MainNavigator from './components/MainNavigator'

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
           {/*<UdaciStatusBar backgroundColor={purple} barStyle="light-content" />*/}
           <MainNavigator />
      </Provider>
    );
  }
}
