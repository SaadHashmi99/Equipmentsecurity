import React, {useState} from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Modal,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const bgimage = require('../src/assets/images/background.png');

const productImage = require('../src/assets/images/fireproduct.jpg');

const certificateImage = require('../src/assets/images/unnamed.jpg');

const radioButtonsData1 = [
  {
    id: '0', // acts as primary key, should be unique and non-empty string
    label: 'Good',
    value: 'option1',
    borderColor: 'green',
    color: 'green',
    disabled: true,
  },

  {
    id: '1',
    label: 'Bad',
    value: 'option2',
    selected: true,
    borderColor: 'red',
    color: 'red',
    disabled: true,
  },

  {
    id: '2',
    label: 'N/A',
    value: 'option3',
    disabled: true,
  },
];

const radioButtonsData2 = [
  {
    id: '0', // acts as primary key, should be unique and non-empty string
    label: 'Good',
    value: 'option1',
    borderColor: 'green',
    color: 'green',
    disabled: true,
  },
  {
    id: '1',
    label: 'Bad',
    value: 'option2',
    selected: true,
    borderColor: 'red',
    color: 'red',
    disabled: true,
  },
  {
    id: '2',
    label: 'N/A',
    value: 'option3',
    disabled: true,
  },
];

const radioButtonsData3 = [
  {
    id: '0', // acts as primary key, should be unique and non-empty string
    label: 'Good',
    value: 'option1',
    borderColor: 'green',
    color: 'green',
    disabled: true,
  },
  {
    id: '1',
    label: 'Bad',
    value: 'option2',
    selected: true,
    borderColor: 'red',
    color: 'red',
    disabled: true,
  },
  {
    id: '2',
    label: 'N/A',
    value: 'option3',
    disabled: true,
  },
];

const radioButtonsData4 = [
  {
    id: '0', // acts as primary key, should be unique and non-empty string
    label: 'Good',
    value: 'option1',
    borderColor: 'green',
    color: 'green',
    disabled: true,
  },
  {
    id: '1',
    label: 'Bad',
    value: 'option2',
    selected: true,
    borderColor: 'red',
    color: 'red',
    disabled: true,
  },
  {
    id: '2',
    label: 'N/A',
    value: 'option3',
    disabled: true,
  },
];

const EquipmentinfoOne = ({navigation}) => {
  
  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisible2, setModalVisible2] = useState(false);

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

  return (
    <>
      <Image source={bgimage} style={styles.backgroundImage} />
      <ScrollView>
        <View style={styles.productSection}>
          <Image source={productImage} style={styles.productImage} />

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.certificateButtoncontainer}>
            <Text style={styles.certificateButtontext}> View Certificate </Text>
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
                  alignSelf: 'center',
                  paddingHorizontal: 12,
                }}>
                {' '}
                Not Available{' '}
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Grid
            style={{
              borderWidth: 1,
              borderColor: '#CCC',
              width: '90%',
              borderRadius: 3,
              margin: 20,
            }}>
            <Col style={{backgroundColor: '#F4F4F4'}}>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableHeading}>Date</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <TouchableOpacity onPress={() => setModalVisible2(true)}>
                  <Text style={styles.tableText}>10/Dec/2021</Text>
                </TouchableOpacity>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <TouchableOpacity>
                  <Text style={styles.tableText}>10/Dec/2021</Text>
                </TouchableOpacity>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <TouchableOpacity>
                  <Text style={styles.tableText}>10/Dec/2021</Text>
                </TouchableOpacity>
              </Row>
            </Col>

            <Col style={{backgroundColor: '#fff'}}>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableHeading}>User</Text>
              </Row>

              <Row style={styles.alignSelfstyle}>
                <TouchableOpacity>
                  <Text style={styles.tableText}>User 1</Text>
                </TouchableOpacity>
              </Row>

              <Row style={styles.alignSelfstyle}>
                <TouchableOpacity>
                  <Text style={styles.tableText}>User 1</Text>
                </TouchableOpacity>
              </Row>

              <Row style={styles.alignSelfstyle}>
                <TouchableOpacity>
                  <Text style={styles.tableText}>User 1</Text>
                </TouchableOpacity>
              </Row>
            </Col>
          </Grid>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              setModalVisible2(!modalVisible2);
            }}>

              <ScrollView>
            <View style={styles.centeredView}>
              <View style={styles.modalView2}>
                <View style={styles.inputMaincontainer2}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      keyboardType="default"
                      style={styles.dateInput}
                      placeholder="Date"
                    />

                    <TextInput
                      keyboardType="default"
                      style={styles.userInput}
                      placeholder="User"
                    />
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

                <View style={styles.imageContainer}>
                  <Image style={styles.productImage2} source={productImage} />
                  <Text style={styles.pictureText}>
                    Last Inspection Picture
                  </Text>
                </View>

                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible2(!modalVisible2)}>
                  <Text style={styles.textStyle}>Back</Text>
                </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
          </Modal>
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
                <View
                  style={{
                    width: 400,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={certificateImage}
                    style={styles.certificateImagestyles}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 20,
                    marginBottom: 20,
                  }}>
                  <Text style={{fontSize: 16, color: '#000'}}>Issue Date:</Text>

                  <Text> 09/01/2020 </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 0,
                    marginBottom: 20,
                  }}>
                  <Text style={{fontSize: 16, color: '#000'}}>
                    Expiry Date:
                  </Text>

                  <Text> 19/10/2021 </Text>
                </View>

                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Back</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  alignSelfstyle: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },

  tableText: {
    fontSize: 15,
    alignSelf: 'center',
  },

  tableHeading: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#000',
    fontWeight: 'bold',
  },

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

  certificateImagestyles: {
    width: '55%',
    height: 300,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#CCCC',
    borderRadius: 5,
  },

  certificateButtoncontainer: {
    width: '45%',
    backgroundColor: '#2d884d',
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
    width: '100%',
    // marginLeft: 8,
    // marginTop: 20,
    // borderWidth: 1,
    // borderColor: '#CCC',
    // borderRadius: 5,
  },

  checklistContainer: {
    width: '100%',
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
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView2: {
    width: '90%',
    height: 'auto',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 3,
    borderColor: '#CCC',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: 'center',
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

  modalView: {
    width: '80%',
    height: 'auto',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 3,
    borderColor: '#CCC',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: 'center',
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
    backgroundColor: '#2d884d',
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
    width: 110,
    borderRadius: 3,
    borderColor: '#CCC',
    margin: 15,
    borderWidth: 1,
    padding: 10,
    fontSize: 13,
    alignSelf: 'center',
  },

  inputMaincontainer2: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputContainer: {
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  userInput: {
    backgroundColor: '#FFF',
    width: 125,
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#CCC',
    fontSize: 16,
    padding: 10,
  },

  dateInput: {
    backgroundColor: '#FFF',
    width: 125,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 3,
    fontSize: 16,
    padding: 10,
  },

  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  productImage2: {
    width: '45%',
    height: 200,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#CCCC',
    borderRadius: 5,
  },

  pictureText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
});

export default EquipmentinfoOne;
