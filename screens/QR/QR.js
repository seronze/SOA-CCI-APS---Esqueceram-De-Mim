import React, {Component} from 'react';
import { View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    
} from 'react-native';
import styles from './Style';
import { Ionicons } from '@expo/vector-icons';


export default class QR extends Component{

    constructor(props){

      super(props);

      this.state ={ };

      this.voltar = this.voltar.bind(this);
      this.nav = this.nav.bind(this);
      
      
    }
  


    voltar(){
        let varNome =  this.props.navigation.state.params.varNome ;
        let varEmail =  this.props.navigation.state.params.varEmail ;
        this.props.navigation.navigate('PageOption',{varNome,varEmail});
    }

    nav(){
        let varNome =  this.props.navigation.state.params.varNome ;
        let varEmail =  this.props.navigation.state.params.varEmail ;
        this.props.navigation.navigate('QRScanner',{varNome,varEmail});
    
    }

    //AQUI
    checkLogin() {
        let QRvarBind = this.props.navigation.state.params.Bind;
        if(QRvarBind == 1) {
            let QRvarNome =  this.props.navigation.state.params.Name ;
            let QRvarEmail =  this.props.navigation.state.params.Email ;
            this.props.navigation.navigate('Menu', { QRvarNome, QRvarEmail });
        }
    }
  
render(){
    return(
        

    <View style={styles.tela} > 
        <View style={styles.cabecalho}></View>         
        <ScrollView style={styles.container}> 

            <TouchableOpacity style={styles.buttonVoltar} onPress={(this.voltar)}>
                <Ionicons name="ios-arrow-back" size={20} color="white"></Ionicons>
                <Text style={styles.voltar}>Voltar</Text>
            </TouchableOpacity>   

            <View style={styles.contentTittle}>
                <Text style={styles.tittle}>VINCULAR APARELHO</Text>
                <Text style={styles.subtittle}>Aponte seu smatphone</Text>
                <Text style={styles.subtittle}>para o QR CODE para vincular</Text>
                <Text style={styles.subtittle}>com a pulseira</Text>
            </View>

            <View style={styles.contentView}/>

            <View style={styles.cicleQR}>
                <View style={styles.contentImage} >
                    <Image style={styles.imageLogo}  source={{uri: 'https://e-lemento.com/qr/image/e47cf6'}}/> 
                </View>  
            </View>  

            <TouchableOpacity style={styles.button} onPress={this.nav}>
                <Ionicons name="ios-qr-scanner" size={20} color="white"></Ionicons>
                <Text style={styles.textButton}>ESCANEAR</Text>
            </TouchableOpacity> 
        </ScrollView>
    </View> 
           
        );
    }
} 

