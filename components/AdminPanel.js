import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

const bgImage = require('../src/assets/images/background.png');

function AdminPanel({navigation}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Item 1', value: 'Item 1'},
    {label: 'Item 2', value: 'Item 2'},
  ]);

  return (
    <View>
      <Image source={bgImage} style={styles.backgroundImage} />
      <View style={styles.adminHeadingContainer}>
        <Text style={styles.adminHeading}> Admin Panel </Text>
      </View>

      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          maxWidth={60}
          style={styles.dropDown}
          placeholder="Select a Site"
          containerStyle={{width: '90%'}}
          dropDownContainerStyle={{
            borderRadius: 4,
            borderColor: '#CCC',
          }}
        />
      </View>

      <View style={styles.buttonMainContainer}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('QrCodeCamera')}>
            <Text style={styles.buttonText}> New Inspection </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('EquipmentinfoOne')}>
            <Text style={styles.buttonText}> Equipment Info </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Records')}>
            <Text style={styles.buttonText}> My Records </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Account')}>
            <Text style={styles.buttonText}> My Account </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // mainContainer: {
  //   flex: 1,
  // },
  adminHeading: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },

  adminHeadingContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 60,
  },

  buttonMainContainer: {
    width: '100%',
    marginTop: 15,
  },

  button: {
    width: '60%',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },

  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  dropdownContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },

  dropDown: {
    borderColor: '#CCC',
    borderRadius: 3,
    alignItems: 'center',
    alignSelf: 'center',
  },

  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});

export default AdminPanel;
