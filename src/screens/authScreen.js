import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { Input, Image, Button, Text } from 'react-native-elements';
import { authgContainerStyle, authScreenContainer } from '../css/authScreenCSS';
import logo from '../icons/logo-universidad-de-cordoba.png';

export default class authScreen extends Component {
  state = { userName: '', pass: '', mensaje: '' }

  botonLogin = async () => {
    const { userName, pass } = this.state;
    await axios.post('https://us-central1-inv-app-cfce0.cloudfunctions.net/login', { userName, pass });
  }
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
              value={this.state.userName}
              onChangeText={userName => this.setState({ userName })}
            />
            <Input
              label='Contraseña'
              labelStyle={{ color: 'black' }}
              placeholder='Password'
              inputContainerStyle={{ marginLeft: -10, marginBottom: 10 }}
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              inputStyle={{ margin: 8 }}
              value={this.state.pass}
              onChangeText={pass => this.setState({ pass })}
            />
            <Button
              title='logIn'
              onPress={this.botonLogin}
            />
            <Text h4>{this.state.mensaje}</Text>
        </View>
      </View>
    );
  }
}
