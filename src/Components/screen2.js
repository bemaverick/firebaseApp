import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { logout } from "../Actions/actionCreator";

class LogoutScreen extends Component {

  render() {
    return (
      <View
        style={styles.mainContainer}>
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

        {/*<TouchableOpacity*/}
          {/*onPress={this.props.logout}*/}
          {/*style={styles.touchableStyles}*/}
        {/*>*/}
          {/*<Text style={{ color: "white", fontSize: 22 }}>Logout</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    );
  }
}

const mapDispatchToProps = {
  logout
};

const NewsItem = connect(null, mapDispatchToProps)(LogoutScreen);

export default NewsItem;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F7F7F7',
    flex: 1
  },
  titleWrap: {
    paddingTop: 5,
    paddingBottom: 15,
  },
  title: {
    fontSize: 25
  },
  text: {
    fontSize: 20,
    lineHeight: 25
  },
  newsBlock: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#f3f3f3'
  }

});
