import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../Actions/actionCreator";
import styles from './styles';
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

class Screen1View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsKeysArr: [],
      newsValue: {}

    }
  }

  componentDidMount() {

    newsRef.on('value', (childrenSnapshot) => {
      console.log(childrenSnapshot)
      this.setState({newsKeysArr: childrenSnapshot._childKeys, newsValue: childrenSnapshot._value},() =>{
        console.log(this.state.newsArr)
      })
    })
  }
  static navigationOptions = {
    title: "Home",
    gesturesEnabled: true,
    headerLeft: null
  };

  navigate = () => {
    const navigateToScreen2 = NavigationActions.navigate({
      routeName: "screen2",
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(navigateToScreen2);
  };

  renderFlatList() {
    return (
      <FlatList
        data={this.state.newsKeysArr}
        removeClippedSubviews={true}
        keyExtractor={(item, i) => JSON.stringify(item)}
        renderItem={this.renderNewsItem}
        ItemSeparatorComponent={this.renderSeparator}
        ListEmptyComponent={this.renderEmptyBlock}
      />
    )
  }

  renderNewsItem = ({item}) => (
    <TouchableOpacity
      onPress={this.navigate}
      style={styles.newsItem}>
      <View style={styles.newsItemTextWrap}>
        <Text numberOfLines={1}>{this.state.newsValue[item].title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => this.markNews(item)}>
        {
          this.state.newsValue[item].isChecked ?
            <View style={styles.checkBoxBlock}>
              <View style={styles.checkBoxItem}>
                <Text style={styles.checkIcon}>&#9744;</Text>
              </View>
              <View style={[styles.checkBoxItem, styles.checkItem]}>
                <Text style={styles.checkIcon}>&#10003;</Text>
              </View>
            </View>
            :
            <View style={styles.checkBoxBlock}>
              <View style={styles.checkBoxItem}>
                <Text style={styles.checkIcon}>&#9744;</Text>
              </View>
            </View>
        }
      </TouchableOpacity>
    </TouchableOpacity>
  );
  renderSeparator = () => (
    <View style={styles.newsSeparator}>
      <View style={styles.horizontalLine} />
    </View>
  );

  renderEmptyBlock = () => {
    if (this.state.finishLoading) {
      return (
        <View style={styles.emptyBlock}>
          <Text style={styles.checkIcon}>Упс, нет новостей</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.emptyBlock}>
          <ActivityIndicator />
        </View>
      )
    }

  };

  markNews = (item) => {
    if (this.state.newsValue[item].isChecked) {

      let updatedItem = {...this.state.newsValue[item], 'isChecked': false};
      this.setState({
        newsValue: {
          ...this.state.newsValue,
          [item]: updatedItem
        }
      })
    }

  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderFlatList()}
      </View>
    )
  }
}



const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter,
  counterString: state.CounterReducer.counterString
});

const mapDispatchToProps = {
  incrementAction,
  decrementAction
};

const Screen1 = connect(mapStateToProps, mapDispatchToProps)(Screen1View);

export default Screen1;
