import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  onChangeTitlePost,
  onClickSubmitPost,
  removeAddPostData,
  uploadFile,
} from "../redux/postRedux/actions";

export default function AddPostPage() {
  const dispatch = useDispatch();
  const { title, loading, errorEvent } = useSelector(
    (state) => state.Post.addPost
  );

  const history = useHistory();

  useEffect(() => {
    return () => {
      dispatch(removeAddPostData());
    };
  }, [dispatch]);

  const _onChangeTitlePost = (e) => {
    dispatch(onChangeTitlePost(e.target.value));
  };

  const _onChangeFile = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    dispatch(uploadFile(formData));
  };

  const _onClickSubmitPost = () => {
    dispatch(onClickSubmitPost(history));
  };

  return (
    <div>
      <label>
        <div>Введите заголовок для статьи</div>
        <input onChange={_onChangeTitlePost} value={title} />
        {errorEvent.input === "title" && <div>{errorEvent.message}</div>}
      </label>
      <label>
        <input
          type="file"
          onChange={(e) => {
            _onChangeFile([...e.target.files]);
          }}
        />
        {errorEvent.input === "file" && <div>{errorEvent.message}</div>}
      </label>
      <button onClick={!loading && _onClickSubmitPost}>
        {loading ? (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Загрузка...</span>
          </div>
        ) : (
          "Отправить"
        )}
      </button>
      {errorEvent.input === "submitBtn" && <div>{errorEvent.message}</div>}
    </div>
  );
}
