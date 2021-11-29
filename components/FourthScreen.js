import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Platform,
  ScrollView,
} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

function FourthScreen() {
  return (
    <ScrollView>
      <View style={styles.marginTopcontainer}>
        <View style={styles.flexContainer}>
          <TouchableOpacity style={styles.pictureButtoncontainer}>
            <Text style={styles.pictureButtontext}> Add Picture </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pictureButtoncontainer}>
            <Text style={styles.pictureButtontext}> Open Camera </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 100, marginBottom: 240}}>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <Text style={{alignSelf: 'center'}}> Issue Date: </Text>
            <TextInput
              style={styles.input}
              placeholder="Issue Date"
              keyboardType="default"
            />
          </View>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <Text style={{alignSelf: 'center'}}> Expiry Date: </Text>
            <TextInput
              style={styles.input}
              placeholder="Expiry Date"
              keyboardType="default"
            />
          </View>
        </View>
        <View>
          <View style={styles.flexContainer}>

            <TouchableOpacity style={styles.backBtncontainer}>
              <Text style={styles.pictureButtontext}> Save </Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.saveBtncontainer}>
              <Text style={styles.pictureButtontext}> Back </Text>
            </TouchableOpacity>
          
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
  marginTopcontainer: {
    marginTop: 50,
    marginBottom: 30,
  },

  pictureButtoncontainer: {
    backgroundColor: '#0275db',
    width: "45%",
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
  },

  pictureButtontext: {
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 13,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
  input: {
    height: 42,
    width: 130,
    borderRadius: 3,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    fontSize: 14,
    alignSelf: 'center',
  },
  
  backBtncontainer: {
    backgroundColor: '#5cb85c',
    width: "45%",
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
  },
  
  saveBtncontainer: {
    backgroundColor: '#d9534f',
    width: "45%",
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
  },
});

export default FourthScreen;
