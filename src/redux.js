
import api from "./api";

const FETCH_POSTS_REQUESTED = "posts/FETCH_POSTS_REQUESTED";
const FETCH_POSTS_SUCCEDED = "posts/FETCH_POSTS_SUCCEDED";
const FETCH_POSTS_FAILED = "posts/FETCH_POSTS_FAILED";
const ADD_POST = "post/ADD_POST";
const DELETE_POST = "post/DELETE_POST";

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
  return function(dispatch) {
    api
      .post("posts", postValue)
      .then(() => {
        console.log(postValue);
        dispatch(addPost(postValue));
      })
      .catch((error) => {
        // dispatch(fetchFailed(error));
        console.log(error);
      });
  };
};


export default (state = INITIAL_STATE, action) => {
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
      console.log(action);
      return {
        ...state,
        posts:[
          ...state.posts,
          {
            text:action.payload,
          }
        ]
      };
      case DELETE_POST:
        return {};
      default:
      return state;
  }
};
