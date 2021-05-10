import * as constants from "../constants";

export const fetchAllTests = (page) => ({
    type: constants.API, payload: {
        method: 'GET',
        url: `tests/all?page=${page}`,
        success: (response) => (setAllTests(response))
    }
});

const setAllTests = (data) => ({
    type: constants.SET_ALL_TESTS,
    payload: {
        tests: data.content,
        totalPages: data.totalPages,
        currentPage: data.pageable.pageNumber
    }
});

