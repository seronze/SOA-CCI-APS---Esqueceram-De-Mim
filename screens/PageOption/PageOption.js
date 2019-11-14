import React, {Component} from 'react';
import { View,
    TextInput,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import styles from './Style';

export default class PageOption extends Component{


  constructor(props) {

    super(props)
    this.state = { }

    this.loc = this.loc.bind(this);
    this.gps = this.gps.bind(this);

  }
    

  loc(){
    varNome =  this.props.navigation.state.params.Name,
    varEmail =  this.props.navigation.state.params.Email,
    Bind = this.props.navigation.state.params.Bind;
    if(Bind == 0) {
      this.props.navigation.navigate('QR',{varNome,varEmail});
    }
    else {
      this.props.navigation.navigate('Menu',{varNome,varEmail});
    }
    
  }
  gps(){
    varNome =  this.props.navigation.state.params.Name,
    varEmail =  this.props.navigation.state.params.Email,
    this.props.navigation.navigate('Localiza',{varNome,varEmail}); 
  }

render(){
  return (
       
  <View style={styles.tela}>

    <View style={styles.cabecalho}></View>
    <ScrollView style={styles.container}>

      <View style={styles.contentImage} >
        <Image style={styles.imageLogo} source={require('../assets/Logo.png')}/>
      </View>

      <Text style={styles.tittle2}>Olá {this.props.navigation.state.params.Name}{this.props.navigation.state.params.varNome}</Text>

      <Text style={styles.subtittle}>Escolha um dos menus de navegação de acordo com sua necessidade</Text>

      <View style={styles.contentTittle}>
        <Text style={styles.tittle}>INTERFACES</Text>
      </View>

      <View style={styles.contentView}/>
    
      <TouchableOpacity style={styles.button} onPress={this.loc}>
        <Text style={styles.textButton}>LOCALIZADOR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={(this.gps)}>
        <Text style={styles.textButton}>GPS</Text>
      </TouchableOpacity>

    </ScrollView> 

  </View>  

  
    );
  }
}

