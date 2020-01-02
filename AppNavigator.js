import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MainScreen from './screens/MainScreen';
import AboutScreen from './screens/AboutScreen';
import MapScreen from './screens/MapScreen';
import ServiceList from './screens/ServiceList';
import SkodaTypesScreen from './screens/SkodaTypesScreen';
import AddServiceScreen from './screens/AddServiceScreen';
import { getCurrentFrame } from 'expo/build/AR';
import EditServiceScreen from './screens/EditServiceScreen';
import ContactScreen from './screens/ContactScreen';
import CounterScreen from './screens/CounterScreen';


const StackNavigator = createStackNavigator({
    Main : MainScreen,
    Add : AddServiceScreen,
    Contact:{ screen: ContactScreen, navigationOptions:{title:'CONTACTS',headerStyle:{backgroundColor:'#00800D'},headerTintColor:'white'}},
    Edit : {screen: EditServiceScreen,
        navigationOptions: {
            header: null
        }
    },
    //List : ServiceList,
    },{
        navigationOptions:{
            /*headerMode:'none',*/
            
        }
  }, {
    initialRouteName: 'Main',
  });
  


const TabNavigator = createBottomTabNavigator({
    About: {
        screen: AboutScreen,
        navigationOptions:{
            tabBarLabel:'About',
            tabBarIcon:({tintColor}) => (<Icon color={tintColor} name={'readme'} size={20}/>),
            header:{
                title:'My title',
                visible:true
            }

        }
    },
    Map:{
        screen: MapScreen,
        navigationOptions:{
            tabBarLabel:('Map'),
            tabBarIcon:({tintColor}) => (<Icon color={tintColor} name={'map-marked'} size={20}/>)
        }
    },
    Skoda:{
        screen:SkodaTypesScreen,
        navigationOptions:{
            tabBarLabel:'Types',
            tabBarIcon:({tintColor}) => (<Icon color={tintColor} name={'car'} size={20}/>)
        }
    },
    Service:{
        screen: ServiceList,
        navigationOptions:{
            tabBarLabel:'Services',
            tabBarIcon:({tintColor}) => (<Icon color={tintColor} name={'cogs'} size={20}/>)
        }
    },
    Redux:{
        screen: CounterScreen,
        navigationOptions:{
            tabBarLabel:'Counter',
            tabBarIcon:({tintColor}) => (<Icon color={tintColor} name={'calculator'} size={20}/>)
        }
    },
},
{
    order: ['About','Map','Skoda','Redux','Service'],
    tabBarOptions:{
        activeTintColor: '#808080',
        inactiveTintColor: '#fff',
        showIcon : true,
        style:{
            backgroundColor:'black'
        }
        
    }
}
);


const AppNavigator = createSwitchNavigator({
    Stack: StackNavigator,
    Tab: TabNavigator,
    },{
    initialRouteName: 'Stack',
})

  export default createAppContainer(AppNavigator);

