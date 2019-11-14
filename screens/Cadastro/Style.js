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
        marginTop:40,
        marginBottom:20,
    
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
    
    contentTittle:{
    
        top:83,
        position:"absolute",
        backgroundColor:"#FFF",
        zIndex:5,
        left:"50%",
        transform: [ 
            { translateX: -Dimensions.get('window').width * 0.25 },
          ],
        paddingLeft:10,
        paddingRight:10,
    
    },
    contentTittle2:{
    
        top:605,
        position:"absolute",
        backgroundColor:"#FFF",
        zIndex:5,
        left:"50%",
        transform: [ 
            { translateX: -Dimensions.get('window').width * 0.38 },
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

        fontSize:20,
        color:"#6666FF",
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

    dropdown:{
        height:50,
        textAlign:"left",
        width:300,
        fontSize:15,
        borderWidth:1,
        borderRadius:20,
        borderColor:"#6666FF",
        padding:15,
        top:10,
    },

    error:{
        borderColor:"#FF6347",
        borderWidth:2,
    },
    
    TextForm:{
        flex:1,
        fontSize:17,
        justifyContent:'flex-start',
        textAlign:'left',
        alignSelf:'flex-start',
        color:"#002F9D",
        fontWeight:"bold",
        paddingLeft:20,
    },
    
    button:{
        height:40,
        top:30,
        marginLeft:30,
        marginRight:30,
        marginBottom:40,
        textAlign:"center",
        paddingTop:10,
        backgroundColor:"#6666FF",
        color:"#FFF",
        fontWeight:"bold",
        borderRadius:5,

        shadowColor: '#6666FF',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
    },
    
    textButton:{
        fontSize:15,
        textAlign:"center",
        color:"#FFF"
    
    },
    
    });

    export default styles;