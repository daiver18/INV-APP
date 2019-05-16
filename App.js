import React from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './src/store';
import AppScreenContainer from './src/screens/container';
import firebaseconfig from './firebaseConfig';

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(firebaseconfig);
  }
  render() {
    return (
      <Provider store={store}>
        <AppScreenContainer />
      </Provider>
    );
  }
}
