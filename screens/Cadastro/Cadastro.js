import React, {Component} from 'react';
import { View,
    TextInput,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform,

} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'
import { Dropdown } from 'react-native-material-dropdown';
import styles from './Style';

export default class Cadastro extends Component{

  // variable to hold the references of the textfields
  inputs = {};
  // function to focus the field
  focusTheField = (id) => {
  this.inputs[id].focus();
  }

  constructor() {

    super()
    this.state = {

      UserName: '',
      UserSobrenome:'',
      UserEmail: '',
      UserPassword: '',
      UserTelefone:'',
      UserEndereco:'',
      UserNumero:'',
      UserBairro:'',
      UserCidade:'',
      UserEstado:'',


    nameValidate:true,
    sobrenomeValidate:true,
    passwordValidate:true, 
    emailValidate:true,
    numberValidate:true,
    bairroValidate:true,
    cidadeValidate:true,
    enderecoValidate:true,
    numeroValidate:true

      

    }

    this.cadastro = this.cadastro.bind(this);
  }

cadastro(){
    this.props.navigation.navigate('HomeScreen');
}

UserRegistrationFunction = () => {

valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z-.]+$/

if(this.state.UserName != "" && this.state.UserSobrenome != "" && this.state.UserTelefone != "" && this.state.UserEmail != "" && this.state.UserPassword != ""){
    
    if(this.state.nameValidate != false && this.state.sobrenomeValidate != false && this.state.numberValidate != false && this.state.bairroValidate != false && this.state.UserCidade != false){
        
        if(valid.test(this.state.UserEmail)){

         fetch('http://0.0.0.0/aps_server/register.php', {

          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          name: this.state.UserName,
          sobrenome:this.state.UserSobrenome,
          email: this.state.UserEmail,
          password: this.state.UserPassword,
          telefone: this.state.UserTelefone,

          endereco: this.state.UserEndereco,
          numero: this.state.UserNumero,
          bairro: this.state.UserBairro,
          cidade: this.state.UserCidade,
          estado: this.state.UserEstado,  
        })

        }).then((response) => response.text())
        .then((responseJson) => {
      
            // Mostra alerta com mensagem recebida do servidor
            Alert.alert(responseJson);
     
     

          }).catch((error) => {

          console.error(error);
            });
          } 

        else{
          Alert.alert("Email não é valido!")
          this.setState({emailValidate:false})
        }

    }
    else{
      Alert.alert("Dados incorretos")

      if(this.state.nomeValidate == false){
        this.setState({nomeValidate:false})
      }
      if(this.state.sobrenomeValidate == false){
        this.setState({sobrenomeValidate:false})
      }
      if(this.state.numberValidate == false){
        this.setState({numberValidate:false})
      }
      if(this.state.bairroValidate == false){
        this.setState({bairroValidate:false})
      }
      if(this.state.cidadeValidate == false){
        this.setState({cidadeValidate:false})
      }
     
    }  

}
else{
      Alert.alert("Campos obrigatorios vazios")
      
      if(this.state.UserName == "" ){
        this.setState({nameValidate:false})
      }
      if (this.state.UserEmail == ""){
        this.setState({emailValidate:false})
      }
      if(this.state.UserPassword == ""){
        this.setState({passwordValidate:false})
      }
      if (this.state.UserSobrenome == ""){
        this.setState({sobrenomeValidate:false})
      }
      if(this.state.UserTelefone == ""){
        this.setState({numberValidate:false})
      }  
    }
  }

  validate(text,type){
   
    validAlfabeto = /^[a-zA-Z]+$/ 
    validNumber = /^[0-9]+$/

    //Validação do campo Nome
    if(type=="nome"){
      if( text!= ""){
        if(validAlfabeto.test(text)){
          this.setState({
            nameValidate:true,
          })
        }
        else{
          Alert.alert("Este campo suporta apenas letras")
          this.setState({
            nameValidate:false
          })
        }   
      }
      else{
        this.setState({
          nameValidate:false,
        })
      }
    }

     //Validação do campo Sobrenome
     if(type=="sobrenome"){
      if( text!= ""){
        if(validAlfabeto.test(text)){
          this.setState({
            sobrenomeValidate:true,
          })
        }
        else{
          Alert.alert("Este campo suporta apenas letras")
          this.setState({
            sobrenomeValidate:false
          })
        }
      }
      else{
        this.setState({
          sobrenomeValidate:false,
        })
      }
    }

    //Validação do campo Email
    if(type=="email"){
      if( text!= ""){
        
        this.setState({
          emailValidate:true,
        })
      }
      else{
        this.setState({
          emailValidate:false,
        })
      }
    }

    //Validação do campo Senha
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
    //Validação do campo Telefone
    if(type=="number"){
      if( text!= ""){
        
          this.setState({
            numberValidate:true,
          })
      }
      else{
        this.setState({
          numberValidate:false,
        })
      }
    }

    //Validação do campo Endereco
    if(type=="endereco"){
      if( text!= ""){
        
          this.setState({
            enderecoValidate:true,
          })
      }
      else{
        this.setState({
          enderecoValidate:false,
        })
      }
    }

    //Validação do campo Numero
    if(type=="numero"){
      if( text!= ""){
        
          this.setState({
            numeroValidate:true,
          })
      }
      else{
        this.setState({
          numeroValidate:false,
        })
      }
    }

    //Validação do campo Bairro
    if(type=="bairro"){
      if( text!= ""){
        if(validAlfabeto.test(text)){
          this.setState({
            bairroValidate:true,
          })
        }
        else{
          Alert.alert("Este campo suporta apenas letras")
          this.setState({
            bairroValidate:false
          })
        }
      }
      else{
        this.setState({
          bairroValidate:false,
        })
      }
    }

    //Validação do campo Cidade
    if(type=="cidade"){
      if( text!= ""){
        if(validAlfabeto.test(text)){
          this.setState({
            cidadeValidate:true,
          })
        }
        else{
          Alert.alert("Este campo suporta apenas letras")
          this.setState({
            cidadeValidate:false
          })
        }
      }
      else{
        this.setState({
          cidadeValidate:false,
        })
      }
    }



  }

  render(){

    
    const options = [
      {
        value: 'AC',
      }, {
        value: 'AL',
      }, {
        value: 'AP',
      },
      {
        value: 'AM',
      }, {
        value: 'BA',
      }, {
        value: 'CE',
      },
      {
        value: 'DF',
      }, {
        value: 'ES',
      }, {
        value: 'GO',
      },{
        value: 'MA',
      }, {
        value: 'MT',
      }, {
        value: 'MS',
      }, {
        value: 'MG',
      }, {
        value: 'PA',
      }, {
        value: 'PB',
      }, {
        value: 'PR',
      }, {
        value: 'PE',
      }, {
        value: 'PI',
      }, {
        value: 'RR',
      }, {
        value: 'RO',
      },{
        value: 'RJ',
      },{
        value: 'RN',
      }, {
        value: 'RS',
      }, {
        value: 'SC',
      }, {
        value: 'SP',
      }, {
        value: 'SE',
      }, {
        value: 'TO',
      },
    
    ];

    return(
      <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}> 
      <View style={styles.cabecalho}></View>  
      <ScrollView style={styles.container}>
          
          <TouchableOpacity style={styles.buttonVoltar} onPress={(this.cadastro)}>
            <Ionicons name="ios-arrow-back" size={20} color="white"></Ionicons>
            <Text style={styles.voltar}>Voltar</Text>  
          </TouchableOpacity>    

          <View style={styles.contentTittle}>
              <Text style={styles.tittle}>DADOS PESSOAIS</Text>
          </View>

          <View style={styles.contentView}/>

          <View style={styles.cadastro}>
          
            
              <Text style={styles.TextForm}>NOME <Ionicons name="ios-medical" size={10} color="red" ></Ionicons></Text>
            
              <TextInput placeholder = "Nome"
                  label={"Field 1"}
                  onSubmitEditing={() => { this.focusTheField('field2'); }}
                  returnKeyType='next'
                  keyboardType = "name-phone-pad"
                  onChangeText={(name) => {
                    this.setState({UserName : name})
                    this.validate(name,"nome")
                  }}
                  underlineColorAndroid='transparent'
                  style = {[styles.input,!this.state.nameValidate ? styles.error:null]}/>

            <Text style={styles.TextForm}>SOBRENOME <Ionicons name="ios-medical" size={10} color="red"></Ionicons></Text>
              <TextInput placeholder = "Sobrenome"
                  label={"Field 2"}
                  ref={input => { this.inputs['field2'] = input }}
                  onSubmitEditing={() => { this.focusTheField('field3'); }}
                  returnKeyType='next'
                  keyboardType = "name-phone-pad"
                  onChangeText={(sobrenome) => {
                    this.setState({UserSobrenome : sobrenome})
                    this.validate(sobrenome,"sobrenome")
                  }}
                  style = {[styles.input,!this.state.sobrenomeValidate ? styles.error:null]}/>

             <Text style={styles.TextForm}>TELEFONE <Ionicons name="ios-medical" size={10} color="red"></Ionicons></Text>

                  <TextInputMask
                    type={'cel-phone'}
                    options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                    }}
                    value={this.state.international}
                    onChangeText={(telefone) => {
                      this.setState({UserTelefone : telefone})
                      this.validate(telefone,"number")
                      this.setState({
                        international: telefone
                         })
                    }}

                    placeholder = "(00) 00000-0000" 
                  label={"Field 3"}
                  ref={input => { this.inputs['field3'] = input }}
                  onSubmitEditing={() => { this.focusTheField('field4'); }}
                  returnKeyType='next'
                  keyboardType = "number-pad"

                  style = {[styles.input,!this.state.numberValidate ? styles.error:null]}
                  />     

            <Text style={styles.TextForm}>EMAIL <Ionicons name="ios-medical" size={10} color="red"></Ionicons></Text>
              <TextInput placeholder = "Exemple@email.com"
                   label={"Field 4"}
                   ref={input => { this.inputs['field4'] = input }}
                  onSubmitEditing={() => { this.focusTheField('field5'); }}
                  returnKeyType='next'
                   keyboardType = "email-address"
                   onChangeText={(email) => {
                    this.setState({UserEmail : email})
                    this.validate(email,"email")
                  }}
                   underlineColorAndroid='transparent'
                   style = {[styles.input,!this.state.emailValidate ? styles.error:null]}/>

            <Text style={styles.TextForm}>SENHA <Ionicons name="ios-medical" size={10} color="red"></Ionicons></Text>
              <TextInput placeholder = "Senha" 
                  label={"Field 5"}
                  ref={input => { this.inputs['field5'] = input }}
                  onSubmitEditing={() => { this.focusTheField('field6'); }}
                  returnKeyType='next'
                  keyboardType = 'visible-password'
                  onChangeText={(password) => {
                    this.setState({UserPassword : password})
                    this.validate(password,"password")
                  }}
                  underlineColorAndroid='transparent'
                  secureTextEntry={true}
                  style = {[styles.input,!this.state.passwordValidate ? styles.error:null]}/>      
          </View> 

          <View style={styles.contentTittle2}>
            <Text style={styles.tittle}>INFORMAÇOES ADICIONAIS</Text>
          </View>

          <View style={styles.contentView}/>

          <View style={styles.cadastro}>
            <Text style={styles.TextForm}>ENDEREÇO</Text>
               <TextInput placeholder = "Endereço"
                  label={"Field 6"}
                  ref={input => { this.inputs['field6'] = input }}
                  onSubmitEditing={() => { this.focusTheField('field7'); }}
                  returnKeyType='next'
                  keyboardType = "name-phone-pad"
                  onChangeText={(endereco) => {
                    this.setState({UserEndereco : endereco})
                    this.validate(endereco,"endereco")
                  }}
                   style = {[styles.input,!this.state.enderecoValidate ? styles.error:null]}
                  />

            <Text style={styles.TextForm}>NUMERO</Text>
              <TextInput placeholder = "Numero"
                  label={"Field 7"}
                  ref={input => { this.inputs['field7'] = input }}
                  onSubmitEditing={() => { this.focusTheField('field8'); }}
                  returnKeyType='next'
                  keyboardType = "numeric"
                  onChangeText={(numero) => {
                    this.setState({UserNumero : numero})
                    this.validate(numero,"numero")
                  }}
                   style = {[styles.input,!this.state.numeroValidate ? styles.error:null]}/>

            <Text style={styles.TextForm}>BAIRRO</Text>
              <TextInput placeholder = "Bairro"
                  label={"Field 8"}
                  ref={input => { this.inputs['field8'] = input }}
                  onSubmitEditing={() => { this.focusTheField('field9'); }}
                  returnKeyType='next'
                   keyboardType = "name-phone-pad"
                   onChangeText={(bairro) => {
                    this.setState({UserBairro : bairro})
                    this.validate(bairro,"bairro")
                  }}
                   style = {[styles.input,!this.state.bairroValidate ? styles.error:null]}/>

            <Text style={styles.TextForm}>CIDADE</Text>
              <TextInput placeholder = "Cidade" 
                  label={"Field 9"}
                  ref={input => { this.inputs['field9'] = input }}
                  keyboardType = "name-phone-pad"
                  onChangeText={(cidade) => {
                    this.setState({UserCidade : cidade})
                    this.validate(cidade,"cidade")
                  }}
                  style = {[styles.input,!this.state.cidadeValidate ? styles.error:null]}/>

            <Text style={styles.TextForm}>ESTADO</Text>

              <Dropdown
                label='Estado'
                data={options}
                containerStyle = {styles.dropdown}
                pickerStyle={{
                  borderBottomColor:'transparent',
                  borderWidth: 1,
                  borderRadius:10,
                  borderColor:'#6666FF'
                }}
                dropdownOffset={{ 'top': 0 }}
                onChangeText={estado => this.setState({UserEstado : estado})}
              />
               
          </View>  

          <TouchableOpacity style={styles.button} onPress={this.UserRegistrationFunction}>
            <Text style={styles.textButton}>CADASTRAR</Text>
          </TouchableOpacity>
    
      </ScrollView>
    </KeyboardAvoidingView> 
    )
  }
}

