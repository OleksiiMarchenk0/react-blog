import api from "./api";

const ENDPOINT = "posts";
const ENDPOINT_CUT = "post";

const FETCH_POSTS_REQUESTED = `${ENDPOINT}/FETCH_POSTS_REQUESTED`;
const FETCH_POSTS_SUCCEDED = `${ENDPOINT}/FETCH_POSTS_SUCCEDED`;
const ADD_POST = `${ENDPOINT_CUT}/ADD_POST`;
const DELETE_POST = `${ENDPOINT_CUT}/DELETE_POST`;
const FETCH_POST_SUCCEDED = `${ENDPOINT_CUT}/FETCH_POST_SUCCEDED`;
const EDIT_POST_SUCCEDED = `${ENDPOINT_CUT}/EDIT_POST_SUCCEDED`;
const INITIAL_STATE = {
  post:{},
  posts: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_POSTS_REQUESTED });
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
const editPostSucceded = (data) => ({
  type: EDIT_POST_SUCCEDED,
  payload: data,
});

export const fetchPosts = () => {
  return async function(dispatch) {
    dispatch(fetchRequested());
    const response = await api.get(ENDPOINT);
    dispatch(fetchSucceded(response));
  };
};
export const setPost = (postValue) => {
  const data = {
    text: postValue,
    id: Date.now(),
  };
  return async function(dispatch) {
    const response = await api.post(ENDPOINT, data);
    dispatch(addPost(response));
  };
};
export const removePost = (id) => {
  return async function(dispatch) {
    const response = await api.delete(ENDPOINT, id);
    dispatch(deletePost(response));
  };
};
export const fetchPost = (id) => {
  return async function(dispatch) {
    const response = await api.get(ENDPOINT, id);
    dispatch(fetchPostSucceded(response));
  };
};
export const editPost = (id, text) => {
  const data = {
    text
  };
  return async function(dispatch) {
    const response = await api.patch(ENDPOINT, data, id);
    dispatch(editPostSucceded(response));
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
        post: post,
      };
    default:
      return state;
  }
};
export default redux;
