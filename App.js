import 'react-native-gesture-handler';
import React from 'react';
import {  StatusBar } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Route } from './src/Routes';

import createCustomStore from './src/redux/createStore';

const App = () => {
  const { store, persistor } = createCustomStore();
  return (
    <Provider store={store}>
      <StatusBar animated barStyle="default" />
        <PersistGate persistor={persistor} loading={null}>
          <Route />
        </PersistGate>
    </Provider>
  );
};

export default App;
