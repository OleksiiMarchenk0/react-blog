import { combineReducers } from "redux";
import posts from "./Blogposts/redux";
import comments from "./Comments/redux";

const rootReducer = combineReducers({
    posts,
    comments
});

export default rootReducer;