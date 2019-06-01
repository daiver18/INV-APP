import React, { Component } from 'react';
import { View } from 'react-native';
import { DatePicker } from 'native-base';
import { Input } from 'react-native-elements';

export default class NuevoItemForm extends Component {
  state = { fechaEscogida: new Date() }

  setDate = (fecha) => {
    this.setState({ fechaEscogida: fecha });
  }
  render() {
    return (
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Input
            placeholder='paracetamol'
            label='Nombre'
            maxLength={10}
            labelStyle={{ color: 'black' }}
            containerStyle={{ marginBottom: 10 }}
        />
        <Input
            placeholder='cura dolores'
            label='Descripcion'
            maxLength={70}
            multiline
            labelStyle={{ color: 'black' }}
            containerStyle={{ marginBottom: 10 }}
        />
        <DatePicker 
            defaultDate={new Date()}
            minimumDate={new Date()}
            maximumDate={new Date(2019, 12, 31)}
            animationType={'none'}
            placeHolderText="Selecionar fecha de expiracion"
            textStyle={{ color: 'black' }}
            placeHolderTextStyle={{ color: 'black', fontWeight: 'bold' }}
            onDateChange={this.setDate}
        />
        <Input
            placeholder='10/09/2018'
            inputStyle={{ marginTop: -8 }}
            containerStyle={{ marginBottom: 10 }}
            value={this.state.fechaEscogida.toDateString().substr(4, 12)}
            editable={false}
        />
        <Input
            placeholder='100020202020'
            label='Serial'
            labelStyle={{ color: 'black' }}
            containerStyle={{ marginBottom: 10 }}
        />
      </View>
    );
  }
}
