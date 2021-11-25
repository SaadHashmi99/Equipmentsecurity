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

function CertificateScreen() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.productSection}>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={styles.productImage}
          />

          <TouchableOpacity style={styles.certificateButtoncontainer}>
            <Text style={styles.certificateButtontext}>Add Certificate</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputMaincontainer}>
          <View style={styles.inputLabelcontainer}>
            <Text style={styles.inputLabeltext}>Description:</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="default"
              style={styles.inputStyles}
              placeholder="Description"
            />
          </View>
        </View>

        <View style={styles.inputMaincontainer}>
          <View style={styles.inputLabelcontainer}>
            <Text style={styles.inputLabeltext}> Location Description: </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="default"
              style={styles.inputStyles}
              placeholder="Location Description"
            />
          </View>
        </View>
        <View style={styles.inputMaincontainer}>
          <View style={styles.inputLabelcontainer}>
            <Text style={styles.inputLabeltext}> Equipment: </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="default"
              style={styles.inputStyles}
              placeholder="Equipment"
            />
          </View>
        </View>
        <View style={styles.inputMaincontainer}>
          <View style={styles.inputLabelcontainer}>
            <Text style={styles.inputLabeltext}> Equipment Type: </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="default"
              style={styles.inputStyles}
              placeholder="Equipment Type"
            />
          </View>
        </View>

        <View style={styles.inputMaincontainer}>
          <View style={styles.inputLabelcontainer}>
            <Text style={styles.inputLabeltext}> Equipment Family: </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="default"
              style={styles.inputStyles}
              placeholder="Equipment Family"
            />
          </View>
        </View>

        <View style={styles.inputMaincontainer}>
          <View style={styles.inputLabelcontainer}>
            <Text style={styles.inputLabeltext}>Last Inspection Date:</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="default"
              style={styles.inputStyles}
              placeholder="Last Inspection Date"
            />
          </View>
        </View>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fafafa',
    flex: 1,
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
  },

  certificateButtoncontainer: {
    backgroundColor: 'green',
    alignSelf: 'center',
    borderRadius: 25,
  },

  certificateButtontext: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
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

export default CertificateScreen;
