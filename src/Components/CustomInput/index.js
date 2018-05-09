import React, { Component } from "react";
import {View, TextInput, TouchableOpacity, Text} from "react-native";

import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: this.props.secureTextEntry
    }
  }

  displayText = () => {
    this.setState((prevState) => {
      return {secureTextEntry: !prevState.secureTextEntry};
    });
  };

  render() {
    let invalidMessage = (
      <Text style={styles.message}>{this.props.validateText}</Text>
    );

    return (
      <View>
        <View style={styles.inputWrap}>
          <View style={styles.inputIconBlock}>
            <Icon name={this.props.iconName} size={27} color="#938987" />
          </View>
          <View style={[
            styles.inputBlock,
            this.props.valid ? null : {borderBottomColor: 'red'}]}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={
                (text) => this.props.onChangeText(text)
              }
              secureTextEntry={this.state.secureTextEntry}
              keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
              placeholder={this.props.placeholderText}
              placeholderTextColor={'#938987'}
              underlineColorAndroid={'transparent'}
              value={this.props.text}
            />

            {
              this.props.secureTextEntry ?
                <TouchableOpacity
                  onPress={() => this.displayText()}
                  style={styles.showTextBtn}>
                  <View style={styles.circleWrap}>
                    <Icon name={'md-help'} size={20} color="#938987" />
                  </View>

                </TouchableOpacity>
                :
                null
            }

          </View>
        </View>
        {
          this.props.valid ?
            null
            :
            invalidMessage

        }
      </View>

    );
  }
}

export default CustomInput;