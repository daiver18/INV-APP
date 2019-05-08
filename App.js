import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import AppScreenContainer from './src/screens/container';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppScreenContainer />
      </Provider>
    );
  }
}
