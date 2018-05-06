import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { login } from "../Actions/actionCreator";

class LoginScreen extends Component {
  static navigationOptions = {
    title: "Signup"
  };
  render() {
    return (
      <View style={styles.rootContainer}>
        <TouchableOpacity
          onPress={this.props.login}
          style={styles.touchableStyles}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyles: {
    textAlign: "center",
    color: "rgba(0,0,0,0.8)",
    fontSize: 16
  },
  touchableStyles: {
    marginTop: 15,
    backgroundColor: "black",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5
  }
});

const mapDispatchToProps = {
  login
};

const Login = connect(null, mapDispatchToProps)(LoginScreen);

export default Login;
