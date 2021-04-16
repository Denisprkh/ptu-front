import * as constants from './../constants';

const defaultState = {
    errorMessage: null
};

export default function errorReducer(state = defaultState, action) {
    switch (action.type) {
        case constants.SET_ERROR_MESSAGE:
            return {errorMessage: action.payload};
        default:
            return defaultState;
    }
}

