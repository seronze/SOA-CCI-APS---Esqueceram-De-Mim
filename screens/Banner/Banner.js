import React, {Component} from 'react';
import { View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from './Style';
import { Ionicons } from '@expo/vector-icons';


export default class Banner extends Component{

  
render(){
    return(
        

    <View style={styles.tela} > 
        <View style={styles.cabecalho}></View>         
        <ScrollView style={styles.container}> 
            <View style={styles.banner}>

            </View>
            
        </ScrollView>
    </View> 
           
        );
    }
} 


