import axios from "axios";

import * as constants from './constants';
import { logoutUser } from "./actions/authActionCreators";
import {useHistory} from "react-router";

export const apiMiddleware = ({ dispatch, getState}) => next => action => {
  if(action.type !== constants.API) return next(action);

  dispatch({type: constants.TOGGLE_LOADER});
  const BASE_URL = 'http://localhost:8080/';
  const AUTH_TOKEN = getState().user.token;
  if(AUTH_TOKEN)
      axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
  const {url, method, success, data, postProcessSuccess, postProcessError, getProcessSuccess} = action.payload;
  console.log(BASE_URL + url)
  axios({
      method,
      url: BASE_URL + url,
      data: data ? data : null,
  }).then((response) => {
      dispatch({type: constants.TOGGLE_LOADER});
      if(success) dispatch(success(response.data));
      if(postProcessSuccess) postProcessSuccess(response.data);
      if(getProcessSuccess) getProcessSuccess(response.data);
  }).catch(err => {
      dispatch({type: constants.TOGGLE_LOADER});
      if(!err.response) console.warn(err);
      else {
          if(err.response && err.response.status === 403)
              dispatch(logoutUser());
          if(err.response.data.message) {
              if(postProcessError) postProcessError();
          }
      }
  })
};