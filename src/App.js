import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import BlogPostForm from "./blogpostInputForm/containers/BlogPostForm";
import BlogpostsList from "./BlogpostList/containers/BlogpostsList";
import "./App.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <BlogPostForm />
      <BlogpostsList />
    </Provider>
  );
}

export default App;
