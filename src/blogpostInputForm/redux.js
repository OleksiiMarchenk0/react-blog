import api from "../api";

const FETCH_BLOGPOSTS_REQUESTED = "posts/FETCH_BLOGPOSTS_REQUESTED";
const FETCH_BLOGPOSTS_SUCCEDED = "posts/FETCH_BLOGPOSTS_SUCCEDED";
const FETCH_BLOGPOSTS_FAILED = "posts/FETCH_BLOGPOSTS_FAILED";

const INITIAL_STATE = {
  posts: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_BLOGPOSTS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_BLOGPOSTS_FAILED });
const fetchSucceded = (data) => ({
  type: FETCH_BLOGPOSTS_SUCCEDED,
  payload: data,
});
export const fetchBLOGPOSTS = () => {
  return function(dispatch) {
    dispatch(fetchRequested());
    api
      .get("offer")
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
    case FETCH_BLOGPOSTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_BLOGPOSTS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        BLOGPOSTS: action.payload,
      };
    case FETCH_BLOGPOSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
