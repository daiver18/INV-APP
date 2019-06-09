import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { DatePicker } from 'native-base';
import { Input, Button } from 'react-native-elements';
import { guardarItem } from '../actions';

class NuevoItemForm extends Component {
  state = { 
      itemNombre: '',
      itemDescripcion: '',
      fechaEscogida: new Date(),
      itemSerial: ''
   }

  setDate = (fecha) => {
    this.setState({ item: { fechaEscogida: fecha } });
  }
  
  itemDatos = () => {
    console.log('entten en el boton');
    
    const { itemNombre, itemDescripcion, itemSerial, fechaEscogida } = this.state;
    const item = {
      itemNombre,
      itemDescripcion, 
      itemSerial, 
      fechaEscogida
    };
    this.props.saveItemData(item);
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
            value={this.state.itemNombre}
            onChangeText={itemNombre => this.setState({ itemNombre })}
        />
        <Input
            placeholder='cura dolores'
            label='Descripcion'
            maxLength={70}
            multiline
            labelStyle={{ color: 'black' }}
            containerStyle={{ marginBottom: 10 }}
            value={this.state.itemDescripcion}
            onChangeText={itemDescripcion => this.setState({ itemDescripcion })}
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
            value={this.state.itemSerial}
            onChangeText={itemSerial => this.setState({ itemSerial })}
        />
        <Button
          title='save item'
          onPress={() => this.itemDatos()}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveItemData: (item) => dispatch(guardarItem(item))
  };
}
export default connect(null, mapDispatchToProps)(NuevoItemForm);
