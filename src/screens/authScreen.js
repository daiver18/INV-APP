import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Input, Image, Button, Text } from 'react-native-elements';
import { authgContainerStyle, authScreenContainer } from '../css/authScreenCSS';
import { loginSuccess } from '../actions';
import logo from '../icons/logo-universidad-de-cordoba.png';

class authScreen extends Component {
  state = { userName: '', password: '', buttonState: false }

  botonLogin = () => {
    const { userName, password } = this.state;
    this.setState({ buttonState: true });
    this.props.loginAction(userName, password);
    this.setState({ buttonState: this.props.buttonState });
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
