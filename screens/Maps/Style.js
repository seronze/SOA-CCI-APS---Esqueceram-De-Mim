
import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    tela:{
        flex: 1,  
      },
    
      container:{
        flex: 1,
        backgroundColor:"#FFFFFF",
      },

      containerMap:{
        ...StyleSheet.absoluteFillObject,
      },    

      cabecalho:{
        width:"100%",
        height:20,
        position:'absolute',
        zIndex:10,
        backgroundColor:"#6666FF",
      },

      containerAnimation:{
        position:"absolute",
        flex:1,
        width:"100%",
      },

      moreBar:{
        zIndex:15,
        position:"absolute",

        top:"5%",
        
      },

      ButtomMoreBar:{
        width:45,
        height:45,
        justifyContent:"flex-start",
        left:20,
        top:20,
        borderRadius:10,
        textAlign:"center",
        padding:10,
        paddingTop:6,

        borderWidth:1,

        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 5,

        backgroundColor:"#FFF",
      },

      buttonStyle: {
        padding: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#117864',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },

      
      information:{
        zIndex:5,  
        backgroundColor:"#FFF",
        position:"absolute",
        width:"100%",
        height:400,
        top:450,

        padding: 30,

        borderRadius:20,
        borderWidth:0.5,
        borderColor:"#6666FF",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 10,

      },

      buttonStyle: {
        padding:5,
        margin: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },

    button:{
      backgroundColor: '#6666FF',
      borderRadius:5,
      borderColor:"#002F9D",
    },

      cicle:{

        width:100,
        height:100,

        marginTop:30,
        marginLeft:105,
        marginRight:50,
        marginBottom:50,


        borderRadius:200,
      
        borderWidth:1,

        borderColor:"#002F9D"
    },

    tittle:{
        //fontFamily:"Arial",
        fontSize:18,
        textAlign:"center",
        color:"#6666FF",
        marginBottom:15,

    },

    subtittle:{
        //fontFamily:"Arial",
        fontSize:15,
        textAlign:"center",
        marginBottom:5,
        
    },

    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        ...StyleSheet.absoluteFillObject,
      },
  });
  
  export default styles;