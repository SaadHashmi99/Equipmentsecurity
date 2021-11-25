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

function EquipmentinfoTwo() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TextInput
            keyboardType="default"
            style={{
              width: 150,
              height: 40,
              borderWidth: 1,
              borderRadius: 4,
              fontSize: 16,
            }}
            placeholder="Date"
          />

          <TextInput
            keyboardType="default"
            style={{
              width: 150,
              height: 40,
              borderWidth: 1,
              borderRadius: 4,
              fontSize: 16,
            }}
            placeholder="User"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Tag 1
          </Text>

          <RadioGroup radioButtons={radioButtons} layout="row" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Tag 1
          </Text>

          <RadioGroup radioButtons={radioButtons} layout="row" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Tag 1
          </Text>

          <RadioGroup radioButtons={radioButtons} layout="row" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Tag 1
          </Text>

          <RadioGroup radioButtons={radioButtons} layout="row" />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 140, height: 140, marginTop: 20}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />

          <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10}}>
            {' '}
            Last Inspection Picture{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 50,
  },
  productImage: {
    width: 150,
    height: 160,
    marginTop: 20,
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
  descInput: {
    width: '60%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 2,
    fontSize: 15,
    paddingVertical: 2,
    alignSelf: 'center',
  },
});

export default EquipmentinfoTwo;
