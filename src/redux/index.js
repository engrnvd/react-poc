import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {videos} from "./modules/videos/videos.reducers";

const reducers = combineReducers({
    videos,
})
const store = createStore(reducers, composeWithDevTools());

export default store;
