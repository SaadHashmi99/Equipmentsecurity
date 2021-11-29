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

function CertificateScreen() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

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

        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: '95%',
            backgroundColor: '#fff',
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 3,
            paddingBottom: 20,
          }}>
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
        </View>

        <View style={styles.checklistMaincontainer}>
          <View style={styles.checklistContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}> Checklist </Text>
              {/* <Text style={{}}> Checklist </Text> */}
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

        <View style={styles.loginButtoncontainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtontext}> Save </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
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
    width: '40%',
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
    marginTop: 12,
  },

  inputLabelcontainer: {
    marginLeft: 15,
    marginBottom: 7,
  },

  inputLabeltext: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: "Estonia-Regular",
    fontSize: 15,
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

  checklistMaincontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
    width: '96%',
    marginLeft: 8,
    borderRadius: 6,
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
    width: '95%',
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
    fontFamily:'Estonia-Regular'
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
    marginBottom: 30,
  },
});

export default CertificateScreen;
