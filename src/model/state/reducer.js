import * as Actions from './actions';
import UserHelpers from '../../helpers/User.js'

const initialState = {
    user: {},
    authStatus: null,
    history: null,
    jobList: [{}],
    savedJobList: [{}],
    savedJobIds: [{}],
    job: {},
    tags: [{
        jobs_id: '',
        name: '',
        color: ''
    }]
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
        case Actions.ADD_NEW_TAG:
            return {
                ...state,
                tags: [...state.tags, action.tags]
            }
            default:
                return state;
    }
}