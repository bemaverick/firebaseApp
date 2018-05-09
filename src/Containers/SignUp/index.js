import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity,  TextInput, FlatList } from "react-native";
import { login } from "./../../Actions/actionCreator";
import firebase from "react-native-firebase";

import CustomInput from './../../Components/CustomInput'


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

  handleInputEntering = (type, text) => {
    this.setState({[type]: text}, () => {
      console.log(this.state)
    })
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.formBlock}>
          <View style={styles.mb20}>
            <CustomInput
              secureTextEntry={false}
              placeholderText={'E-Mail'}
              keyboardType={'email-address'}
              onChangeText={(text) => this.handleInputEntering('email', text)}
              text={this.state.email}
              iconName={'ios-mail-outline'}
            />
          </View>


          <CustomInput
            secureTextEntry={true}
            placeholderText={'Password'}
            onChangeText={(text) => this.handleInputEntering('password', text)}
            text={this.state.password}
            iconName={'ios-lock-outline'}
          />
        </View>
          <View style={styles.buttonWrap}>
            <TouchableOpacity
              onPress={() => this.onRegister()}
              style={styles.roundedBtnStyle}>
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

