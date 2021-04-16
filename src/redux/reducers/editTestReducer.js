import * as constants from './../constants';

const initialCreateTestState = {
    test: {
        name: "",
        timeToPass: null,
        questionDtos: []
    }

}

export default function testReducer(state = initialCreateTestState, action) {
    let payload = action.payload;
    switch (action.type) {
        case constants.ADD_TEST_QUESTION:
            return {
                ...state,
                test: {
                    ...state.test, questionDtos: [...state.test.questionDtos, {question: "", answerDtos: []}]
                }
            }
        case constants.ADD_TEST_QUESTION_ANSWER:
            return {
                ...state,
                test: {
                    ...state.test, questionDtos: [...state.test.questionDtos].splice(payload.index, 1,
                        {
                            ...state.test.questionDtos[payload.index],
                            answerDtos: [...state.test.questionDtos[payload.index].answerDtos, payload.answerDto]
                        })
                }
            }
        case constants.HANDLE_QUESTION_FIELD_CHANGE: {
            const questionDtos = [...state.test.questionDtos];
            const { name, value } = payload.event.target;
            questionDtos[payload.questionIndex][name] = value;
            return {
                ...state,
                test: {
                    ...state.test, questionDtos: questionDtos
                }
            }
        }
        case constants.HANDLE_TEST_FIELD_CHANGE: {
            const test = state.test;
            const { name, value } = payload.event.target;
            test[name] = value;
            return {
                ...state, test: {
                    ...state.test, test
                }
            }
        }
        case constants.REMOVE_TEST_QUESTION: {
            let questionDtos = [...state.test.questionDtos];
            questionDtos.splice(payload.index, 1);
            return {
                ...state,
                test: {
                    ...state.test, questionDtos: questionDtos
                }
            }
        }
        default:
            return state
    }
}