import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, StatusBar,ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

export default class Localiza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinate: {
        latitude: 0,
        longitude: 0,
      },
      locationChosen: false,
      sending: "Start"
    }

    this.voltar = this.voltar.bind(this);
  }

  voltar(){
    // let varNome =  this.props.navigation.state.params.varNome ;
    // let varEmail =  this.props.navigation.state.params.varEmail ;
    this.props.navigation.navigate('HomeScreen');
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.sendCoord(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Chama a função que envia as coordenadas para o banco se 'locationChosen' for true
  sendCoord = () => {
    if(this.state.locationChosen) {
      this.fetchNewCoord();

      
    }
    
  }

  // Chama a função que pega a localização atual do celular, depois manda uma requisição POST para o banco com essa localização e o 'ID' do dispositivo
  fetchNewCoord = () => {
    this.getLocationHandler();

    fetch('http://0.0.0.0/aps_server/send_coord.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({

      latitude: this.state.coordinate.latitude,
      longitude: this.state.coordinate.longitude,
      deviceId: "A1A1A1",
    })
    })
      .then(response => response.text())
      .then((responseJson) => {

        alert(responseJson);
       });
     
  }

  // Sempre que o botão for clicado inverte o valor de 'locationChosen'
  buttonActionHandler = () => {
    if(this.state.locationChosen){
      this.setState({locationChosen: false, sending: "ATIVAR"});
    } 
    else {
      this.setState({locationChosen: true, sending: "DESATIVAR"});
    }
    
  }

  // Pega as coordenadas atuais do celular caso o gps esteja ativo
  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
          newCoords: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          
        }
      };
      //alert(coordsEvent.newCoords.latitude)
      //this.pickLocationHandler(coordsEvent);
      this.setState({
        coordinate: {
          latitude: coordsEvent.newCoords.latitude,
          longitude: coordsEvent.newCoords.longitude,
        }
      });

      //alert(this.state.coordinate.latitude)

    },
      err => {
        console.log(err);
        alert("Fetching the position failed, please enable GPS manually!");
      });
    }

  render() {

    return (

     

      <View style={styles.tela} > 
      <View style={styles.cabecalho}></View>         
      <ScrollView style={styles.container}> 

          <TouchableOpacity style={styles.buttonVoltar} onPress={(this.voltar)}>
              <Ionicons name="ios-arrow-back" size={20} color="white"></Ionicons>
              <Text style={styles.voltar}>Voltar</Text>
          </TouchableOpacity>   

          <View style={styles.contentTittle}>
              <Text style={styles.tittle}>PRESSIONE PARA ACIONAR </Text>
              <Text style={styles.tittle}>O LOCALIZADOR </Text> 
          </View>

          <View style={styles.contentSubtittle}>
              <Text style={styles.subtittle}>Ao acionar o localizador sera ativado a funcão</Text>
              <Text style={styles.subtittle}>de rastreamento vinculado a sua conta sendo</Text> 
              <Text style={styles.subtittle}>possivel monitorar os passos pelo mapa</Text> 
          </View>
              
          

        <View style={styles.button}>
        <TouchableOpacity onPress={this.buttonActionHandler}>
          <Text style={styles.textButton}>{this.state.sending}</Text>
        </TouchableOpacity>
        </View>         

      </ScrollView>
  </View> 
    );
  }
}
   
const styles = StyleSheet.create({
  
tela:{
  flex: 1,  
  },

container:{
  flex: 1,
  backgroundColor:"#FFFFFF",
  },

cabecalho:{
  width:"100%",
  height:20,
  backgroundColor:"#6666FF",
  },

contentTittle:{
  alignItems:"center",
  justifyContent:'center',
  paddingLeft:10,
  paddingRight:10,
  paddingTop:50,
},

tittle:{
  
  fontSize:20,
  color:"#002F9D",
  fontWeight:"bold",
  alignSelf:"center",
},

contentSubtittle:{
  alignItems:"center",
  justifyContent:'center',
  paddingTop:30,
},

subtittle:{
  fontSize:15,
  color:"#A9A9A9",
  justifyContent:'center',
  paddingLeft:30,
  paddingRight:30,
},

button:{
  height:40,
  width:300,
  textAlign:"center",
  alignSelf:'center',
  marginTop:50,
  paddingTop:10,
  backgroundColor:"#6666FF",
  color:"#FFF",
  fontWeight:"bold",
  borderRadius:10,
  flex:1,
  flexDirection:"row",
  justifyContent:"center",
  },

textButton:{
  left:5,
  fontSize:15,
  textAlign:"center",
  color:"#FFF",
  },

buttonVoltar:{
  height:30,
  width:90,
  marginLeft:10,
  marginTop:15,
  paddingTop:5,
  paddingLeft:10,
  textAlign:"left",
  backgroundColor:"#D3D3D3",
  color:"#FFF",
  fontWeight:"bold",
  borderRadius:5,
  flex:1,
  flexDirection:"row",
  
  },
  
voltar:{
  marginLeft:10,  
  fontSize:15,
  textAlign:"center",
  color:"#FFF"
  },

});