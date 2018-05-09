import { StackNavigator } from "react-navigation";
//import React, { Component } from "react";
//import { Button, View, TouchableOpacity, StyleSheet, TextInput, FlatList } from "react-native";

import Screen1 from "../Components/screen1";
import Logout from "../Components/screen2";
import Login from "../Components/LoginScreen";

const navigator = StackNavigator({
  login: {
    screen: Login,
    navigationOptions: {
      title: "Signup"
    },
  },
  screen1: {
    screen: Screen1,
    navigationOptions: {
      title: "Home",
      gesturesEnabled: true,
      headerLeft: null,
      //headerRight:  <Button title={"Log out"} onPress={() => console.log('124')} />
    }
  },
  screen2: {
    screen: Logout,
    navigationOptions: {
      title: "News Item"
    },
  }
});

export default navigator;
