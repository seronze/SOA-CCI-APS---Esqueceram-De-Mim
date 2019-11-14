import React, {Component} from 'react';
import { View,
    TextInput,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Style';

export default class Menu extends Component{
    constructor(props) {

        super(props)
        this.state = { }
    
        this.logout = this.logout.bind(this);
        this.map = this.map.bind(this);
    
      }
      map(){
        let varNome =  this.props.navigation.state.params.varNome ;
        let varEmail =  this.props.navigation.state.params.varEmail ;
        this.props.navigation.navigate('Maps', {varNome,varEmail});
      }

      logout(){
          this.props.navigation.navigate('HomeScreen')
      }

render(){
    
    
    
  return (
  <View style={styles.tela} > 
    <View style={styles.cabecalho}></View>  
    <ScrollView style={styles.container}>

        

        <View style={styles.contentImage} >
            <Image style={styles.imageLogo} source={require('../assets/Logo.png')}/>
        </View>

        <Text style={styles.tittle2}> Bem-Vindo { this.props.navigation.state.params.varNome}</Text>

        <View style={styles.contentTittle}>
            <Text style={styles.tittle}> DISPOSITIVOS </Text>
        </View>

        <View style={styles.contentView}/>
        

        <TouchableOpacity style={styles.button} onPress={this.map}>
            <Ionicons style={styles.icon} name="ios-log-in" size={25}></Ionicons>   
            <Text style={styles.textButton}>Pulseira de { this.props.navigation.state.params.varNome} </Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonExit} onPress={this.logout}>
            <Ionicons name="ios-close-circle-outline" size={25} color="white"></Ionicons>
            <Text style={styles.textButtonExit}>DESCONECTAR</Text>
        </TouchableOpacity>

    
    </ScrollView>
  </View>  
  
    );
  }
}

