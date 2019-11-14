import {StyleSheet,Dimensions} from 'react-native';

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
  contentView:{
      paddingBottom:10,
      borderBottomWidth:1,
      borderColor:"#A9A9A9",
      marginLeft: 20,
      marginRight:20,
      marginTop:50,
      marginBottom:20,
  
  },
  contentImage:{
    marginTop:30,
    alignItems:"center",
  },
  
  imageLogo:{
    width:200,
    height:150,
  },
  
  contentTittle:{
  
      top:220,
      position:"absolute",
      backgroundColor:"#FFF",
      zIndex:5,
      left:"50%",

      transform: [ 
        { translateX: -Dimensions.get('screen').width * 0.14 },
      ],

      paddingLeft:10,
      paddingRight:10,

  },
  
  
  cadastro:{

      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  
  tittle:{
      marginTop:5,
      fontSize:24,
      color:"#002F9D",
      fontWeight:"bold",
      alignSelf:"center",
  },
  
  input:{
      height:50,
      textAlign:"left",
      width:300,
      fontSize:16,
      marginTop:10,
      alignItems:'center',
      marginBottom:10,
      backgroundColor:"#fff",
      borderColor:"#000",
      borderBottomWidth:1,
      borderLeftWidth:1,
      borderTopWidth:1,
      borderRightWidth:1,
      borderRadius:20,
      borderColor:"#6666FF",
      paddingLeft:15,
      
      shadowColor: '#6666FF',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
  
  },
  
  error:{
    
    borderColor:"#FF6347",
    borderWidth:2,
    
  },
  
  button:{
      height:40,
      width:250,
      textAlign:"center",
      marginBottom:20,
      backgroundColor:"#6666FF",
      color:"#FFF",
      fontWeight:"bold",
      borderRadius:20,

      flex:1,
      justifyContent:'center',
      alignSelf:'center',

      shadowColor: '#6666FF',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
  },
  
  textButton:{
      fontSize:15,
      textAlign:"center",
      color:"#FFF",
  },
  
  contentButtonSenha:{
    marginLeft:200,
    marginBottom:20,
  },
  
  buttonSenha:{
  
  },
  
  textButtonSenha:{
    color:"#002F9D",
    fontSize:15,
  
  },
});

  export default styles;
  