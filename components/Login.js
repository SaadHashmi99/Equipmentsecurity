import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';

const bgImage = require('../src/assets/images/background.png');

const baseUrl = 'http://system.inspectosafe.com/api/login.php';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchLogin = () => {
    axios
      .post(baseUrl, {
        email: email,
        password: password,
      })
      .then(response => {
        let message = response.data.message;
        let loginFailed = 'Invalid Email or Password';

        if (message === 'login successfull') {
          Alert.alert('Login Successfull');
          navigation.navigate('AdminPanel');
        } else {
          Alert.alert(loginFailed);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('Please fill all the fields');
    } else {
      fetchLogin();
    }
  };

  return (
    <View>
      <Image source={bgImage} style={styles.backgroundImage} />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../src/assets/images/545.png')}
        />
      </View>

      <View style={styles.loginHeadingContainer}>
        <Text style={styles.loginHeading}> Sign In </Text>
      </View>

      <View style={styles.emailInputcontainer}>
        <TextInput
          onChangeText={value => setEmail(value)}
          value={email}
          keyboardType="email-address"
          style={styles.emailInput}
          placeholder="Email"
          placeholderTextColor="#ccc"
        />
      </View>

      <View style={styles.passwordInputcontainer}>
        <TextInput
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry={true}
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#ccc"
        />
      </View>

      <View style={styles.loginButtoncontainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtontext}> Sign In </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View>
          <TouchableOpacity>
            <Text style={styles.orText}> English </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{fontSize: 30, padding: 6}}> | </Text>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={styles.orText}> Arabic </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// React Native Styles

const styles = StyleSheet.create({
  // myContainer: {
  //   flex: 1,
  // },

  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },

  logo: {
    width: '65%',
    height: 180,
  },

  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },

  loginHeadingContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  emailInputcontainer: {
    marginTop: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emailInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#CCCC',
    backgroundColor: '#fff',
    borderRadius: 3,
    fontSize: 18,
    padding: 10,
    paddingLeft: 15,
  },

  passwordInputcontainer: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  passwordInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 3,
    fontSize: 18,
    padding: 10,
    paddingLeft: 15,
  },

  loginButton: {
    width: '90%',
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 2,
  },

  loginButtontext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },

  loginButtoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupButton: {
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  signupButtontext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },

  signupButtoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  forgotPasswordcontainer: {
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotPasswordtext: {
    fontSize: 14,
    color: 'blue',
  },

  orTextcontainer: {
    marginTop: 30,
  },

  orText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0275dB',
    textTransform: 'capitalize',
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.5,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});

export default Login;
