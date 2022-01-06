import React from 'react';
import { Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './navigation/Navigation';


const splashScreen = require('./src/assets/images/splash.png');

export default function App() {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 3000);
  }, []);

  if(loginState.isLoading){
    return(
      <Image source={splashScreen} style={{width:Dimensions.get('screen').width, height:Dimensions.get('screen').height}}/>
    );
  }

  return(

    <Navigation />

  )
}