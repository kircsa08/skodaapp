import React from 'react';

import {
    Button,StyleSheet,Text,View,SafeAreaView, ScrollView, Image, Dimensions
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

class SkodaTypesScreen extends React.Component{

    render(){
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                width: WIDTH,
                height: HEIGHT,
              },
            typeOctavia:{
                flex:1,
                margin:0,
                width:WIDTH,
                justifyContent:'center',
                alignItems:'center'
            },
            carPic:{
                margin:0,
                padding:0,
                width:WIDTH,
                alignItems:'center',
                resizeMode:'center',
                position:'relative'
            },
            carTypeFont:{
                fontSize:40,
                paddingTop:'10%',
                fontWeight:'bold',
                textAlign:'center',
                color:'white',
                position:'absolute',
                top:'5%',

            },
            typeOctavia:{
                backgroundColor:'#b3b3b3',
                justifyContent:'center',
                alignItems:'center'
            },
            typeSuperb:{
                backgroundColor:'#00e64d',
                justifyContent:'center',
                alignItems:'center',
                height:'26%',
            },
            typeKodiak:{
                backgroundColor:'#6699ff',
                justifyContent:'center',
                alignItems:'center',
            },
            typekaroq:{
                backgroundColor:'#cccc00',
                justifyContent:'center',
                alignItems:'center',
                height:'35%',
                paddingBottom:'15%'
            }, 
            /*boxShadow:{
                shadowOffset: { width: 100, height: 10 },
                shadowColor: 'black',
                shadowOpacity:0.8,
                shadowRadius:10,
                elevation: 15,
            },*/
            parameters:{
                color:'white',
                fontSize:17,
                textAlign:'center',
                position:'absolute',
                top:330
                
            }
        });

       return(
        <View style={styles.container}>
                <ScrollView style={{height: HEIGHT}}>
                        <View style={[styles.typeOctavia]}>
                            <Text style={styles.carTypeFont}>SKODA OCTAVIA</Text>
                            <Image style={styles.carPic} source={require('.././types/octavia.png')}></Image>
                            <Text style={styles.parameters}>
                                {"Horsepower: 115 – 245 hp\nType of Four Wheel Drive: 4WD | AWD\nTop Speed: 200 – 250 km/h\n"}
                                {"Fuel Consumption NEDC:\nCity: 4.2 – 8.7\nHighway: 3.7 – 5.4\nCombined: 4 – 6.6"}
                            </Text>
                        </View>

                        <View style={styles.typeSuperb}>
                            <Text style={styles.carTypeFont}>SKODA SUPERB</Text>
                            <Image style={styles.carPic} source={require('.././types/superb.png')}></Image>
                            <Text style={styles.parameters}>
                                {"Horsepower: 105 – 280 hp\nType of Four Wheel Drive: 4WD | AWD\nTop Speed: 200 – 250 km/h\n"}
                                {"Fuel Consumption NEDC:\nCity: 4.4 – 14.7\nHighway: 3.6 – 7.4\nCombined: 0.4 – 10.1"}
                            </Text>
                        </View>

                        <View style={styles.typeKodiak}>
                            <Text style={styles.carTypeFont}>SKODA KODIAQ</Text>
                            <Image style={styles.carPic} source={require('.././types/kodiaq.png')}></Image>
                            <Text style={styles.parameters}>
                                {"Horsepower: 115 – 245 hp\nType of Four Wheel Drive: 4WD | AWD\nTop Speed: 200 – 250 km/h\n"}
                                {"Fuel Consumption NEDC:\nCity: 4.2 – 8.7\nHighway: 3.7 – 5.4\nCombined: 4 – 6.6"}
                            </Text>
                        </View>

                        <View style={styles.typekaroq}>
                            <Text style={styles.carTypeFont}>SKODA KAROQ</Text>
                            <Image style={styles.carPic} source={require('.././types/karoq.png')}></Image>
                            <Text style={styles.parameters}>
                                {"Horsepower: 105 – 280 hp\nType of Four Wheel Drive: 4WD | AWD\nTop Speed: 200 – 250 km/h\n"}
                                {"Fuel Consumption NEDC:\nCity: 4.4 – 14.7\nHighway: 3.6 – 7.4\nCombined: 0.4 – 10.1"}
                            </Text>
                        </View>
                </ScrollView>
        </View>
        )
                
    }
}
export default SkodaTypesScreen;