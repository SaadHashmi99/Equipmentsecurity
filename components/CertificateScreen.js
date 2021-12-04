import React, {useState} from 'react';
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

const productImage = require('../src/assets/images/fireproduct.jpg');

function CertificateScreen({navigation}) {

  const [radioButtons1, setRadioButtons1] = useState(radioButtonsData1);

  const [radioButtons2, setRadioButtons2] = useState(radioButtonsData2);

  const [radioButtons3, setRadioButtons3] = useState(radioButtonsData3);

  const [radioButtons4, setRadioButtons4] = useState(radioButtonsData4);

  function onPressRadioButton1(radioButtonsArray) {
    setRadioButtons1(radioButtonsArray);
  }

  function onPressRadioButton2(radioButtonsArray) {
    setRadioButtons2(radioButtonsArray);
  }

  function onPressRadioButton3(radioButtonsArray) {
    setRadioButtons3(radioButtonsArray);
  }

  function onPressRadioButton4(radioButtonsArray) {
    setRadioButtons4(radioButtonsArray);
  }

  const [modalVisible, setModalVisible] = useState(false);

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

            {/* <SafeAreaView>
              <FlatList
                data={radioButtonsData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView> */}
            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 1</Text>
              <RadioGroup radioButtons={radioButtons1} onPress={onPressRadioButton1} layout="row" />
            </View>

            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 2</Text>
              <RadioGroup radioButtons={radioButtons2} onPress={onPressRadioButton2} layout="row" />
            </View>

            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 3</Text>

              <RadioGroup radioButtons={radioButtons3} onPress={onPressRadioButton3} layout="row" />
            </View>

            <View style={styles.radioButtoncontainer}>
              <Text style={styles.tagText}>Tag 4</Text>

              <RadioGroup radioButtons={radioButtons4} onPress={onPressRadioButton4} layout="row" />
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
                <TouchableOpacity style={styles.addPicture}>
                  <Text style={styles.textStyle}>Add Picture</Text>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 18, color: '#000'}}>
                    {' '}
                    Issue Date:{' '}
                  </Text>

                  <TextInput
                    style={styles.expiryinput}
                    placeholder="DD/MM/YYYY"
                    keyboardType="default"
                  />
                </View>

                <View>
                  <Text> Issue Date </Text>

                  <TextInput
                    style={styles.issueInput}
                    placeholder="DD/MM/YYYY"
                    keyboardType="default"
                  />
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
    fontFamily: 'Poppins-Bold',
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
    opacity: 0.1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    width: '80%',
    height: '70%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  expiryinput: {
    height: 42,
    width: 130,
    borderRadius: 3,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    fontSize: 14,
    alignSelf: 'center',
  },

  issueInput: {
    height: 42,
    width: 130,
    borderRadius: 3,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    fontSize: 14,
    alignSelf: 'center',
  },
});

export default CertificateScreen;
