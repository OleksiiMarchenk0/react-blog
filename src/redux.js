import api from "./api";

const FETCH_POSTS_REQUESTED = "posts/FETCH_POSTS_REQUESTED";
const FETCH_POSTS_SUCCEDED = "posts/FETCH_POSTS_SUCCEDED";
const FETCH_POSTS_FAILED = "posts/FETCH_POSTS_FAILED";
const ADD_POST = "post/ADD_POST";
const DELETE_POST = "post/DELETE_POST";
const FETCH_POST_SUCCEDED = "post/FETCH_POST_SUCCEDED";

const INITIAL_STATE = {
  posts: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_POSTS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_POSTS_FAILED });
const fetchSucceded = (data) => ({
  type: FETCH_POSTS_SUCCEDED,
  payload: data,
});
const addPost = (data) => ({ type: ADD_POST, payload: data });
const deletePost = (data) => ({ type: DELETE_POST, payload: data });
const fetchPostSucceded = (data) => ({
  type: FETCH_POST_SUCCEDED,
  payload: data,
});

export const fetchPosts = () => {
  return function(dispatch) {
    dispatch(fetchRequested());
    api
      .get("posts")
      .then((response) => {
        dispatch(fetchSucceded(response));
      })
      .catch((error) => {
        dispatch(fetchFailed(error));
      });
  };
};
export const setPost = (postValue) => {
  const data = {
    text: postValue,
    id: Date.now(),
  };
  return function(dispatch) {
    api
      .post("posts", data)
      .then(() => {
        dispatch(addPost(data));
      })
      .catch((error) => {
        dispatch(fetchFailed(error));
      });
  };
};
export const removePost = (id) => {
  return function(dispatch) {
    api
      .delete("posts", id)
      .then(() => {
        dispatch(deletePost(id));
      })
      .catch((error) => {
        dispatch(fetchFailed(error));
      });
  };
};
export const fetchPost = (id) => {
  console.log("it works", id);
  return function(dispatch) {
    api
      .get("posts", id)
      .then((response) => {
      console.log(response);
        dispatch(fetchPostSucceded(response));
      })
      .catch((error) => {
        dispatch(fetchFailed(error));
      });
  };
};
const redux = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_POSTS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            text: action.payload.text,
            id: action.payload.id,
          },
        ],
      };
    case DELETE_POST:
      let posts = state.posts.filter((post) => post.id !== action.payload);
      return {
        ...state,
        posts: posts,
      };
    case FETCH_POST_SUCCEDED:
      let post = action.payload;

      return {
        ...state,
        posts: [post],
      };
    default:
      return state;
  }
};
export default redux;
