import * as constants from './../constants';

export const fetchAllGroups = (page) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `groups/all?page=${page}`,
        success: (response) => (setAllGroups(response))
    }
});

const setAllGroups = (data) => ({
    type: constants.SET_ALL_GROUPS,
    payload: {
        groups: data.content,
        totalPages: data.totalPages,
        currentPage: data.pageable.pageNumber
    }
});

export const createGroup = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method : 'POST',
        url: 'groups',
        data,
        success: (group) => (addGroup(group)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

const addGroup = (group) => ({
    type: constants.ADD_GROUP,
    payload: group
})