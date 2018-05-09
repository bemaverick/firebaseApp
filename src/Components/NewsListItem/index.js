import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import CheckBox from './../CheckBox'

import styles from './styles'

class NewsListItem extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.goToItem}
        style={styles.newsItem}>
        <View style={styles.newsItemTextWrap}>
          <Text numberOfLines={1}>{this.props.title}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.props.checkItem}>
          <CheckBox isChecked={this.props.isChecked}/>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

export default NewsListItem;