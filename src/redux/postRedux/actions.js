import axios from "axios";
import {
  ERROR_MESSAGE_ADD_POST,
  LOADING_ADD_POST,
  ON_CHANGE_TITLE_POST,
  REMOVE_ADD_POST_DATA,
} from "./types";

export const onChangeTitlePost = (value) => {
  return {
    type: ON_CHANGE_TITLE_POST,
    payload: value,
  };
};

export const uploadFile = (formData) => async (dispatch) => {
  dispatch({ type: LOADING_ADD_POST });
  axios
    .post("url", formData)
    .then((response) => {})
    .catch((e) => {
      console.log(e);
      dispatch({
        type: ERROR_MESSAGE_ADD_POST,
        payload: {
          input: "file",
          message: "При загрузке файла что-то пошло не так",
        },
      });
    });
};

export const onClickSubmitPost = (history) => async (dispatch, getState) => {
  dispatch({ type: LOADING_ADD_POST });
  const { title } = getState().Post.addPost;

  if (!title) {
    return dispatch({
      type: ERROR_MESSAGE_ADD_POST,
      payload: { input: "title", message: "Заголовок не может быть пустым" },
    });
  }

  axios
    .post("url", { title })
    .then((response) => {
      history.push("/");
      dispatch(removeAddPostData());
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: ERROR_MESSAGE_ADD_POST,
        payload: { input: "submitBtn", message: "Произошла какая-то ошибка" },
      });
    });
};

export const removeAddPostData = () => {
  return {
    type: REMOVE_ADD_POST_DATA,
  };
};
