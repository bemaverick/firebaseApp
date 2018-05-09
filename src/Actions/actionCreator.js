import {
  Login,
  Logout
} from "./actionTypes";



const login = () => ({
  type: Login
});

const logout = () => {
  return {
  type: Logout
}};

export { login, logout };
