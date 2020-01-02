import React from 'react';
import { 
  StyleSheet,
  View,
  Button,
} from 'react-native';
import { Card, Title } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter, { counter } from "./Counter";

const store = createStore(counter);
class CounterScreen extends React.Component{
    render(){
        return(
            <Provider store = {store}>
                <Counter/>
            </Provider>
        );
    }
}

export default CounterScreen;