import * as Actions from './actions';
import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';

const initialState = {
    user: {},
    authStatus: null,
    history: null,
    jobList: [],
    job: {}
}

export const reducer = (state = initialState, action) => {

    switch(action.type) {
        case Actions.SET_USER_DATA:
            return {
                ...state,
                user: action.payload
            }
        case Actions.GET_USER:
            axiosWithAuth.get('https://kondo-board-api.herokuapp.com/api/email', action.payload)
            .then(res => {
                
            })
            return {
                ...state,

            }
        case Actions.SET_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        case Actions.GET_JOBS_LIST:
            return {
                ...state,
                jobList: [...action.jobList]
            }
            default:
                return state;
    }
}