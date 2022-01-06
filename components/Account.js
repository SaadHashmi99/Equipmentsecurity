import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';

const bgImage = require('../src/assets/images/background.png');

const baseURL = 'http://system.inspectosafe.com/api/update_user.php';

function Account({navigation}) {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function fetchUserupdate() {
    axios
      .put(baseURL, {
        email: email,
        password: password,
        name: name,
        username: userName,
        jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcLyIsImF1ZCI6Imh0dHA6XC9cL2xvY2FsaG9zdFwvIiwiaWF0IjoxMzU2OTk5NTI0LCJuYmYiOjEzNTcwMDAwMDAsImRhdGEiOnsiaWQiOiIxOCIsIm5hbWUiOiJTYWFkIEhhc2htaSIsInVzZXJuYW1lIjoiY3NzYWFkaGFzaG1pQGdtYWlsLmNvbSIsImVtYWlsIjoiY3NzYWFkaGFzaG1pQGdtYWlsLmNvbSJ9fQ.XHfGhnuMqghm6vNYufnPLuZbvY49iipcRahfvKL9hc4',
      })
      .then(response => {
        console.log(response);
        console.log(userName);
        console.log(email);
        console.log(name);
        console.log(password);

        let message = response.data.message;

        if (message === 'User was updated.') {
          alert(message);
          navigation.navigate('AdminPanel');
        } else {
          alert('User cant be updated.');
        }
        console.log(message);
        alert(message);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleUserupdate() {
    if (userName === '' || name === '' || email === '' || password === '') {
      alert('Please fill all the fields');
    } else {
      fetchUserupdate();
    }
  }

  return (
    <>
      <Image source={bgImage} style={styles.backgroundImage} />
      <ScrollView>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>User Account</Text>
          </View>

          <View style={styles.userImagecontainer}>
            <Image
              style={styles.userImage}
              source={require('../src/assets/images/userimage.png')}
            />
          </View>

          <View>
            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Name: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="Name"
                  onChangeText={value => setName(value)}
                  value={name}
                />
              </View>
            </View>

            {/* <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Company: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="Company"
                />
              </View>
            </View> */}

            {/* <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Site: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="Site"
                />
              </View>
            </View> */}

            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> User Name: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="User Name"
                  onChangeText={value => setUserName(value)}
                  value={userName}
                />
              </View>
            </View>

            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Email: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="email-address"
                  style={styles.inputStyles}
                  placeholder="Email"
                  onChangeText={value => setEmail(value)}
                  value={email}
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
                  onChangeText={value => setPassword(value)}
                  value={password}
                />
              </View>
            </View>
          </View>

          <View style={styles.loginButtoncontainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleUserupdate}>
              <Text style={styles.loginButtontext}> Save </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  // mainContainer: {
  //   backgroundColor: '#fff',
  //   flex: 1,
  // },

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
    fontWeight: 'bold',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#F7F7F7',
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  userImagecontainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userImage: {
    width: 130,
    height: 120,
  },

  loginButton: {
    width: '90%',
    borderRadius: 3,
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

  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.5,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});

export default Account;
