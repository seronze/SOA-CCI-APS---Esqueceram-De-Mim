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
      marginBottom:50,
  
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
  
      top:330,
      position:"absolute",
      backgroundColor:"#FFF",
      zIndex:5,
      left:"50%",

      transform: [ 
        { translateX: -Dimensions.get('screen').width * 0.2 },
      ],

      paddingLeft:10,
      paddingRight:10,

  },
  
  
  tittle:{
      marginTop:5,
      fontSize:24,
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
    flex:1,
    justifyContent:'center',
    alignSelf:"center",

  },

  subtittle:{
    fontSize:15,
    color:"#A9A9A9",

    flex:1,
    justifyContent:'center',
    alignSelf:"center",
    padding:30,
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
  
});

  export default styles;
  