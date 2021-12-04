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
} from 'react-native';

const bgimage = require('../src/assets/images/background.png');

const productImage = require('../src/assets/images/fireproduct.jpg');

function EquipmentinfoOne({navigation}) {
  return (
    <>
      <Image source={bgimage} style={styles.backgroundImage} />
      <ScrollView>
        <View style={styles.productSection}>
          <Image source={productImage} style={styles.productImage} />

          <TouchableOpacity onPress={() => navigation.navigate("EquipmentinfoTwo")} style={styles.certificateButtoncontainer}>
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
                <Text style={styles.tableText}>10/Dec/2021</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>10/Dec/2021</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>10/Dec/2021</Text>
              </Row>
            </Col>

            <Col style={{backgroundColor: '#fff'}}>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableHeading}>User</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>User 1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>User 1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>User 1</Text>
              </Row>
            </Col>
          </Grid>
        </View>
      </ScrollView>
    </>
  );
}

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
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#CCC',
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
});

export default EquipmentinfoOne;
