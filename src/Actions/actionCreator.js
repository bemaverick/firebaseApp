import {
  incrementCounter,
  decrementCounter,
  Login,
  Logout
} from "./actionTypes";

const incrementAction = () => ({
  type: incrementCounter
});

const decrementAction = () => ({
  type: decrementCounter
});

const login = () => ({
  type: Login
});

const logout = () => {
  console.log('logout')
  return {
  type: Logout
}};

export { incrementAction, decrementAction, login, logout };
