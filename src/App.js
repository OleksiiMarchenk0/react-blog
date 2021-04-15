import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import BlogPostForm from "./blogpostInputForm/containers/BlogPostForm";
import Blogposts from "./Blogposts/containers/Blogposts";
import "./App.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware)
));



function App() {
  return (
    <Provider store={store}>
      <BlogPostForm />
      <Blogposts/>
    </Provider>
  );
}

export default App;
