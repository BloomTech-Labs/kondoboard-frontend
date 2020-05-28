export const SET_JOBS_LIST = 'GET_JOBS_LIST';
export const SET_SAVED_JOB = 'ADD_TO_TAGGED_LIST';
export const SET_SAVED_JOB_LIST = 'GET_SAVED_LIST';

export const TYPES = {
    SET_USER_DATA: 'SET_USER_DATA',
    SET_HISTORY: 'SET_HISTORY'
}

export const getJobList = jobList => {
    return { type: SET_JOBS_LIST, jobList }
}

export const getSavedList = savedJobList => {
    return { type: SET_SAVED_JOB_LIST, savedJobList }
}

export const setSavedJob = savedJob => {
    return { type: SET_SAVED_JOB, savedJob }
}

export const setUserData = userData => {
    return { type: TYPES.SET_USER_DATA, payload: userData }
}

export const setHistory = history => {
    return { type: TYPES.SET_HISTORY, payload: history}
}