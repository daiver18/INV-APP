import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import firebase from 'firebase';
import { Input, Image, Button, Text } from 'react-native-elements';
import { authgContainerStyle, authScreenContainer } from '../css/authScreenCSS';
import { loginSuccess } from '../actions';
import logo from '../icons/logo-universidad-de-cordoba.png';

class authScreen extends Component {
  state = { userName: '', password: '', buttonState: false }

  botonLogin = async () => {
    const { userName, password } = this.state;
    try {
      let { data } = await axios.post('https://us-central1-inv-app-cfce0.cloudfunctions.net/login', { userName, password });
      await firebase.auth().signInWithCustomToken(data.token);
      console.log('login success');
    } catch (error) {
      console.log(error.code, error.message);
    }
    //this.props.loginAction(userName, password);
  }
  nextpage = () => {
    this.props.navigation.navigate('homeScreen');
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
              onChangeText={password => this.setState({ password })}
            />
            <Button
              title='logIn'
              onPress={this.botonLogin}
              loading={this.state.buttonState}
            />
            <Text h4>{this.props.error}</Text>
        </View>
        <Button
              title='next'
              onPress={this.nextpage}
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  const { error, buttonState } = state.auth;
  return {
    error,
    buttonState
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginAction: (userName, password) => dispatch(loginSuccess(userName, password))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(authScreen);
