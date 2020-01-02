import React from 'react';
import { ListItem, CardItem } from 'react-native-elements';
import { createAppContainer, createSwitchNavigator, withOrientation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import i18n from '../i18n';

import {
    Button,StyleSheet,Text,View,SafeAreaView, ScrollView, Image, Content,Cover, Dimensions
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';



const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')



class AboutScreen extends React.Component{


    static navigationOptions ={
        header:{
            /*meg kéne jeleníteni valahogy he*/
        }
    }
    render(){
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                width: WIDTH,
                height: HEIGHT,
                paddingTop: 20,
                paddingBottom:5
              },
              card:{
                backgroundColor:'#115c00',
                width: WIDTH - 12,
                marginBottom: 10,
                shadowColor: "#404040",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0,
                shadowRadius: 10,
                
                elevation: 4,
              },
              title:{
                textAlign:'center',
                fontWeight:'bold',
                color:'white'

              },    
              articleText:{
                  fontSize:15,
                  textAlignVertical:'center',
                  textAlign:'center',
                  color:'#ccffcc',
                  margin:10,

              },
              city:{
                  fontSize:17.5,
                  fontWeight:'bold',
                  textAlign:'center',
                  textAlignVertical:'center',
                  margin:10,
                  backgroundColor: 'black',
                  color:'white'

              },
              bolder:{
                    fontWeight:'bold'
              },
              name:{
                  fontWeight:'bold',
                  fontSize:17.5,
                  color:'white',
                  textAlign:'center',
                  textAlignVertical:'center',

              },
              
        });

       return(
        <View style={styles.container}>
        <ScrollView style={{height: HEIGHT}}>
          <Card style={styles.card}>
            <Card.Content>
            <Title style={styles.title}>
                {i18n.t('card1t')}
            </Title>
            </Card.Content>
            <Card.Cover source={(require('.././images/firstmodel.png'))} />
            <Card.Content>
                <Text style={styles.articleText}>
                 {i18n.t('card1t2')}<Text style={styles.bolder}> Skoda 1101 </Text>{i18n.t('card1t3')}
                </Text>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
          <Title style={styles.title}>
                {i18n.t('card2t')}
            </Title>
            <Card.Content>
            <Text style={styles.city}>
                    Mladá Boleslav
                </Text>
            </Card.Content>
            <Card.Cover source={(require('.././images/warehouse.png'))} />
            <Card.Content>
                <Text style={styles.articleText}>
                {i18n.t('card2t2')}<Text style={styles.bolder}>FABIA, KAMIQ, SCALA, KAROQ</Text>{i18n.t('card2t3')} 
                <Text style={styles.bolder}>OCTAVIA.</Text>
                </Text>
            </Card.Content>

            <Card.Content>
                <Text style={styles.city}>
                    Kvasiny
                </Text>
            </Card.Content>
            <Card.Cover source={(require('.././images/warehouse2.png'))} />
            <Card.Content>
                <Text style={styles.articleText}>
                {i18n.t('card3t')} 
                <Text style={styles.bolder}>SUPERB</Text>{i18n.t('card3t1')} 
                <Text style={styles.bolder}>KAROQ</Text> {i18n.t('card3t2')} <Text style={styles.bolder}>KODIAQ</Text>. 
                </Text>
            </Card.Content>

            <Card.Content>
                <Text style={styles.city}>
                    Vrchlabí
                </Text>
            </Card.Content>
            <Card.Cover source={(require('.././images/warehouse3.jpg'))} />
            <Card.Content>
                <Text style={styles.articleText}>
                 {i18n.t('card4t')}<Text style={styles.bolder}>VW Group.</Text> 
                </Text>
            </Card.Content>
          </Card>
          
        
          <Card style={styles.card} >
            <Card.Content>
              <Title style={styles.title}>{i18n.t('card5t')}</Title>
            </Card.Content>
            <Card.Cover source={(require('.././images/chairman.jpg'))} />
            <Card.Content>
                <Text style={styles.name}>
                    Bernard Maiher
                </Text>
                <Text style={styles.articleText}>
                    {i18n.t('card5t1')}
                </Text>
            </Card.Content>

            <Card.Cover source={(require('.././images/management.jpg'))} />
            <Card.Content>
                <Text style={styles.name}>
                    Alain Favey
                </Text>
                <Text style={styles.articleText}>
                {i18n.t('card5t2')}
                </Text>
            </Card.Content>

            <Card.Cover source={(require('.././images/it.jpg'))} />
            <Card.Content>
                <Text style={styles.name}>
                    Kalus-Dieter Schrümann
                </Text>
                <Text style={styles.articleText}>
                {i18n.t('card5t3')}
                </Text>
            </Card.Content>
          </Card>
            
        </ScrollView>
      </View>
        )
                
    }
}
export default AboutScreen;

/*
 <Card 
                    title='FIRST MODEL'
                    image={require('.././images/firstmodel.png')}
                    style={styles.card}
                    >
                    <Text>The first model was the Skoda 1101 which left the company in 1905.</Text>
                </Card>
                
                <Card 
                    title='FIRST MODEL'
                    image={require('.././images/firstmodel.png')}
                    style={styles.card}>
                    <Text>The first model was the Skoda 1101 which left the company in 1905.</Text>
                </Card>
                <Card 
                    title='FIRST MODEL'
                    image={require('.././images/firstmodel.png')}
                    style={styles.card}>
                    <Text>The first model was the Skoda 1101 which left the company in 1905.</Text>
                </Card>*/