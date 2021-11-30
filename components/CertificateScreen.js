import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Good',
    value: 'option1',
    borderColor: 'green',
    color: 'green',
  },
  {
    id: '2',
    label: 'Bad',
    value: 'option2',
    selected: true,
    borderColor: 'red',
    color: 'red',
  },
  {
    id: '3',
    label: 'N/A',
    value: 'option3',
  },
];

const image = require('../src/assets/images/background.png');

function CertificateScreen() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <>
      <Image
        source={image}
        style={{
          position: 'absolute',
          zIndex: -1,
          opacity: 0.1,
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}
      />
      <ScrollView>
        <View style={styles.productSection}>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={styles.productImage}
          />

          <TouchableOpacity style={styles.certificateButtoncontainer}>
            <Text style={styles.certificateButtontext}> Add Certificate </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: '96%',
            marginTop: 20,
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: '#CCCC',
            borderRadius: 5,
          }}>
          <View style={styles.inputMaincontainer}>
            
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Description: </Text>
            </View>

            <View>
              <Text style={{fontSize: 17, alignSelf: 'center', paddingHorizontal: 80 }}> Fire Estinguisher </Text>
            </View>

          </View>

          <View style={styles.inputMaincontainer}>

            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Location Description: </Text>
            </View>

            <View>
              <Text style={{fontSize: 17, alignSelf: 'center', paddingHorizontal: 12 }}> IT Room </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Equipment: </Text>
            </View>

            <View>
              <Text style={{fontSize: 17, alignSelf: 'center', paddingHorizontal: 85 }}> Fire Equipment </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Equipment Type: </Text>
            </View>

            <View>
              <Text style={{fontSize: 17, alignSelf: 'center', paddingHorizontal: 45 }}> Fire Safety </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Equipment Family: </Text>
            </View>

            <View>
              <Text style={{fontSize: 17, alignSelf: 'center', paddingHorizontal: 30 }}> Fire Equipment </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Last Inspection Date: </Text>
            </View>

            <View>
              <Text style={{fontSize: 17, alignSelf: 'center', paddingHorizontal: 12 }}> Not Available </Text>
            </View>

          </View>

        </View>

        <View style={styles.checklistMaincontainer}>
          <View style={styles.checklistContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}> Checklist </Text>
            </View>

            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 1</Text>
              <RadioGroup radioButtons={radioButtons} layout="row" />
            </View>

            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 1</Text>

              <RadioGroup radioButtons={radioButtons} layout="row" />
            </View>

            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 1</Text>

              <RadioGroup radioButtons={radioButtons} layout="row" />
            </View>

            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 1</Text>

              <RadioGroup radioButtons={radioButtons} layout="row" />
            </View>
          </View>
        </View>

        <View style={styles.loginButtoncontainer}>
          <TouchableOpacity style={styles.attachImageButton}>
            <Text style={styles.loginButtontext}> Attach Image </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.saveButtoncontainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtontext}> Save </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  productSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },

  productImage: {
    width: '40%',
    height: 160,
    marginTop: 20,
  },

  certificateButtoncontainer: {
    width: '45%',
    backgroundColor: 'green',
    alignSelf: 'center',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  certificateButtontext: {
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  inputMaincontainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 12,
  },

  inputLabelcontainer: {
    marginLeft: 12,
  },

  inputLabeltext: {
    color: '#635A5D',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },

  checklistMaincontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    marginLeft: 8,
    borderRadius: 6,
  },

  checklistContainer: {
    width: '92%',
    marginBottom: 30,
  },

  headingContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  headingText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Estonia-Regular',
  },

  radioButtoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  tagText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  loginButton: {
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#5cb85c',
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

  attachImageButton: {
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#d9534f',
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

  saveButtoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});

export default CertificateScreen;
