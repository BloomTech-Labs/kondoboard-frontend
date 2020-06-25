export const SET_JOBS_LIST = 'GET_JOBS_LIST';
export const SET_SAVED_JOB = 'ADD_TO_TAGGED_LIST';
export const SET_SAVED_JOB_LIST = 'SET_SAVED_JOB_LIST';
export const SET_SAVED_JOB_IDS = 'SET_SAVED_JOB_IDS';
export const SET_QUERY_LIST = 'SET_QUERY_LIST';

export const SELECT_SAVED_JOB = 'SELECT_SAVED_JOB';
export const ADD_NEW_TAG = 'ADD_NEW_TAG';
export const GET_JOB_TAGS = 'GET_JOB_TAGS';
export const SELECT_TAGGED_JOBS = 'SELECT_TAGGED_JOBS';
export const SET_FILTER_BOARD = 'SET_FILTER_BOARD';

export const GET_APPLIED_JOB = 'GET_APPLIED_JOB';
export const GET_APPLIED_JOBS = 'GET_APPLIED_JOBS';
export const GET_JOB_COLUMNS = 'GET_JOB_COLUMNS';
export const GET_JOBS_COLUMNS = 'GET_JOBS_COLUMNS';
export const SET_JOB_COLUMN = 'SET_JOB_COLUMN';
export const PASS_TARGET = 'PASS_TARGET';
export const MOVE_JOB = 'MOVE_JOB';

export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_HISTORY = 'SET_HISTORY';

export const getJobList = jobList => {
  return { type: SET_JOBS_LIST, jobList };
};
 
export const getSavedList = savedJobList => {
  return { type: SET_SAVED_JOB_LIST, savedJobList };
};

export const getQueryList = userQuery => {
  return { type: SET_QUERY_LIST, userQuery };
};

export const getSavedIds = savedJobIds => {
  return { type: SET_SAVED_JOB_IDS, savedJobIds };
};

export const setSavedJob = savedJob => {
  return { type: SET_SAVED_JOB, savedJob };
};

export const selectSavedJob = job => {
  return { type: SELECT_SAVED_JOB, job };
};

export const setTag = tag => {
  return { type: ADD_NEW_TAG, tag };
};

export const getJobTags = tags => {
  return { type: GET_JOB_TAGS, tags };
};

export const setAppliedJob = appliedJobList => {
  return { type: GET_APPLIED_JOB, appliedJobList };
};

export const setSelectTaggedJob = taggedJob => {
  return { type: SELECT_TAGGED_JOBS, taggedJob };
};

export const setFilterBoard = savedJobList => {
  return { type: SET_FILTER_BOARD, savedJobList };
};

export const getJobColumns = columns => {
  return { type: GET_JOB_COLUMNS, columns };
};

export const getJobsColumns = jobsColumns => {
  return { type: GET_JOBS_COLUMNS, jobsColumns };
};

export const setColumn = column => {
  return { type: SET_JOB_COLUMN, column };
};

export const getAppliedList = appliedJobs => {
  return { type: GET_APPLIED_JOBS, appliedJobs };
};

export const passTarget = jobId => {
  return { type: PASS_TARGET, jobId };
};

export const setUserData = user => {
  return { type: SET_USER_DATA, payload: user };
};

export const setHistory = history => {
  return { type: SET_HISTORY, payload: history};
};
