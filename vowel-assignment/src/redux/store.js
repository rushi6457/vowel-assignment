import { compose,legacy_createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/userReducer";
import { cartReducer } from "./cart/cartReducer";

const rootReducer = combineReducers({
  auth:authReducer,
 cart:cartReducer
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
  );