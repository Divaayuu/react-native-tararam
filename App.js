/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Image style={styles.gambar}
        source={require('./content/gmbr.jpeg')}/>
        <Text></Text>
        <Text style={styles.blue}>
          Nama : Diva Ayu Kusumawati
          </Text>
          <Text style={styles.blue}>
          Kelas : XI RPL 2\n
          </Text>
             <Text style={styles.blue}>
          No Absen : 15
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  gambar:{
    width: 150,
    height: 150,
  },
  blue:{
    fontSize: 25,
    color: 'yellow',
  }
});
