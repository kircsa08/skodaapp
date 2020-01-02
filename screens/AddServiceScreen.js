import React from 'react';
import { connect } from "react-redux";
import { Container, Content, Text, Textarea, Form, Item, Label, Input, Button, View } from 'native-base';
import {Image, Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import { actions } from './ServiceSlice';
import db from '../db';
import { createAppContainer, createSwitchNavigator, withOrientation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

class AddServiceScreen extends React.Component {
  static navigationOptions = {
    header:null
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
  }

  render() {
    const { saveItem, navigation } = this.props;

    const styles = StyleSheet.create({
      pic:{
        width:'%',
      }
    });

    return (
      <Container>
        <Content padder>
          <Form style={{alignItems:'center', justifyContent:'center'}}>
          <Image source={require('.././bg/newservice.pn.png')} style={{width:'30%',position:'absolute',top:'5%',resizeMode:'center'}}/>
          <View style={{marginTop:'70%', width:'100%'}}>
            <Item floatingLabel style={{width:WIDTH}}>
              <Label>Title</Label>
              <Input onChangeText={(value) => this.setState({ title: value })} />
            </Item>
            <Textarea
              width='100%'
              rowSpan={5}
              bordered
              placeholder="Description"
              onChangeText={(value) => this.setState({ description: value })}
            />
            </View>
          </Form>
          <Button
            style={{ marginTop: 10, justifyContent: 'center', backgroundColor:'#00800D'}}
            onPress={() => {
              const { title, description } = this.state;
              if (title !== '') {
                db.saveItem({
                  title,
                  description,
                }, () => {
                  this.props.navigation.navigate('Service');
                });
              }
            }}
          >
            <Text>Add</Text>
          </Button>
          <Button
            style={{marginTop: 10, justifyContent: 'center', backgroundColor:'#cc0000'}}
            onPress = {() => {
              this.props.navigation.navigate('Service');
            }}
          >
            <Text>Cancel</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  saveItem: actions.saveItem,
};

export default AddServiceScreen;