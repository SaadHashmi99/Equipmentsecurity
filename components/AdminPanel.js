import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function AdminPanel() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <>
        <View style={styles.mainContainer}>
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
              containerStyle={{width: "90%"}}
            />
          </View>

          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('')}>
              <Text style={styles.buttonText}> New Inspection </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('')}>
              <Text style={styles.buttonText}> Equipment Info </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('')}>
              <Text style={styles.buttonText}> My Records </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('')}>
              <Text style={styles.buttonText}> My Account </Text>
            </TouchableOpacity>
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  adminHeading: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },

  adminHeadingContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 60,
  },

  button: {
    width: '70%',
    borderRadius: 6,
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
    fontSize: 20,
    textTransform: 'uppercase',
  },

  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  dropdownContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90,

  },

  dropDown: {
    borderColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default AdminPanel;
