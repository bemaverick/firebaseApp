import React, {Component} from 'react'
import {View} from 'react-native';

import firebase from 'react-native-firebase'

const iosConfig = {
    clientId: '955091748082-iq3lo0ib0rhi0efi77h296416df6i9nm.apps.googleusercontent.com',
    appID: '1:955091748082:ios:66abe56dbb0e4b87',
    apiKey: 'AIzaSyCpKHZEMC4jN5U-MtyjndJhc1LE-OP_ZGU',
    databaseURL: 'https://fir-authspro.firebaseio.com',
    storageBucket: 'fir-authspro.appspot.com',
    messagingSenderId: '955091748082',
    projectId: 'fir-authspro',
    persistence: true
};

const androidConfig = {

};

const firebaseApp = firebase.initializeApp(
    iosConfig,
    'firebaseApp'
)

const rootRef = firebase.database().ref();
const newsref = rootRef.child('news')