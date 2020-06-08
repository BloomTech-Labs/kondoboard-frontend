import * as Actions from './actions';
import UserHelpers from '../../helpers/User.js'

const initialState = {
    user: {},
    authStatus: null,
    history: null,
    jobList: [{}],
    savedJobList: [{}],
    savedJobIds: [{}]
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
            default:
                return state;
    }
}