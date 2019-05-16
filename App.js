import React from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './src/store';
import AppScreenContainer from './src/screens/container';

export default class App extends React.Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCU2idxtGjyKUyLILLVWeLn1qmswRD--wE',
      authDomain: 'inv-app-cfce0.firebaseapp.com',
      databaseURL: 'https://inv-app-cfce0.firebaseio.com',
      projectId: 'inv-app-cfce0',
      storageBucket: 'inv-app-cfce0.appspot.com',
      messagingSenderId: '484861582270',
      appId: '1:484861582270:web:0a25102b370b0df4'
    };
    
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={store}>
        <AppScreenContainer />
      </Provider>
    );
  }
}
