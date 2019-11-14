import React, {Component} from 'react';
import { View,
    Animated,
    Text,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Circle } from 'react-native-maps';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import styles from './Style';
import { isPointWithinRadius } from 'geolib';

export default class Maps extends Component{
  
  constructor(props) {
    super(props);
    this.state = {

      endereco:'Rua: José Moscardini - Nossa sra. Fatima',
      cidade:'Hortolândia-SP',
      pulsera:'PULSEIRA DE MATHEUS ',
      
      markers: 
        {
          coordinate: {
            latitude: -22.90110,
            longitude: -47.05787,
          }
        }
      ,
      region: {
        latitude: -22.90110,
        longitude: -47.05787,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      locationChosen: false,
      startlocate: false,
      data: '',
      check: "DENTRO"
      
    }

    this.voltar = this.voltar.bind(this);

  }

  voltar(){
    let varNome =  this.props.navigation.state.params.varNome ;
    let varEmail =  this.props.navigation.state.params.varEmail ;
    this.props.navigation.navigate('Menu',{varNome,varEmail});
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.fetchNewCoord(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeMarker = () => {

      if(this.state.startlocate) {
  
        if(this.state.region.latitude != 0
          && this.state.region.longitude != 0) {
            this.setState({
              region: {
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              },
              locationChosen: true
            }, () => {
              this.map.animateToRegion({
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              });
            })
             
            let check = isPointWithinRadius(this.state.region, this.state.markers.coordinate, 20); 
            if(!check){
              this.setState({check: "FORA"})
            }else {
              this.setState({check: "DENTRO"})
            }
            
          }
          else {
             
            this.setState({startlocate: false})

            alert("Coordenadas do localizador ainda não foram definidas");
          }
          
      }

  }

  fetchNewCoord = () => {

      fetch('http://0.0.0.0/aps_server/get_coord.php', {
      
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  
          name: this.props.navigation.state.params.varName,
          email: this.props.navigation.state.params.varEmail
          
        })
      })
      .then(response => response.text())
      .then((raspCoords) => {

         this.setState({
           region: {
             latitude: parseFloat(raspCoords.split("&")[0]),
             longitude: parseFloat(raspCoords.split("&")[1]),
             latitudeDelta: 0.005,
             longitudeDelta: 0.005,
           }
         }, () => {this.changeMarker()});
       });
   
     
  }


  buttonActionHandler = () => {
    this.setState({startlocate: true}, () => {
      this.fetchNewCoord()
    });
  }

  render() {

    let marker = null;
    let circle = null; 

    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.region} />;
      circle = <Circle center={
        {latitude: this.state.region.latitude,
        longitude: this.state.markers.region.longitude,}
                        } 
                        radius={20}
               />
    }

//---------------ANIMAÇÃO ---------------------
    
let offset = 0;

const translateY = new Animated.Value(0);
const animatedEvent = Animated.event(
    [
        {
            nativeEvent:{
                translationY:translateY,
            },
        },
    ],
    {useNativeDriver:true},
);

function onHandlerStateChanged(event) {

   if(event.nativeEvent.oldState == State.ACTIVE){
       let opened = false;
       const {translationY} = event.nativeEvent;

       offset += translationY;

       if(translationY >= 100){
            opened = true;
      
        }else{
            translateY.setValue(offset);
            translateY.setOffset(0);
            offset = 0;
        }

        Animated.timing(translateY,{
            toValue:opened ? 360 : 0,
            duration:200,
            useNativeDriver:true,
 
        }).start(() => {
            offset = opened ? 360 : 0,
            translateY.setOffset(offset);
            translateY.setValue(0); 
        });       
   }     
}

return(
    /* Container da Tela */
    <View style={styles.tela}>  
        <View style={styles.cabecalho}/>         
        <View style={styles.container}>  

            <View style={styles.moreBar}> 
                <TouchableOpacity style={styles.ButtomMoreBar} onPress={(this.voltar)}>
                    <Ionicons name="ios-arrow-back" size={30}/>      
                </TouchableOpacity>
            </View>
            
            <View style={styles.containerMap} >
              <MapView
                style={styles.mapStyle}
                ref={map => this.map = map}
                initialRegion={this.state.region}
              >
              {marker}
              {circle}
              </MapView> 
            </View>

            {/* <View style={styles.containerAnimation}>     
                <PanGestureHandler  
                     onGestureEvent={animatedEvent}
                     onHandlerStateChange={onHandlerStateChanged}>
                         
                    <Animated.View style={{
                        transform:[{
                            translateY: translateY.interpolate({
                                inputRange:[-100,0,360],
                                outputRange:[-10,0,360],
                                extrapolate:'clamp',
                            }),
                        }]
                    }}> */}
  
                        <View style={styles.information}>

                            <Text style={styles.tittle}> DISPOSITIVO {this.state.check} DA AREA</Text>

                            {/* <Text style={styles.subtittle} onPress={this.endereco}>
                                {this.state.endereco}</Text>

                            <Text style={styles.subtittle}onPress={this.cidade}>
                                {this.state.cidade}</Text>  

                            <View style={styles.cicle}/>

                            <Text  style={styles.tittle} onPress={this.pulsera}>
                                {this.state.pulsera}</Text> */}

                            <TouchableOpacity onPress={this.buttonActionHandler} style={styles.button} >
                               <Text style={styles.buttonStyle}>Localizar</Text>
                            </TouchableOpacity> 
                             

                        </View>
                    {/* </Animated.View>               
                </PanGestureHandler>
            </View> */}
        </View>
    </View>        
        );
    }
} 
