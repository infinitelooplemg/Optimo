import { Navigation } from "react-native-navigation";
import HomeScreen from "./screens/HomeScreen";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import Orders from "./screens/Orders";
import StatesScreen from "./screens/StatesScreen";

export function registerScreens() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  Navigation.registerComponentWithRedux(
    "Home",
    () => HomeScreen,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "ShoppingCart",
    () => ShoppingCartScreen,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "Orders",
    () => Orders,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "States",
    () => StatesScreen,
    Provider,
    store
  );
}
