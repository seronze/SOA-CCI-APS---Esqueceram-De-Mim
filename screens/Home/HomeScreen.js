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

export default class HomeScreen extends Component{

  // variable to hold the references of the textfields
  inputs = {};
  // function to focus the field
  focusTheField = (id) => {
  this.inputs[id].focus();
  }

  constructor(props) {

    super(props)
    this.state = {

    name:'',
    nameValidate:true,
    password:'',
    passwordValidate:true,  

    UserEmail: '',
    UserPassword: ''

    }

    this.login = this.login.bind(this);
    this.cad = this.cad.bind(this);
    this.qr = this.qr.bind(this);

  }

  login(){
    this.props.navigation.navigate('Menu'); 
  }

  cad(){
    this.props.navigation.navigate('Cadastro');
  }

  qr(){
    this.props.navigation.navigate('Localiza')
  }



  // Define nome da página de login
  static navigationOptions = {

    title: 'LoginActivity',
  };

  

  UserLoginFunction = () =>{

    // const { UserEmail }  = this.state ;
    // const { UserPassword }  = this.state ;
    const UserEmail = this.state.UserEmail;
    const UserPassword = this.state.UserPassword;
    //alert(UserEmail)

    if (UserEmail != "" && UserPassword != "") {
      fetch('http://0.0.0.0/aps_server/login.php', {
      
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        email: UserEmail,
        password: UserPassword
      })

      }).then((response) => response.json())
      .then((responseJson) => {

      //alert(responseJson[0])

        if(responseJson[0] == 'OK') {

          if(responseJson[2] == 1) {

            let varNome = responseJson[1];
            let varEmail = UserEmail;
            this.props.navigation.navigate('PageOption', { Name: varNome, Email: varEmail, Bind: responseJson[2] });
          } else {

            this.props.navigation.navigate('PageOption', { Name: responseJson[1], Email: UserEmail, Bind: responseJson[2] });
          }
        }
        else {
          
          alert(responseJson[1])
        }

      }).catch((error) => {

        console.error(error);
      });
    }
     else {
      alert("Campos vazios");

      if(this.state.UserEmail == "" ){
        this.setState({nameValidate:false})
      }
      if (this.state.UserPassword == ""){
        this.setState({passwordValidate:false})
      }

     }
  }

  validate(text,type){
    
    if(type=="username"){
      if( text!= ""){
        
        this.setState({
          nameValidate:true,
        })
      }
      else{
        this.setState({
          nameValidate:false,
        })
      }
    }

    if(type=="password"){
      if( text!= ""){
        
        this.setState({
          passwordValidate:true,
        })
      }
      else{
        this.setState({
          passwordValidate:false,
        })
      }
    }


  }
  


render(){
  return (
       
  <KeyboardAvoidingView
    style={styles.tela}
    behavior={Platform.select({
    ios: 'padding',
    android: null,
  })}>

    <View style={styles.cabecalho}></View>
    <ScrollView style={styles.container}>

      <View style={styles.contentImage} >
        <Image style={styles.imageLogo} source={require('./assets/Logo.png')}/>
      </View>

      <View style={styles.contentTittle}>
        <Text style={styles.tittle}>LOGIN</Text>
      </View>

      <View style={styles.contentView}/>
      
      
      
      <View style={styles.cadastro}>
        <TextInput placeholder = "EMAIL"
            label={"Field 1"}
            onSubmitEditing={() => { this.focusTheField('field2'); }}
            returnKeyType='next'
            keyboardType = "email-address"
            underlineColorAndroid='transparent'
            onChangeText={(UserEmail) => {
              this.setState({UserEmail})
              this.validate(UserEmail,"username")
            }}
            
            style = {[styles.input,!this.state.nameValidate ? styles.error:null]}
            />

        <TextInput placeholder = "PASSWORD"
            label={"Field 2"}
            ref={input => { this.inputs['field2'] = input }}
            keyboardType = 'visible-password'
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(UserPassword) => {
              this.setState({UserPassword})
              this.validate(UserPassword,"password")
            }}
            
            style = {[styles.input,!this.state.passwordValidate ? styles.error:null]}/>
      </View>

      <View style = {styles.contentButtonSenha}>
        <TouchableOpacity style={styles.buttonSenha} onPress={(this.qr)}>
          <Text style={styles.textButtonSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={this.UserLoginFunction}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={(this.cad)}>
        <Text style={styles.textButton}>CADASTRAR</Text>
      </TouchableOpacity>

    </ScrollView>
    </KeyboardAvoidingView>  

  
);
}
}
