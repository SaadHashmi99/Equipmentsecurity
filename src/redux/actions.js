import * as t from './actionTypes';
import { Alert } from 'react-native';

// this is what our action should look like which dispatches the "payload" to reducer
const setLoginState = (loginData) => {
  return {
    type: t.SET_LOGIN_STATE,
    payload: loginData,
  };
};

export const loginData = () => {
    
}