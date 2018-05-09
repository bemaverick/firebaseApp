import { createStore, combineReducers } from "redux";
import {
  persistCombineReducers,
  persistStore,
  persistReducer
} from "redux-persist";
import storage from "redux-persist/es/storage";


import NavigationReducer from "./src/Reducers/navigationReducer";
import loginReducer from "./src/Reducers/loginReducer";


const config = {
  key: "root",
  storage,
  blacklist: ["counterString"]
};

const config1 = {
  key: "primary",
  storage
};


const reducer = {
  NavigationReducer,
  loginReducer
};



const LoginReducer = persistReducer(config1, loginReducer);

const rootReducer = combineReducers({
  NavigationReducer,
  LoginReducer
});

function configureStore() {
  let store = createStore(rootReducer);
  let persistor = persistStore(store);
  return { persistor, store };
}

export default configureStore;
