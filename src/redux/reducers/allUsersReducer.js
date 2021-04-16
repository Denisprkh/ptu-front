import * as constants from './../constants';

const initialState = {
    userList: [],
    totalPages: 1,
    currentPage: 1
}

export default function allUsersReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SET_ALL_USERS:
            return {
                userList: action.payload.users,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage
            }
        case constants.RESET_USER_INFO:
            return initialState;
        case constants.BAN_USER:
            return state.userList;
        case constants.UNBAN_USER:
            return state.userList;
        default:
            return state
    }
}