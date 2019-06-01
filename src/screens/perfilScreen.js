import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button } from 'react-native-elements';

export default class perfilScreen extends Component {

  logOut = async () => {
    try {
      await firebase.auth().signOut();
      console.log('lof out successful');
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <View>
          <Text>perfilScreen</Text>
          <Text>perfilScreen</Text>
          <Text>perfilScreen</Text>
          <Text>perfilScreen</Text>
          <Text>perfilScreen</Text>
          <Text>perfilScreen</Text>
          <Text>perfilScreen</Text>
          <Text>perfilScreen</Text>
          <Text>perfilScreen</Text>
          <Button
            title='log out'
            onPress={this.logOut}
          />
      </View>
    );
  }
}
