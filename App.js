import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import MainNavigator from './components/MainNavigator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Constants } from 'expo'
import { setLocalNotification } from './utils/helpers'

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
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <Text style={{ margin: 30}}></Text>
           {/*<UdaciStatusBar backgroundColor={purple} barStyle="light-content" />*/}
           <MainNavigator />
        </View>
      </Provider>
    );
  }
}
