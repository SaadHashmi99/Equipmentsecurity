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
} from 'react-native';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Good',
    value: 'option1',
  },
  {
    id: '2',
    label: 'Bad',
    value: 'option2',
  },
  {
    id: '3',
    label: 'N/A',
    value: 'option3',
  },
];

function ThirdScreen() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        
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

        <View>
          <TouchableOpacity style={styles.certificateButtoncontainer}>
            <Text style={styles.certificateButtontext}>Open Camera</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.saveButtoncontainer}>
            <Text style={styles.saveButtontext}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fafafa',
    flex: 1,
  },
  
  certificateButtoncontainer: {
    backgroundColor: '#0275DB',
    alignSelf: 'center',
    borderRadius: 35,
    marginTop: 20,
  },
  
  certificateButtontext: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  saveButtoncontainer: {
    marginTop: 70,
    width: '60%',
    backgroundColor: '#5cb85c',
    alignSelf: 'center',
    borderRadius: 35,
  },
  
  saveButtontext: {
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },

  checklistContainer: {
    marginTop: 60,
    width: '100%',
    marginBottom: 50,
  },

  headingContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  headingText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
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
});

export default ThirdScreen;
