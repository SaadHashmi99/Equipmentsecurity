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

const Signup = () => {
  return (
    <ScrollView>
      <View style={styles.myContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../src/assets/images/545.png')} />
        </View>

        <View style={styles.loginHeadingContainer}>
          <Text style={styles.loginHeading}> Create An Account </Text>
        </View>

        <View style={styles.nameContainer}>
          <TextInput style={styles.fName} placeholder="First Name" />

          <TextInput style={styles.lName} placeholder="Last Name" />
        </View>

        <View style={styles.emailInputcontainer}>
          <TextInput style={styles.emailInput} placeholder="User Name" />
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

        <View style={styles.passwordInputcontainer}>
          <TextInput
            secureTextEntry={true}
            style={styles.passwordInput}
            placeholder="Confirm Password"
          />
        </View>

        <View style={styles.loginButtoncontainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtontext}> Create Account </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.forgotPasswordcontainer}>
          <TouchableOpacity style={styles.forgotPasswordlink}>
            <Text style={styles.forgotPasswordtext}>
              Already have an Account ?
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  myContainer: {
    flex: 1,
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: '60%',
    height: 160,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
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
    marginTop: 5,
  },

  nameContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  fName: {
    borderWidth: 1,
    width: '44.5%',
    height: 45,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 15,
    marginRight: 5,
  },

  lName: {
    borderWidth: 1,
    width: '44.5%',
    height: 45,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 15,
  },

  emailInputcontainer: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstNamecontainer: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailInput: {
    width: '90%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    fontSize: 16,
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
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    fontSize: 16,
    padding: 10,
    paddingLeft: 15,
  },
  loginButton: {
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 20,
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
    fontSize: 20,
    textTransform: 'uppercase',
  },
  signupButtoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  forgotPasswordcontainer: {
    marginTop: 15,
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

export default Signup;
