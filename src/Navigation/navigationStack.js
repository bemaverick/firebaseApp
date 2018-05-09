import { StackNavigator } from "react-navigation";

import Home from "../Containers/Home/";
import NewsItem from "../Containers/NewsItem";
import SignUp from "../Containers/SignUp";

const navigator = StackNavigator({
  signUpScreen: {
    screen: SignUp,
    navigationOptions: {
      title: "Signup"
    },
  },
  homeScreen: {
    screen: Home,
    navigationOptions: {
      title: "Home",
      gesturesEnabled: true,
      headerLeft: null,
    }
  },
  newsItemScreen: {
    screen: NewsItem,
    navigationOptions: {
      title: "News Item"
    },
  }
});

export default navigator;
