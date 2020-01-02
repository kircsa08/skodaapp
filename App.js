import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
/*import store from './store';*/
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import store from './store';
import db from './db';
import * as Font from 'expo-font';
import ReactDOM from 'react-dom';
import createStore from 'redux';



class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    isReady: false,
  };
}

async componentDidMount() {
  await Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });
  db.init();
  this.setState({isReady:true});
}


  render(){
    const {isReady} = this.state;
    if(!isReady){
      return <AppLoading/>;
    }
    return (
        <Provider store={store}>
          <AppNavigator/>
        </Provider>
    );
  }
}
/*const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
