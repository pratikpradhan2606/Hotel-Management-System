import rootReducer from "./reducer";

import {legacy_createStore} from "redux";

const store=legacy_createStore(rootReducer);

export default store;