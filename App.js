import {createAppContainer,createSwitchNavigator}from 'react-navigation';

//screens
import HomeScreen from './screens/Home/HomeScreen';
import Cadastro from './screens/Cadastro/Cadastro';
import QR from './screens/QR/QR';
import QRScanner from './screens/Scanner/QRScanner';
import Maps from './screens/Maps/Maps';
import Menu from './screens/Menu/Menu';
import Localiza from './screens/Localizador/Localiza';
import Banner from './screens/Banner/Banner';
import PageOption from './screens/PageOption/PageOption';

const Navigator = createSwitchNavigator({
    HomeScreen:{
      screen: HomeScreen
    },
    Cadastro:{
      screen:Cadastro
    },
    QR:{
      screen:QR
    },
    QRScanner:{
      screen:QRScanner
    },
    Maps:{
      screen:Maps
    },
    Menu:{
      screen:Menu
    },

    Localiza:{
      screen:Localiza
    },

    Banner:{
      screen:Banner
    },

    PageOption:{
      screen:PageOption
    },

    
});

export default createAppContainer(Navigator);