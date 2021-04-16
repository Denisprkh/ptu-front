import * as constants from './../constants';

export const fetchAllUsers = (page) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `users/all?page=${page}`,
        success: (response) => (setAllUsers(response))
    }
});

const setAllUsers = (data) => ({
    type: constants.SET_ALL_USERS,
    payload: {
        users: data.content,
        totalPages: data.totalPages,
        currentPage: data.pageable.pageNumber
    }
});

export const banUser = (userId) => ({
    type: constants.API,
    payload : {
        method: 'POST',
        url: `users/ban?userId=${userId}`,
    }
})

export const unBanUser = (userId) => ({
    type: constants.API,
    payload : {
        method: 'POST',
        url: `users/unBan?userId=${userId}`,
    }
})
