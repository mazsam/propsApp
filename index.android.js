/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class propsApp extends Component {
  constructor(){
    super()
    this.state = {
      nama:''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({nama:text})}/>
        <Text style={styles.text}>Saya Adalah {this.state.nama}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  input: {
    width: '100%',
    color: '#000',
    backgroundColor: 'powderblue'
  },
  text:{
    fontSize: 20,
  }
});

AppRegistry.registerComponent('propsApp', () => propsApp);
