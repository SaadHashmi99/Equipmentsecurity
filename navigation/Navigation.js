import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login';
import AdminPanel from '../components/AdminPanel';
import CertificateScreen from '../components/CertificateScreen';
import EquipmentinfoOne from '../components/EquipmentinfoOne';
import EquipmentinfoTwo from '../components/EquipmentinfoTwo';
import FourthScreen from '../components/FourthScreen';
import Records from '../components/Records';
import ThirdScreen from '../components/ThirdScreen';
import Account from '../components/Account';
import QrCodeCamera from '../components/QrCodeCamera';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Login">
    
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />

        <Stack.Screen name="AdminPanel" component={AdminPanel} options={{headerShown: false}} />

        <Stack.Screen name="CertificateScreen" component={CertificateScreen} options={{headerShown: false}} />

        <Stack.Screen name="EquipmentinfoOne" component={EquipmentinfoOne} options={{headerShown: false}} />

        <Stack.Screen name="EquipmentinfoTwo" component={EquipmentinfoTwo} options={{headerShown: false}} />

        <Stack.Screen name="FourthScreen" component={FourthScreen} options={{headerShown: false}} />

        <Stack.Screen name="Records" component={Records} options={{headerShown: false}} />

        <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{headerShown: false}} />

        <Stack.Screen name="Account" component={Account} options={{headerShown: false}} />

        <Stack.Screen name="QrCodeCamera" component={QrCodeCamera} options={{headerShown: false}} />
      
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

