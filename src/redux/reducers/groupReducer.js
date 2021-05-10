import * as constants from './../constants';

const initialState = {
    groupList: [],
    totalPages: 1,
    currentPage: 1
}

export default function groupReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SET_ALL_GROUPS:
            return {groupList: action.payload.groups, totalPages: action.payload.totalPages, currentPage: action.payload.currentPage}
        case constants.ADD_GROUP:
            return {groupList: state.groupList.concat(action.payload), ...state.totalPages, ...state.currentPage};
        case constants.RESET_USER_INFO:
            return initialState;
        default: return state

    }
}