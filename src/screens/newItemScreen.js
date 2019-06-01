import React, { Component } from 'react';
import { View, StatusBar, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { Header, Left, Icon, Body, Right } from 'native-base';
import NuevoItemForm from '../componentes/NuevoItemForm';

export default class newItemScreen extends Component {
    static navigationOptions = {
        header: null
    }

  render() {
        return (
            <View style={{ marginTop: 40 }}>
            <StatusBar barStyle='dark-content' />
              <Header style={{ backgroundColor: 'white' }}>
                <Left>
                    <Icon
                        name='arrow-back'
                        onPress={() => this.props.navigation.navigate('inventario')}
                    />
                </Left>
                <Body>
                    <Text h4>Nuevo Item</Text>
                </Body>
                <Right />
              </Header>
              <StatusBar 
                barStyle="dark-content"
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                  <Image
                      style={{ width: 200, height: 200 }}
                      source={{ uri: 'https://previews.123rf.com/images/derzai/derzai1510/derzai151000004/47396141-plantilla-de-la-botella-de-vidrio-transparente-con-tap%C3%B3n-de-rosca-vac%C3%ADo-para-la-medicina-el-jarabe-pastil.jpg' }}
                  />
              </View>
              <NuevoItemForm />
            </View>
          );
  }
}
