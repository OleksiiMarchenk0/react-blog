import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogpostPage from "./Blogposts/BlogPostPage/containers/BlogpostPage";
import Layout from "./Layout";
import Navigation from "./Navigation";
import BlogpostsList from "./Blogposts/BlogpostList/containers/BlogpostsList";
import BlogPostForm from "./Blogposts/blogpostInputForm/containers/BlogPostForm";
import "./App.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
        <Navigation/>
          <Switch>
          <Route exact path={"/new"} component={BlogPostForm} />
            <Route exact path={"/posts"} component={BlogpostsList} />
            <Route exact path={"/post/:id"} component={BlogpostPage} />
          </Switch>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
