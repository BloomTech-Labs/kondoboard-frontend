import * as Actions from './action.js';

const initialState = {
    jobList: [],
    job: {}
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.GET_JOBS_LIST:
          console.log('reducer', state)
          return {
            ...state,
            jobList: [...action.jobList]
          }
        default:
            return state
    }
}