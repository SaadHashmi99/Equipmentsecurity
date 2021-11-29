import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

function Login({navigation}) {
  return (
    <ScrollView>
      <View style={styles.myContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../src/assets/images/545.png')} />
        </View>

        <View style={styles.loginHeadingContainer}>
          <Text style={styles.loginHeading}> Login </Text>
        </View>

        <View style={styles.emailInputcontainer}>
          <TextInput
            keyboardType="email-address"
            style={styles.emailInput}
            placeholder="Email"
          />
        </View>

        <View style={styles.passwordInputcontainer}>
          <TextInput
            secureTextEntry={true}
            style={styles.passwordInput}
            placeholder="Password"
          />
        </View>

        <View style={styles.loginButtoncontainer}>
          <TouchableOpacity style={styles.loginButton} onPress={ () => navigation.navigate("AdminPanel")}>
            <Text style={styles.loginButtontext}> Login </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orTextcontainer}>
          <Text style={styles.orText}> English | Arabic </Text>
        </View>
      </View>
    </ScrollView>
  );
}

// React Native Styles

const styles = StyleSheet.create({
  myContainer: {
    flex: 1,
  },

  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },

  logo: {
    width: '60%',
    height: 160,
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
    borderColor: 'gray',
    borderRadius: 5,
    fontSize: 20,
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
    borderColor: 'gray',
    borderRadius: 5,
    fontSize: 20,
    padding: 10,
    paddingLeft: 15,
  },

  loginButton: {
    width: '90%',
    borderRadius: 5,
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  orText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
    textTransform: 'capitalize',
  },
});

export default Login;
