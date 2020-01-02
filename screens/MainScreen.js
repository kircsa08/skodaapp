import React from 'react';
import bg from '.././bg/bgpic.png';
import {
    Button,StyleSheet,Text,View,ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { createAppContainer, createSwitchNavigator, withOrientation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import i18n from '../i18n';

class MainScreen extends React.Component{
    static navigationOptions ={
        header:null
    }
    render(){
        const styles = StyleSheet.create({
            bg:{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                height:'60%',
                width:'100%',
                marginTop:50,
            },
            welcome:{
                fontSize:35,
                color:'white',
                textAlign:'center',
                fontFamily:'sans-serif',
                marginTop:'115%',
                fontWeight:'bold',
                backgroundColor:'black',
                paddingRight:'14.9%',
                paddingLeft:'14.9%',
                textAlignVertical:'center',
                marginBottom:'10%'
            }
        });
       return(
            <ImageBackground source={bg} style={styles.bg}>
                <View>
                    <Text style={styles.welcome}>
                        {i18n.t('welcome')}
                    </Text>
                </View>
                <View style={[{width: "90%", poistion:'relative' , flex:1, justifyContent:'flex-end', marginBottom:50}]}>
                    <Button 
                    title={i18n.t('enter')} color="#00800D" height='50'syle={{}} onPress={() =>{
                        this.props.navigation.navigate('About')
                    }}/>
                </View>
                <Icon color="#0066ff" name={'phone-square'} size={40} style={{alignSelf:'center'}}
                />
                <Text style={{marginBottom:10, color:"#0066ff"}} onPress={() => {
                    this.props.navigation.navigate('Contact')
                }}>{i18n.t('call')}</Text>
            </ImageBackground>
        );
    }
}

export default MainScreen;