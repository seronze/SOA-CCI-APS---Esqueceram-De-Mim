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
    buttonVoltar:{
        height:30,
        width:90,
        marginLeft:20,
        marginTop:20,
        paddingTop:5,
        textAlign:"left",
        backgroundColor:"#D3D3D3",
        color:"#FFF",
        fontWeight:"bold",
        borderRadius:5,
    
    },
    voltar:{
        fontSize:15,
        textAlign:"center",
        color:"#FFF"
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
});

export default styles;