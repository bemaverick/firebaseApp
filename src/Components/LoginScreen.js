import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, FlatList } from "react-native";
import { login } from "../Actions/actionCreator";
import firebase from 'react-native-firebase';



const iosConfig = {
    clientId: '955091748082-iq3lo0ib0rhi0efi77h296416df6i9nm.apps.googleusercontent.com',
    appId: '1:955091748082:ios:66abe56dbb0e4b87',
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
const newsRef = rootRef.child('news');

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            news: []
        }
    }

  componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
          console.log(user)
      })
      newsRef.on('value', (childrenSnapshot) => {
          console.log(childrenSnapshot)
      })

  }
  static navigationOptions = {
    title: "Signup"
  };

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
        this.props.login();
        //const { email, password } = this.state;
//        firebase.auth().createUserWithEmailAndPassword('sergomen122@gmail.com', '12412323412')
//        .then((user) => {
//            console.log(user)
//
//            // If you need to do anything with the user, do it here
//            // The user will be logged in automatically by the
//            // `onAuthStateChanged` listener we set up in App.js earlier
//        })
//        .catch((error) => {
//            console.log(error)
//            const { code, message } = error;
//            // For details of error codes, see the docs
//            // The message contains the default Firebase string
//            // representation of the error
//        });
    };

    addNews = () => {


        for (let i = 0; i < 5; i++) {
            console.log(i)
            newsRef.push({
                title: this.state.text + i
            })
        }




    }
  render() {
    return (
      <View style={styles.rootContainer}>
          <TextInput
            style={{
                height: 40,
                width: 200,
                margin: 10,
                padding: 10,
                borderColor: 'black',
                borderWidth: 1,
                color: 'black',
            }}
            onChangeText={
                (text) => this.setState({text})
            }
            value={this.state.text}
          />
          <TouchableOpacity
              onPress={() => this.addNews()}
              style={styles.touchableStyles}
          >
              <Text style={{ color: "white", fontSize: 22 }}>Login</Text>
          </TouchableOpacity>

          <FlatList
            data = {this.state.news}
            renderItem={({ item, index}) => {
                return (
                    <Text>
                        {JSON.stringify(item)}
                    </Text>
                )
            }}
          />

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
