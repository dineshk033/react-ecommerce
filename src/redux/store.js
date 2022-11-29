import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { cartReducer } from "./redux/cart-reducer";

export default createStore(cartReducer, applyMiddleware(logger));
