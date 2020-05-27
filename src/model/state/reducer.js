import * as Actions from './actions';

const initialState = {
    user: {
        first_name: 'test',
        last_name: 'user',
        email: 'test@test.com',
        profile_img: '',
        user_type: 'web'
    },
    authStatus: null,
    history: null,
    jobList: [],
    job: {}
}

export const reducer = (state = initialState, action) => {

    switch(action.type) {
        case Actions.TYPES.SET_USER_DATA:
            return {
                ...state,
                user: action.payload
            }

        case Actions.TYPES.SET_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        case Actions.GET_JOBS_LIST:
            console.log('reducer', state)
            return {
                ...state,
                jobList: [...action.jobList]
            }
            default:
                return state;
    }
}