import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

function Account({navigation}) {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>User Account</Text>
        </View>

        <View style={styles.userImagecontainer}>

          <Image
            style={{width: 130, height: 120}}
            source={require('../src/assets/images/userimage.png')}
          />
          
        </View>

        <View>
          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}>Name:</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="default"
                style={styles.inputStyles}
                placeholder="Description"
              />
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Company: </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="default"
                style={styles.inputStyles}
                placeholder="Location Description"
              />
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Site: </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="default"
                style={styles.inputStyles}
                placeholder="Equipment"
              />
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> UserName: </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="default"
                style={styles.inputStyles}
                placeholder="Equipment Type"
              />
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Password: </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="default"
                secureTextEntry={true}
                style={styles.inputStyles}
                placeholder="Password"
              />
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}>Email:</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="email-address"
                style={styles.inputStyles}
                placeholder="Email"
              />
            </View>
          </View>
        </View>

        <View style={styles.loginButtoncontainer}>
          <TouchableOpacity style={styles.loginButton} onPress={ () => navigation.navigate("AdminPanel")}>
            <Text style={styles.loginButtontext}> Save </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },

  inputMaincontainer: {
    width: '100%',
    marginTop: 12,
  },

  inputLabelcontainer: {
    marginLeft: 14,
    marginBottom: 7,
  },

  inputLabeltext: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputStyles: {
    width: '90%',
    height: 35,
    padding: 9,
    fontSize: 13,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  userImagecontainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButton: {
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#5cb85c',
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
    marginTop: 25,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Account;
