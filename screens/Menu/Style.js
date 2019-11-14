import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  tela:{
    flex: 1,  
  },

  container:{
    flex: 1,
    backgroundColor:"#FFFFFF",
    padding:20,
  },
  cabecalho:{
    width:"100%",
    height:20,
    backgroundColor:"#6666FF",
  },

  contentImage:{
    marginTop:30,
    alignItems:"center",
  },

  imageLogo:{
    width:150,
    height:112,
  },

  contentView:{
      paddingBottom:10,
      borderBottomWidth:1,
      borderColor:"#A9A9A9",
      marginLeft: 20,
      marginRight:20,
      marginTop:28,
      marginBottom:70,
  
  },

  contentTittle:{
    marginTop:230,
    marginBottom:20,
    position:"absolute",
    backgroundColor:"#FFF",
    zIndex:5,
    left:'26%',
    paddingLeft:10,
    paddingRight:10,
  },

  tittle:{

    fontSize:20,
    color:"#002F9D",
    fontWeight:"bold",
    alignSelf:"center",
},

tittle2:{
  top:30,
  fontSize:20,
  marginBottom:40,
  color:"#A9A9A9",
  fontWeight:"bold",
  alignSelf:"center",
},
  
  button:{
      flexBasis:1,
      height:50,
      width:"100%",
      padding:10,
      marginBottom:10,
      backgroundColor:"#FFF",
      color:"#FFF",
      flex:1,
      flexDirection:"row",
      
      borderRadius:5,
      borderWidth:1,
      borderColor:"#6666FF"
  },
  
  textButton:{
      fontSize:18,
      fontWeight:"bold",
      color:"#A9A9A9",
      marginLeft:15,
  },

  buttonExit:{
    height:50,
    width:"100%",
    padding:10,
    backgroundColor:"#FF6347",
    color:"#FFF",
    flex:1,
    flexDirection:"row",
    marginTop:150,

    borderRadius:5,
    borderWidth:1,
    borderColor:"#F00",

    shadowColor: '#FF6347',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  textButtonExit:{
    fontSize:18,
    fontWeight:"bold",
    color:"#FFF",
    marginLeft:65,
},

  

});

  export default styles;
  