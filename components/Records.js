import React from 'react';
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

const Records = ({navigation}) => {
  return (
    <>
    <Image
        source={bgimage}
        style={styles.backgroundImage}
      />
    <ScrollView>
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 25, color: "#000"}}>
            My Records
          </Text>
        </View>

        <View style={{marginTop: 20}}>

          <Grid
            style={{
              borderWidth: 1,
              width: '90%',
              borderColor: '#CCC',
              margin: 20,
            }}>

            <Col style={{backgroundColor: "#F4F4F4"}}>
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

            <Col style={{backgroundColor: "#FFF"}}>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableHeading}>Equipment</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Equipment 1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Equipment 1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Equipment 1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Equipment 1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Equipment 1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Equipment 1</Text>
              </Row>
            </Col>

            <Col style={{backgroundColor: "#F4f4f4"}}>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableHeading}>Location</Text>
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

            <Col style={{backgroundColor: "#FFF"}}>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableHeading}>Description</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Desc1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Desc1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Desc1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Desc1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Desc1</Text>
              </Row>
              <Row style={styles.alignSelfstyle}>
                <Text style={styles.tableText}>Desc1</Text>
              </Row>
            </Col>
          </Grid>
        </View>

        <View style={{marginTop: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate('AdminPanel')} style={styles.saveButtoncontainer}>
            <Text style={styles.saveButtontext}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  alignSelfstyle: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },

  tableInnerstyle: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },

  mainContainer: {
    flex: 1,
  },

  tableText: {
    fontSize: 12,
    alignSelf: 'center',
  },

  tableHeading: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#000',
    fontWeight: 'bold',
  },

  saveButtoncontainer: {
    marginTop: 50,
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

  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.5,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});

export default Records;
