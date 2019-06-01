import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Header, Left, Icon, Right } from 'native-base';

export default class invScreen extends Component {
  render() {   
    return (
      <View style={{ marginTop: 40 }}>
      <Header style={{ backgroundColor: 'white' }}>
        <Left>
          <Icon
            name='menu'
            onPress={() => this.props.navigation.openDrawer()}
          />
        </Left>
        <Right>
          <Icon
            name='add'
            onPress={() => this.props.navigation.navigate('newItemScreen')}
          />
        </Right>
      </Header>
      <StatusBar 
        barStyle="dark-content"
      />
        <Text>homeScreen</Text>
        <Text>homeScreen</Text>
        <Text>homeScreen</Text>
        <Text>homeScreen</Text>
        <Text>homeScreen</Text>
        <Text>homeScreen</Text>
        <Text>homeScreen</Text>
        <Button
          title='back'
          onPress={() => this.props.navigation.navigate('authScreen')}
        />
      </View>
    );
  }
}
