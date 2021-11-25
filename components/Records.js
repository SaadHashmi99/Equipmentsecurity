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
} from 'react-native';
function Records() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 25}}>
            My Records
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <Grid
            style={{
              borderWidth: 1,
              width: '90%',
              borderRadius: 3,
              margin: 20,
              backgroundColor: '#f8f9fa',
            }}>
            <Col>
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

            <Col>
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

            <Col>
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

            <Col>
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
          <TouchableOpacity style={styles.saveButtoncontainer}>
            <Text style={styles.saveButtontext}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  alignSelfstyle: {
    margin: 5,
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
  },
  saveButtoncontainer: {
    marginTop: 50,
    width: '50%',
    backgroundColor: '#d9534f',
    alignSelf: 'center',
    borderRadius: 60,
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

export default Records;
