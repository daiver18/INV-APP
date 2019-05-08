import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, Image } from 'react-native-elements';
import { authgContainerStyle, authScreenContainer } from '../css/authScreenCSS';
import logo from '../icons/logo-universidad-de-cordoba.png';

export default class authScreen extends Component {
  render() {
    return (
      <View style={authScreenContainer}>
        <View style={authgContainerStyle}>
              <Image
                source={logo}
                style={{ width: 65, height: 91, marginBottom: 30 }}
              />
            <Input
              label='Usuario'
              labelStyle={{ color: 'black' }}
              placeholder='UserName'
              inputContainerStyle={{ marginLeft: -10, marginBottom: 30 }}
              leftIcon={{ type: 'font-awesome', name: 'user' }}
              shake
              inputStyle={{ margin: 8 }}
            />
            <Input
              label='Contraseña'
              labelStyle={{ color: 'black' }}
              placeholder='Password'
              inputContainerStyle={{ marginLeft: -10, marginBottom: 10 }}
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              inputStyle={{ margin: 8 }}
            />
        </View>
      </View>
    );
  }
}
