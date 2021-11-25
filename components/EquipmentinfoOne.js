import React from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
function EquipmentinfoOne() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={styles.productImage}
          />

          <TouchableOpacity style={styles.certificateButtoncontainer}>
            <Text style={styles.certificateButtontext}>View Certificate</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            {' '}
            Description:{' '}
          </Text>

          <TextInput
            keyboardType="default"
            style={styles.descInput}
            placeholder="Description"
          />
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text
            style={{
              color: '#000',
              marginRight: 15,
              marginLeft: 4,
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 5,
              textAlign: 'center',
            }}>
            {' '}
            Location Description:{' '}
          </Text>

          <TextInput
            keyboardType="default"
            style={styles.descInput}
            placeholder="Location Description"
          />
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text
            style={{
              color: '#000',
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 5,
              marginRight: 55,
              marginLeft: 14,
              textAlign: 'center',
            }}>
            {' '}
            Equipment:{' '}
          </Text>

          <TextInput
            keyboardType="default"
            style={styles.descInput}
            placeholder="Equipment"
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
              color: '#000',
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            {' '}
            Equipment Type:{' '}
          </Text>

          <TextInput
            keyboardType="default"
            style={styles.descInput}
            placeholder="Equipment Type"
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
              color: '#000',
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            {' '}
            Equipment Family:{' '}
          </Text>

          <TextInput
            keyboardType="default"
            style={styles.descInput}
            placeholder="Equipment Family"
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
              color: '#000',
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            {' '}
            Last Inspection Date:{' '}
          </Text>

          <TextInput
            keyboardType="default"
            style={styles.descInput}
            placeholder="Last Inspection Date"
          />
        </View>

        <View style={{marginTop: 20,}}>
          <Grid
            style={{borderWidth: 1, width: '90%', borderRadius: 3, margin: 20, backgroundColor: "#f8f9fa"}}>
            <Col>
              <Row style={styles.alignSelfstyle}>
                <Text style={{fontSize: 18}}>Date</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text>10/Dec/2021</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text>10/Dec/2021</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text>10/Dec/2021</Text>
              </Row>
            </Col>

            <Col>
              <Row style={styles.alignSelfstyle}>
                <Text>Users</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text>User1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text>User2</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text>User3</Text>
              </Row>
            </Col>
          </Grid>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  alignSelfstyle: {
    margin: 5,
    alignSelf: 'center',
  },
});

export default EquipmentinfoOne;
