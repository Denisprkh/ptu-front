import * as constants from './../constants';

export const setErrorMessage = (data) => {
    console.log(data)
    return {type: constants.SET_ERROR_MESSAGE, payload: data.message}
}