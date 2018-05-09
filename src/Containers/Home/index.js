import React, { Component } from "react";
import { Text, View, FlatList, ActivityIndicator, Button } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "./../../Actions/actionCreator";
import { logout } from "./../../Actions/actionCreator";


import NewsListItem from './../../Components/NewsListItem'
import newsBase from './../../Services/DataBaseService'

import styles from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finishLoading: false,
      newsKeysArr: [],
      newsValue: {}

    }
  }
  static navigationOptions = {
    headerRight: <Button title={"Sign Out"} onPress={() => console.log(this)} />
  };

  navigate = (item) => {
    const navigateToNewsItem= NavigationActions.navigate({
      routeName: "newsItemScreen",
      params: { item: this.state.newsValue[item] }
    });
    this.props.navigation.dispatch(navigateToNewsItem);
  };



  componentDidMount() {
    newsBase.on('value', (childrenSnapshot) => {
      this.setState({
        newsKeysArr: childrenSnapshot._childKeys,
        newsValue: childrenSnapshot._value,
        finishLoading: true
      })
    })
  }




  renderFlatList() {
    return (
      <FlatList
        data={this.state.newsKeysArr}
        extraData={this.state.newsValue}
        removeClippedSubviews={true}
        keyExtractor={(item, i) => JSON.stringify(item)}
        renderItem={this.renderNewsItem}
        ItemSeparatorComponent={this.renderSeparator}
        ListEmptyComponent={this.renderEmptyBlock}
      />
    )
  }

  renderNewsItem = ({item}) => (
    <NewsListItem
      title={this.state.newsValue[item].title}
      isChecked={this.state.newsValue[item].isChecked}
      goToItem={() => this.navigate(item)}
      checkItem={() => this.markNews(item)}
    />
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
      this.updateNews(item, updatedItem)
    } else {
      let updatedItem = {...this.state.newsValue[item], 'isChecked': true};
      this.updateNews(item, updatedItem)
    }
  };

  updateNews = (item, updatedItem) => {
    this.setState({
      newsValue: {
        ...this.state.newsValue,
        [item]: updatedItem
      }
    })
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
  logout,
  incrementAction,
  decrementAction
};


const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default Home;
