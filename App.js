import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import AppNavigation from "./src/Navigation";
import configureStore from "./store";

const { store, persistor } = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
                    <AppNavigation />
                </PersistGate>
            </Provider>
        );
    }
}
