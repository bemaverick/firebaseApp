import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { logout } from "./../../Actions/actionCreator";

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
          <TouchableOpacity
            onPress={this.props.logout}
          >
            <Text style={{ color: "black", fontSize: 22 }}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  logout
};

const NewsItem = connect(null, mapDispatchToProps)(NewsItemScreen);

export default NewsItem;


