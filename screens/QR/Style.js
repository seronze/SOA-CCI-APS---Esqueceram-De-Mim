import {StyleSheet,PixelRatio,Dimensions} from 'react-native';



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
      alignItems:"center",
    },

    imageLogo:{
      width:150,
      height:150,
    },

    contentTittle:{

        top:87,
        position:"absolute",
        backgroundColor:"#FFF",
        alignItems:"center",
        zIndex:5,
        left:"13%",
        paddingLeft:10,
        paddingRight:10,
    },

    tittle:{
        marginTop:5,
        marginBottom:10,
        fontSize:25,
        color:"#002F9D",
        fontWeight:"bold",
        alignSelf:"center",
    },

    subtittle:{
        fontSize:15,
        color:"#A9A9A9",
    },

    cicleQR:{
      justifyContent:'center',
      alignSelf:'center',
      marginTop:120,

      paddingBottom:70,
      paddingTop:70,

      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      width: 600 * 0.5,
      height: 600 * 0.5,
      
      borderWidth:2,

      borderColor:"#002F9D"
    },

    image:{
      width:170,
      height:170,
    },


    button:{
        height:40,
        width:250,
        textAlign:"center",
        marginTop:30,
        paddingTop:10,
        backgroundColor:"#6666FF",
        color:"#FFF",
        fontWeight:"bold",
        borderRadius:20,
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignSelf:'center',

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

export default styles;