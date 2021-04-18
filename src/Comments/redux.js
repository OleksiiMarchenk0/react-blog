import api from "../api";

const ENDPOINT = "comments";
const FETCH_COMMENTS_REQUESTED = `${ENDPOINT}/FETCH_COMMENTS_REQUESTED`;
const FETCH_COMMENTS_SUCCEDED = `${ENDPOINT}/FETCH_COMMENTS_SUCCEDED`;
const ADD_COMMENT = `${ENDPOINT}/ADD_COMMENT`;
const INITIAL_STATE = {
  comment: {},
  comments: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_COMMENTS_REQUESTED });
const fetchSucceded = (data, blogPostId) => ({
  type: FETCH_COMMENTS_SUCCEDED,
  payload: data,
  blogPostId
});
const addComment = (data) => ({ type: ADD_COMMENT, payload: data });

export const fetchComments = (blogPostId) => {
  return async function(dispatch) {
    dispatch(fetchRequested());
    const response = await api.get(ENDPOINT);
    dispatch(fetchSucceded(response, blogPostId));
  };
};
export const setComment = (comment) => {
  const data = {
    text: comment,
    commentId: Date.now(),
  };
  return async function(dispatch) {
    const response = await api.post(ENDPOINT, data);
    dispatch(addComment(response));
  };
};

const redux = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_COMMENTS_SUCCEDED:
      const allcomments = action.payload;
      let comments = allcomments.filter(comment => comment.blogPostId === parseInt(action.blogPostId));
      return {
        ...state,
        isLoading: false,
        isError: false,
        comments: comments,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            text: action.payload.text,
            id: action.payload.id,
          },
        ],
      };
    default:
      return state;
  }
};
export default redux;
