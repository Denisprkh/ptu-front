import * as constants from "../constants";

export const addQuestion = (data) => ({
    type: constants.ADD_TEST_QUESTION,
    payload: {
        questionDto: data
    }
})

export const handleQuestionFieldChange = (data) => ({
    type: constants.HANDLE_QUESTION_FIELD_CHANGE,
    payload: {
        event: data.event,
        questionIndex: data.index
    }
})

export const handleTestFieldChange = (data) => ({
    type: constants.HANDLE_TEST_FIELD_CHANGE,
    payload: {
        event: data.event
    }
})

export const removeQuestion = (data) => ({
    type: constants.REMOVE_TEST_QUESTION,
    payload: {
         index: data.index
    }
})
