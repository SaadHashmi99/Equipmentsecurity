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

        <View style={styles.certificateButtonContainer}>
          <TouchableOpacity style={styles.certificateButton}>
            <Text style={styles.certificateButtontext}>Open Camera</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.saveButtoncontainer}>
          <TouchableOpacity style={styles.saveButton}>
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

  certificateButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  certificateButton: {
    width: '50%',
    backgroundColor: '#0275DB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
  },

  certificateButtontext: {
    textAlign: 'center',
    paddingVertical: 18,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  saveButtoncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  saveButton: {
    width: '90%',
    marginTop: 70,
    backgroundColor: '#5cb85c',
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

  saveButtontext: {
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  checklistMaincontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 25,
    width: '96%',
    marginLeft: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
  },

  checklistContainer: {
    marginTop: 20,
    width: '90%',
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
