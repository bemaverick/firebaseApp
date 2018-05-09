import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import AppNavigation from "./src/Navigation";
import configureStore from "./store";

const { store, persistor } = configureStore();

export default class App extends Component {

    render() {
      let loading = (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
      return (
            <Provider store={store}>
                <PersistGate loading={loading} persistor={persistor}>
                    <AppNavigation />
                </PersistGate>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
