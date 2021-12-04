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

const bgimage = require('../src/assets/images/background.png');

const productImage = require('../src/assets/images/fireproduct.jpg');

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

function EquipmentinfoTwo({navigation}) {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  
  return (
    <>
      <Image source={bgimage} style={styles.backgroundImage} />
      <ScrollView>
        <View style={styles.inputMaincontainer}>
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

        <View style={styles.imageContainer}>
          <Image style={styles.productImage} source={productImage} />
          <Text style={styles.pictureText}>Last Inspection Picture</Text>
        </View>

        <View style={{marginTop: 30}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AdminPanel')}
            style={styles.saveButtoncontainer}>
            <Text style={styles.saveButtontext}>Back</Text>
          </TouchableOpacity>
        </View>

        
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  inputMaincontainer: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
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
    width: 150,
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#CCC',
    fontSize: 16,
    padding: 10,
  },

  dateInput: {
    backgroundColor: '#FFF',
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 3,
    fontSize: 16,
    padding: 10,
  },

  certificateButtoncontainer: {
    backgroundColor: 'green',
    alignSelf: 'center',
    borderRadius: 6,
  },

  certificateButtontext: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  productImage: {
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

  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },

  checklistMaincontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    marginLeft: 8,
    marginTop: 30,
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

  saveButtoncontainer: {
    marginBottom: 30,
    width: '50%',
    backgroundColor: '#d9534f',
    alignSelf: 'center',
    borderRadius: 4,
  },

  saveButtontext: {
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default EquipmentinfoTwo;
