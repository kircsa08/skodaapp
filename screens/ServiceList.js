import React from 'react';

import { createAppContainer, createSwitchNavigator, withOrientation, NavigationEvents } from 'react-navigation';
import {
    StyleSheet,Text, View, Button, TouchableOpacity, ImageBackground, 
} from 'react-native';
import { Container, Content, Segment, Fab, Icon, ListItem, CheckBox, Body, ActionSheet } from 'native-base';
import { connect } from 'react-redux';
import {NavigationElements} from 'react-navigation';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import db from '../db';
import { actions } from './ServiceSlice';
import bg from '.././bg/mechanic.png';


import AddServiceScreen from './AddServiceScreen';
import { ButtonGroup } from 'react-native-elements';

class ServiceList extends React.Component {

    static navigationOptions = {
        title:'All items',
    }

    static defaultProps = {
        items: [],
    }

    toggleItem = (id, value) => {
        db.updateItemState(id, value, this.loadItems);
    }

    loadItems = () =>{
        const { itemsLoaded,currentFilter } = this.props;
        if(currentFilter === 'ALL'){
            db.loadAllItems(itemsLoaded);
            console.log(itemsLoaded);
        }
        if(currentFilter === 'ACTIVE'){
            db.loadActiveItems(itemsLoaded);
        }
        if(currentFilter === 'DONE'){
            db.loadDoneItems(itemsLoaded);
        }
    }

    renderItems = () => {

        const styles = StyleSheet.create({
            box:{
                fontWeight:'bold',
                backgroundColor:'#00800D',
                borderColor:'white',
                marginLeft:'2%',                
            }
        });
        const { items, navigation } = this.props;
        return items.map((item) =>(
            <ListItem key = {item.id} style={{backgroundColor:'grey', opacity:0.9, justifyContent:'center', alignSelf:'center',marginRight:'5%'}}>
                <CheckBox style={styles.box}
                onPress={()=>{
                    this.toggleItem(item.id, item.done === 1 ? 0 : 1);
                }}
                checked={item.done === 1}
                />
                <Body>
                    <TouchableOpacity
                    onPress={() =>{
                        navigation.navigate('Edit',{item})
                    }}
                    >
                        <Text style={{color:'white', marginLeft:'2%', fontWeight:'bold'}}>{item.title}</Text>
                    </TouchableOpacity>
                </Body>
            </ListItem>
        ))
    }

    componentDidUpdate(prevProps){
        const {currentFilter} = this.props;

        if(prevProps.currentFilter !== currentFilter){
            this.loadItems();
        }
    }

    render(){
        const styles = StyleSheet.create({
            segmentM:{
                justifyContent:"center",
                alignItems:"center",
                fontWeight:'bold',
                marginBottom:3
            },
            buttons:{
                backgroundColor:'red',
                justifyContent:"center",
                alignItems:"center",
            },
            container:{
                fontWeight:'bold',
                color:'#00800D'
            },
            buttonContainer:{
                flex: 1,
                marginTop:'8%',
                marginBottom:'5%',              
            }
        });
        const { navigation, filterChanged, currentFilter} = this.props;
        
        return (
            <Container>
        <ImageBackground source = {bg} style={{flex:1, width:'100%'}}>
                <Content style = {styles.buttonContainer}>
                    <View style = {styles.segmentM}>
                            <Button
                            first
                            color="#00800D"
                            title="All"
                            active = {currentFilter === 'ALL'}
                            onPress={() => filterChanged('ALL')}
                            ></Button>
                        </View>
                        <View style = {styles.segmentM}>
                        <Button
                        color="#00800D"
                        title="In Progress"
                        active = {currentFilter==='ACTIVE'}
                        onPress ={() => filterChanged('ACTIVE')}
                        ></Button>
                        </View>
                        <View style = {styles.segmentM}>
                        <Button
                        last
                        color="#00800D"
                        title="Done"
                        /*last*/
                        active = {currentFilter === 'DONE'}
                        onPress = {() => filterChanged('DONE')}
                        ></Button>
                        </View>
                    {this.renderItems()}
                </Content>
                <View>
                    <Fab
                    style={{backgroundColor:'#00800D'}}
                    position="bottomRight"
                    onPress={() => navigation.navigate('Add')}
                    >
                    <Icon name='add'/>
                    </Fab>
                </View>
                <NavigationEvents
                style={{backgroundColor:'white'}}
                onWillFocus = {() => {
                    this.loadItems();
                }}/>
            </ImageBackground>
            </Container>
        );
    }
}
const mapStateProps = (state) =>({
    items: state.todos,
    currentFilter : state.filter
});

const mapDispatchtoProps = {
    itemsLoaded : actions.itemsLoaded,
    filterChanged : actions.filterChanged,
}

export default connect(
    mapStateProps,
    mapDispatchtoProps,
)(ServiceList);