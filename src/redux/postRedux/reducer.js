import {
  ERROR_MESSAGE_ADD_POST,
  LOADING_ADD_POST,
  ON_CHANGE_TITLE_POST,
  REMOVE_ADD_POST_DATA,
  SUCCESS_UPLOAD_FILE,
} from "./types";

const initialState = {
  posts: [],
  addPost: {
    loading: false,
    title: "",
    errorEvent: {
      input: "",
      message: "",
    },
  },
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_TITLE_POST:
      return { ...state, addPost: { ...state.addPost, title: action.payload } };

    case SUCCESS_UPLOAD_FILE:
      return { ...state, addPost: { ...state.addPost, loading: false } };

    case LOADING_ADD_POST:
      return { ...state, addPost: { ...state.addPost, loading: true } };

    case ERROR_MESSAGE_ADD_POST:
      return {
        ...state,
        addPost: {
          ...state.addPost,
          loading: false,
          errorEvent: action.payload,
        },
      };

    case REMOVE_ADD_POST_DATA:
      return { ...state, addPost: initialState.addPost };

    default:
      return state;
  }
};
