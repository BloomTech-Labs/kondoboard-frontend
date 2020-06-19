import * as Actions from './actions';

const initialState = {
    user: {},
    authStatus: null,
    jobList: [],
    savedJobList: [],
    savedJobIds: [],
    job: {},
    tags: [],
    columns: []
}

export const reducer = (state = initialState, action) => {

    switch(action.type) {
        case Actions.SET_USER_DATA:
            return {
                ...state,
                user: { ...action.payload }
            }
        case Actions.SET_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        case Actions.SET_JOBS_LIST:
            return {
                ...state,
                jobList: [...action.jobList.jobs]
            }
        case Actions.SET_SAVED_JOB_LIST:
            return {
                ...state,
                savedJobList: [...action.savedJobList]
            }
        case Actions.SET_SAVED_JOB_IDS:
            return {
                ...state,
                savedJobIds: [...state.savedJobIds, action.savedJobIds]
            }
        case Actions.SELECT_SAVED_JOB:
            return {
                ...state,
                job: action.job
            }
        case Actions.SET_QUERY_LIST:
            return {
                ...state,
                userQuery: [...action.userQuery.jobs]
            }
        case Actions.SET_FILTER_BOARD:
            return {
                ...state,
                savedJobList: [...action.savedJobList]
            }
        case Actions.ADD_NEW_TAG:
            return {
                ...state,
                tags: [...state.tags, action.tag]
            }
        case Actions.GET_JOB_TAGS:
            return {
                ...state,
                tags: [...action.tags]
            }
        case Actions.GET_APPLIED_JOB:
            console.log('reducer', action)
            return {
                ...state,
                appliedJobList: [...state.appliedJobList, action.appliedJobList]
            }
        case Actions.SELECT_TAGGED_JOBS:
            return {
                ...state,
                taggedJob: [...action.taggedJob]
            }
        case Actions.GET_APPLIED_JOB:
            return {
                ...state,
                columns: [...state.columns, action.columns]
            }
            default:
                return state;
    }
}