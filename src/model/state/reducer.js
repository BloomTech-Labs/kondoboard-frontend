import * as Actions from './actions';

const initialState = {
  user: {},
  authStatus: null,
  // @NOTE: remove history if the hooks experiemtn works
  history: null,
  jobList: [],
  savedJobList: [],
  savedJob: {},
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case Actions.SET_USER_DATA:
      return {
        ...state,
        // @NOTE: make a format helper function that you use on the user data in the controller before you dispatch so that this can just be
        // user: { ...action.user }
        user: {
          ...action.user,
          first_name: action.payload.first_name || '',
          last_name: action.payload.last_name || '',
          email: action.payload.email || '',
          id: action.payload.id || '',
          locations: action.payload.locations || null,
          profile_image: action.payload.profile_image || null,
          remote: action.payload.remote || null,
          skills: action.payload.skills || null,
          user_track: action.payload.user_track || null,
        },
      };
    case Actions.SET_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    case Actions.SET_JOBS_LIST:
      return {
        ...state,
        jobList: [...action.jobList],
      };
    case Actions.SET_SAVED_JOB_LIST:
      return {
        ...state,
        savedJobList: [...action.savedJobList],
      };
    default:
      return state;
  }
};
