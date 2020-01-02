import React from "react";
import { connect } from "react-redux";
import { 
    Text,
    View,
    Button,
    TouchableOpacity,
    Alert,
    StyleSheet,
    Dimensions
  } from 'react-native';
  import i18n from '../i18n';
  import { LinearGradient } from 'expo-linear-gradient';

const INCREMENT10 = "INCREMENT10";
const DECREMENT10 = "DECREMENT10";
const valu = "valu";

function incrementAction10() {
  return { type: INCREMENT10 };
}
function decrementAction10() {
  return { type: DECREMENT10 };
}

function incrementVal(val){
  return {  type: valu, 
            value: val};
}

export function counter(state = 0, action) {
      switch (action.type) {
        case INCREMENT10:
          return state + 10;
        case DECREMENT10:
          return state - 10;
        case valu:
          return state + parseInt(action.value);
        default:
          return state;
      }
}

const mapStateToProps = state => {
  return {
    counter: state
  };
};

const mapDispatchToProps = {
  increment10: incrementAction10,
  decrement10: decrementAction10,
  incrementVal: incrementVal
};

const Counter = props => {
  const { counter,  increment10, 
                    decrement10,
                    incrementVal
        } = props;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,                 
        alignItems: 'center',
        justifyContent: 'center',
      },
      btn:{
        fontSize:25
      } 
    });
  

  return (
    
    <View style={ styles.container }>
        <LinearGradient colors={['#00cc00','#33cc33','#009900']} 
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          
        }}>
          <View style={{marginTop:'65%'}}/>
      <Button color='black'onPress={() => increment10()} title={"+10"}/>
        <Text style={{textAlign: 'center', fontSize: 120, color:'white'}}>{counter}</Text>
      <Button color='black' onPress={() => decrement10()} title={"-10"}/>
      </LinearGradient>
    </View>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);