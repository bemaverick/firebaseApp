import React, {Component} from 'react';
import {Text, View, TouchableOpacity, PanResponder} from 'react-native';

import {connect} from 'react-redux';
import {login} from './../../Actions/actionCreator';
import firebase from 'react-native-firebase';

import CustomInput from './../../Components/CustomInput';
import styles from './styles';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import DropdownAlert from 'react-native-dropdownalert';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',

      emailValid: true,
      passwordValid: true
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
    });





  }

  componentWillMount() {
    this.createPanResponder()
  }

  createPanResponder = () => {
    this._PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onPanResponderGrant: this.onPanResponderHandler
    })
  };

  onPanResponderHandler = (event, gestureState) => {
    this.onRegister();
  };

  onLogin = () => {
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the
      // `onAuthStateChanged` listener we set up in App.js earlier
    }).catch((error) => {
      const {code, message} = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
  };
  onRegister = () => {
    if (this.validateEmail(this.state.email) && this.validatePassword(this.state.password)) {
      //const { email, password } = this.state;
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
        console.log(user);
        this.props.login();
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      }).catch((error) => {
        console.log(error);
        this.dropdown.alertWithType('error', 'Error', error);

        const {code, message} = error;
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
    } else {
      this.dropdown.alertWithType('error', 'Error', 'Fill in all the fields');
      this.setState({
        passwordValid: false,
        emailValid: false
      })
    }

  };

  onClose(data) {

  }

  handleInputEntering = (type, text) => {
    this.setState({[type]: text});

    if (type === 'email') {
      this.setState({
        emailValid: this.validateEmail(text)
      })
    } else {
      this.setState({
        passwordValid: this.validatePassword(text)
      })
    }
  };

  validateEmail = (email) => {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };

  validatePassword = (text) => {
    return text && text.length > 5
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.flex1}/>

        <View style={styles.formBlock}>
          <View>
            <View style={styles.mb20}>
              <CustomInput
                secureTextEntry={false}
                placeholderText={'E-Mail'}
                keyboardType={'email-address'}
                onChangeText={(text) => this.handleInputEntering('email', text)}
                text={this.state.email}
                iconName={'ios-mail-outline'}
                valid={this.state.emailValid}
                validateText={'invalid E-Mail address'}
              />
            </View>
            <CustomInput
              secureTextEntry={true}
              placeholderText={'Password'}
              onChangeText={(text) => this.handleInputEntering('password', text)}
              text={this.state.password}
              iconName={'ios-lock-outline'}
              valid={this.state.passwordValid}
              validateText={'password must be at least 6 characters'}
            />
          </View>
          <View style={styles.buttonWrap}>
            <View
              style={styles.roundedBtnStyle}
              {...this._PanResponder.panHandlers}
              >
              <Text style={styles.roundedBtnText}>Sign Up</Text>
            </View>
          </View>
        </View>


        <KeyboardSpacer/>
        <DropdownAlert
          ref={ref => this.dropdown = ref}
          onClose={data => this.onClose(data)}/>
      </View>
    );
  }
}

const mapDispatchToProps = {
  login,
};

const SignUp = connect(null, mapDispatchToProps)(SignUpScreen);

export default SignUp;

