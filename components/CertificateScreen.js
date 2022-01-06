import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

const radioButtonsData1 = [
  {
    id: '0', // acts as primary key, should be unique and non-empty string
    label: 'Good',
    value: 'option1',
    borderColor: 'green',
    color: 'green',
  },
  {
    id: '1',
    label: 'Bad',
    value: 'option2',
    selected: true,
    borderColor: 'red',
    color: 'red',
  },
  {
    id: '2',
    label: 'N/A',
    value: 'option3',
  },
];

const radioButtonsData2 = [
  {
    id: '0', // acts as primary key, should be unique and non-empty string
    label: 'Good',
    value: 'option1',
    borderColor: 'green',
    color: 'green',
  },
  {
    id: '1',
    label: 'Bad',
    value: 'option2',
    selected: true,
    borderColor: 'red',
    color: 'red',
  },
  {
    id: '2',
    label: 'N/A',
    value: 'option3',
  },
];

const radioButtonsData3 = [
  {
    id: '0', // acts as primary key, should be unique and non-empty string
    label: 'Good',
    value: 'option1',
    borderColor: 'green',
    color: 'green',
  },
  {
    id: '1',
    label: 'Bad',
    value: 'option2',
    selected: true,
    borderColor: 'red',
    color: 'red',
  },
  {
    id: '2',
    label: 'N/A',
    value: 'option3',
  },
];

const radioButtonsData4 = [
  {
    id: '0', // acts as primary key, should be unique and non-empty string
    label: 'Good',
    value: 'option1',
    borderColor: 'green',
    color: 'green',
  },
  {
    id: '1',
    label: 'Bad',
    value: 'option2',
    selected: true,
    borderColor: 'red',
    color: 'red',
  },
  {
    id: '2',
    label: 'N/A',
    value: 'option3',
  },
];

const bgimage = require('../src/assets/images/background.png');

const productImage = require('../src/assets/images/fireproduct.png');

function CertificateScreen({navigation, route}) {
  const {qrCode, otherParam} = route.params;

  const [galleyImage, setGalleyImage] = useState(
    'https://cdn1.iconfinder.com/data/icons/image-manipulations/100/13-512.png',
  );

  const [attachImage, setAttachImage] = useState(
    'https://icon-library.com/images/img-icon/img-icon-0.jpg',
  );

  const [radioButtons1, setRadioButtons1] = useState(radioButtonsData1);

  const [radioButtons2, setRadioButtons2] = useState(radioButtonsData2);

  const [radioButtons3, setRadioButtons3] = useState(radioButtonsData3);

  const [radioButtons4, setRadioButtons4] = useState(radioButtonsData4);

  function onPressRadioButton1(radioButtonsArray1) {
    setRadioButtons1(radioButtonsArray1);
  }

  function onPressRadioButton2(radioButtonsArray2) {
    setRadioButtons2(radioButtonsArray2);
  }

  function onPressRadioButton3(radioButtonsArray3) {
    setRadioButtons3(radioButtonsArray3);
  }

  function onPressRadioButton4(radioButtonsArray4) {
    setRadioButtons4(radioButtonsArray4);
  }

  const [modalVisible, setModalVisible] = useState(false);

  const openGallery = () => {
    ImagePicker.openPicker({
      cropping: false,
    }).then(image => {
      console.log(image);
      setGalleyImage(image.path);
      setModalVisible(true);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
    }).then(image => {
      console.log(image);
      setAttachImage(image.path);
    });
  };

  return (
    <>
      <Image source={bgimage} style={styles.backgroundImage} />
      <ScrollView>
        <View style={styles.productSection}>
          <Image source={productImage} style={styles.productImage} />

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.certificateButtoncontainer}>
            <Text style={styles.certificateButtontext}> Add Certificate </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: '96%',
            marginTop: 10,
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: '#CCCC',
            borderRadius: 5,
          }}>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> QR-Code Data: </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000000',
                  alignSelf: 'center',
                  paddingHorizontal: 60,
                }}>
                {qrCode}
              </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Description: </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000000',
                  alignSelf: 'center',
                  paddingHorizontal: 80,
                }}>
                {' '}
                Fire Estinguisher{' '}
              </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Location Description: </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000000',
                  alignSelf: 'center',
                  paddingHorizontal: 12,
                }}>
                {' '}
                IT Room{' '}
              </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Equipment: </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000000',
                  alignSelf: 'center',
                  paddingHorizontal: 85,
                }}>
                {' '}
                Fire Equipment{' '}
              </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Equipment Type: </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 17,
                  alignSelf: 'center',
                  color: '#000000',
                  paddingHorizontal: 45,
                }}>
                {' '}
                Fire Safety{' '}
              </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Equipment Family: </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000000',
                  alignSelf: 'center',
                  paddingHorizontal: 30,
                }}>
                {' '}
                Fire Equipment{' '}
              </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Last Inspection Date: </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000000',
                  alignSelf: 'center',
                  paddingHorizontal: 12,
                }}>
                {' '}
                Not Available{' '}
              </Text>
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
              <RadioGroup
                radioButtons={radioButtons1}
                onPress={onPressRadioButton1}
                layout="row"
              />
            </View>

            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 2</Text>
              <RadioGroup
                radioButtons={radioButtons2}
                onPress={onPressRadioButton2}
                layout="row"
              />
            </View>

            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 3</Text>

              <RadioGroup
                radioButtons={radioButtons3}
                onPress={onPressRadioButton3}
                layout="row"
              />
            </View>

            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 4</Text>

              <RadioGroup
                radioButtons={radioButtons4}
                onPress={onPressRadioButton4}
                layout="row"
              />
            </View>
          </View>
        </View>

        <View style={styles.loginButtoncontainer}>
          <TouchableOpacity
            style={styles.attachImageButton}
            onPress={openCamera}>
            <Text style={styles.loginButtontext}> Attach Image </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: attachImage}}
            style={{
              marginTop: 20,
              height: 250,
              width: '80%',
              borderColor: '#CCCC',
              borderWidth: 1,
            }}
          />
        </View>

        <View style={styles.saveButtoncontainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('AdminPanel')}>
            <Text style={styles.loginButtontext}> Save </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={styles.addPicture}
                  onPress={openGallery}>
                  <Text style={styles.textStyle}>Add Picture</Text>
                </TouchableOpacity>

                <View>
                  <Image
                    source={{uri: galleyImage}}
                    style={{
                      margin: 25,
                      height: 100,
                      width: 100,
                      borderWidth: 2,
                      borderColor: '#000',
                      borderRadius: 100,
                    }}
                  />
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text style={{fontSize: 16, color: '#000'}}>
                      {' '}
                      Issue Date:{' '}
                    </Text>

                    <TextInput
                      style={styles.expiryinput}
                      placeholder="DD/MM/YYYY"
                      keyboardType="default"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text style={{fontSize: 16, color: '#000'}}>
                      {' '}
                      Expiry Date:{' '}
                    </Text>

                    <TextInput
                      style={styles.expiryinput}
                      placeholder="DD/MM/YYYY"
                      keyboardType="default"
                    />
                  </View>
                </View>

                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
    borderWidth: 1,
    borderColor: '#CCCC',
    borderRadius: 5,
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
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },

  checklistMaincontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    marginLeft: 8,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#CCCC',
    borderRadius: 5,
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

  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.5,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    width: '80%',
    height: 'auto',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,
    elevation: 25,
  },

  button: {
    width: '100%',
    borderRadius: 3,
    padding: 15,
    elevation: 2,
  },

  addPicture: {
    width: '100%',
    backgroundColor: '#0275db',
    padding: 15,
    borderRadius: 3,
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  buttonClose: {
    backgroundColor: '#5cb85c',
  },

  textStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  expiryinput: {
    height: 45,
    width: 110,
    borderRadius: 3,
    borderColor: '#CCC',
    margin: 15,
    borderWidth: 1,
    padding: 10,
    fontSize: 14,
    alignSelf: 'center',
  },
});

export default CertificateScreen;
