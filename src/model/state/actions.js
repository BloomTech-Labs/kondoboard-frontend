export const GET_JOBS_LIST = 'GET_JOBS_LIST';
export const ADD_TO_TAGGED_LIST = 'ADD_TO_TAGGED_LIST';
export const REMOVE_FROM_TAGGED_LIST = 'REMOVE_FROM_TAGGED_LIST';
export const ADD_TO_APPLIED_LIST = 'ADD_TO_APPLIED_LIST';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_HISTORY = 'SET_HISTORY';
export const GET_USER = 'GET_USER';

export const getJobList = jobList => {
    return { type: GET_JOBS_LIST, jobList }
}

export const addToTaggedList = taggedList => {
    return { type: ADD_TO_TAGGED_LIST, taggedList }
}

export const removeFromTaggedList = taggedList => {
    return { type: REMOVE_FROM_TAGGED_LIST, taggedList }
}

export const addToAppliedList = appliedList => {
    return { type: ADD_TO_APPLIED_LIST, appliedList }
}

export const setUserData = userData => {
    return { type: SET_USER_DATA, payload: userData }
}
export const getUser = email => {
    return {type: GET_USER, payload: email}
}
export const setHistory = history => {
    return { type: SET_HISTORY, payload: history}
}