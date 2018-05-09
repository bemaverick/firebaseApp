import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity,  TextInput, FlatList } from "react-native";
import { login } from "./../../Actions/actionCreator";
import firebase from "react-native-firebase";

import styles from "./styles"



class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

  componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
          console.log(user)
      });


  }


    onLogin = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // If you need to do anything with the user, do it here
            // The user will be logged in automatically by the
            // `onAuthStateChanged` listener we set up in App.js earlier
        })
        .catch((error) => {
            const { code, message } = error;
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
        });
    };
    onRegister = () => {

        //const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            console.log(user)
            this.props.login();
            // If you need to do anything with the user, do it here
            // The user will be logged in automatically by the
            // `onAuthStateChanged` listener we set up in App.js earlier
        })
        .catch((error) => {
            console.log(error)
            const { code, message } = error;
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
        });
    };


  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.formBlock}>
          <View style={styles.inputWrap}>
            <View style={styles.inputIconBlock}>
              <Text>&#128231;</Text>
            </View>
            <View style={styles.inputBlock}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={
                  (email) => this.setState({email})
                }
                keyboardType={'email-address'}
                placeholder={'E-Mail'}
                placeholderTextColor={'#938987'}
                underlineColorAndroid={'transparent'}
                value={this.state.email}
              />
            </View>
          </View>

          <View style={styles.inputWrap}>
            <View style={styles.inputIconBlock}>
              <Text>&#128231;</Text>
            </View>
            <View style={styles.inputBlock}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={
                  (password) => this.setState({password})
                }
                keyboardType={'email-address'}
                placeholder={'Password'}
                secureTextEntry={true}
                placeholderTextColor={'#938987'}
                underlineColorAndroid={'transparent'}
                value={this.state.password}
              />
            </View>
          </View>
        </View>



          <View style={styles.buttonWrap}>
            <TouchableOpacity
              onPress={() => this.onRegister()}
              style={styles.roundedBtnStyle}
            >
              <Text style={styles.roundedBtnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>




      </View>
    );
  }
}



const mapDispatchToProps = {
  login
};

const SignUp = connect(null, mapDispatchToProps)(SignUpScreen);

export default SignUp;

