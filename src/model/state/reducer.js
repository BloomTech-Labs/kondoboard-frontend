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
    savedJobsList: [],
    savedJob: {}
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
        case Actions.SET_JOBS_LIST:
            return {
                ...state,
                jobList: [...action.jobList]
            }
        case Actions.SET_SAVED_JOB_LIST:
            return {
                ...state,
                savedJobsList: [...action.savedJobsList]
            }
        case Actions.SET_SAVED_JOB:
            return {
                ...state,
                savedJob: {
                    ...state.savedJob,
                    title: action.savedJob.title || '',
                    datascience_id: action.savedJob.id || '',
                    source_url: action.savedJob.source_url || '',
                    description: action.savedJob.description || '',
                    date_published: action.savedJob.date_published || '',
                    location_raw: action.savedJob.location_raw || ''
                }
            }
            default:
                return state;
    }
}