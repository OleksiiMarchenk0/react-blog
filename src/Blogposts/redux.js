import api from "../api";

const FETCH_POSTS_REQUESTED = "posts/FETCH_POSTS_REQUESTED";
const FETCH_POSTS_SUCCEDED = "posts/FETCH_POSTS_SUCCEDED";
const FETCH_POSTS_FAILED = "posts/FETCH_POSTS_FAILED";

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
    default:
      return state;
  }
};
