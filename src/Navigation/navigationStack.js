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
      //headerRight:  <Button title={"Log out"} onPress={() => console.log('124')} />
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
