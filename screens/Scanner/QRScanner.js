// expo install expo-barcode-scanner
import * as React from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity,Alert} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './Style';

export default class BarcodeScannerExample extends React.Component {

  constructor(props){

    super(props);
    
    this.state ={ };

    this.voltar = this.voltar.bind(this);
  }
    
  voltar(){
    let varNome =  this.props.navigation.state.params.varNome ;
    let varEmail =  this.props.navigation.state.params.varEmail ;
    this.props.navigation.navigate('QR',{varNome,varEmail});
  }

  state = {
    hasCameraPermission: null,
    scanned: false,
    bind: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  // FUNÇÃO QUE VINCULA UM NOVO DISPOSITIVO, RECEBE O ID DO DISPOSITIVO (VINDO DO QR) E O EMAIL DO USUÁRIO (TEM QUE PASSAR COMO PARÂMETRO PELAS VIEWS)
  bindNewUser(raspId, userEmail, userName) {
    fetch('http://0.0.0.0/aps_server/bind_user.php', {
      
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({

      rasp: raspId,
      email: userEmail
    })

    }).then((response) => response.json())
    .then((responseJson) => {

      //let responseString = responseJson.substring(1, responseJson.length-1);
      //AQUI
      //this.setState({status: true})
      if(responseJson.split(" ")[0] == "Usuario") {
        //this.setState({bind: true})
        Alert.alert(responseJson);
        this.props.navigation.navigate('Menu', {varNome,varEmail});
        //alert("ja vinculado")
      } else {
        Alert.alert(responseJson);
      }
      
        //Alert.alert(responseJson);
      
    }).catch((error) => {

      console.error(error);
    });
  }
  
  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requer permissão da camera </Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>Sem acesso da camera</Text>;
    }
    
  return (
    
    <View style={styles.tela} > 
      <View style={styles.cabecalho}/>

      <View style={styles.container}>          
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject} />

        <TouchableOpacity style={styles.buttonVoltar} onPress={(this.voltar)}>
          <Text style={styles.voltar}>Voltar</Text>
        </TouchableOpacity>    

        <View style={styles.cicleQR}/> 
          {scanned && (
            <Button title={'Escanear Novamente!'} onPress={() => this.setState({ scanned: false })} />
          )}

      </View>
    </View>    
    );
  }

 
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    let varNome =  this.props.navigation.state.params.varNome ;
    let varEmail =  this.props.navigation.state.params.varEmail ;

    let splitData = data.split('-');
    // A VARIÁVEL data É O RETORNO DO QR ESCANEADO
    // CHAMA A FUNÇÃO PARA VINCULAR UM NOVO DISPOSITIVO, ENVIANDO COMO PARAMETRO O RETORNO DO QR E UMA STRING (O EMAIL QUE SERÁ VINCULADO)
    
    

    if(data != ""  && splitData[0] == 'EDM' ) {
      //this.setState({status: false});
      this.bindNewUser(data, varEmail, varNome);
    
    } else {
      alert('QR inválido')
    }

  };
}

