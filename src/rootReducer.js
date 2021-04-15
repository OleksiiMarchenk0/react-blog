import { combineReducers } from "redux";
import blogPostInputReducer from "./blogpostInputForm/redux";
import blogpostsReducer from "./Blogposts/redux";

const rootReducer = combineReducers({
    blogPostInput: blogPostInputReducer,
    posts: blogpostsReducer
});

export default rootReducer;