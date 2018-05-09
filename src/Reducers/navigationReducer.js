import { NavigationActions } from "react-navigation";

import AppNavigator from "../Navigation/navigationStack";
import { Login, Logout } from "../Actions/actionTypes";

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams(
  "signUpScreen"
);

const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams(
  "homeScreen"
);

const stateForLoggedOut = AppNavigator.router.getStateForAction(
  ActionForLoggedOut
);
const stateForLoggedIn = AppNavigator.router.getStateForAction(
  ActionForLoggedIn
);

const initialState = { stateForLoggedOut, stateForLoggedIn };

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@@redux/INIT":
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          ActionForLoggedIn,
          stateForLoggedOut
        )
      };

    case Login:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          ActionForLoggedIn,
          stateForLoggedOut
        )
      };

    case Logout:
      return {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "signUpScreen" })]
          })
        )
      };

    default:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          action,
          state.stateForLoggedIn
        )
      };
  }
};

export default navigationReducer;
