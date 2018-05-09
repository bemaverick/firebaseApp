import React, { Component } from "react";
import { Text, View,  ScrollView } from "react-native";

import styles from "./styles"

class NewsItemScreen extends Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.newsBlock}>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>
                {this.props.navigation.state.params.item.title}
              </Text>
            </View>
            <Text style={styles.text}>
              {this.props.navigation.state.params.item.description}
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}




export default NewsItemScreen;


