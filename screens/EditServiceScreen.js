import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { Container, Content, Text,View, Textarea, Form, Item, Label, Input, Button, Fab, Icon, } from 'native-base';
import db from '../db';
import {StyleSheet, Dimensions, TouchableOpacity, ImageBackground, Image, Animated} from 'react-native';
import { actions } from './ServiceSlice';



class EditServiceScreen extends React.Component {
  static navigationOptions = {
    title: 'Item details',
  }

  constructor(props) {
    super(props);
  }

  render() {

    const FadeInView = (props) => {
      const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
    
      React.useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 3000,
          }
        ).start();
      }, [])
    
      return (
        <Animated.View                 // Special animatable View
          style={{
            ...props.style,
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
          {props.children}
        </Animated.View>
      );
    }

    const { navigation } = this.props;

    const item = navigation.getParam('item', null);

    if (item === null) {
      navigation.goBack();
      return;
    }
    
    const styles = StyleSheet.create({
      bg:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:'60%',
        width:'100%',
        marginTop:50,
      },
      box:{
        marginTop:'35%',
        borderWidth:2,
        borderColor:'#808080',
        width:'90%',
        alignSelf:'center',
        backgroundColor:'transparent',
        padding:'1%',
        shadowColor:'black',
        shadowOpacity:0.8,
        shadowOffset:{width:10,height:10}
      },
      title:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:'10%',
        backgroundColor:'#00800D',
        color:'white',
        padding:'1%'
      },
      container:{
        width:Dimensions.get('window').width,
        backgroundColor:'#f2f2f2',
        flex:1
      },
      description:{
        fontSize:22,
        fontWeight:'bold',
      },

    });

    return (
      <Container style={styles.container}>
        <Image source={require('.././bg/skodaservice.png')} style={{ marginTop:'10%',alignSelf:'center' ,width:'70%', height:'30%', resizeMode:'stretch'}}/>
        <Content stlye={{width:'100%'}}>
          <FadeInView style={styles.box}>
            <Text style={styles.title}
            >{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </FadeInView>
          <FadeInView>
            <Button
              backgroundColor='#00800D'
              width='90%'
              alignSelf='center'
              marginTop='1%'
              onPress={() => {
                this.props.navigation.navigate('Service');
              }}
            ><Text>BACK</Text>
            </Button>
            </FadeInView>
        </Content>
      </Container>
    );
  }
}

export default EditServiceScreen;