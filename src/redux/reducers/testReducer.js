import * as constants from './../constants';

const initialAllTestState = {
    testList: [],
    totalPages: 1,
    currentPage: 1
}

export default function testReducer(state = initialAllTestState, action) {
    let payload = action.payload;
    switch (action.type) {
        case constants.SET_ALL_TESTS:
            return {
                testList: payload.tests,
                totalPages: payload.totalPages,
                currentPage: payload.currentPage
            }
        default:
            return state
    }
}