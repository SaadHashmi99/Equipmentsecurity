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

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Login">
    
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="AdminPanel" component={AdminPanel} />

        <Stack.Screen name="CertificateScreen" component={CertificateScreen} />

        <Stack.Screen name="EquipmentinfoOne" component={EquipmentinfoOne} />

        <Stack.Screen name="EquipmentinfoTwo" component={EquipmentinfoTwo} />

        <Stack.Screen name="FourthScreen" component={FourthScreen} />

        <Stack.Screen name="Records" component={Records} />

        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />

        <Stack.Screen name="Account" component={Account} />
      
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default Navigation;
