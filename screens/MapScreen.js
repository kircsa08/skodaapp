import React from 'react';
import MapView from 'react-native-maps';

import {
    Button,StyleSheet,Text,View, Dimensions
} from 'react-native';


class MapScreen extends React.Component{

    render(){
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            },
            mapStyle: {
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            },
          });

       return(
        <View style={styles.container}>
            <MapView style={styles.mapStyle} />
        </View>
        )
                
    }
}
export default MapScreen;