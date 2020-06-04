import store from '../store';
import * as Action from '@state/actions.js';
import JobsService from '@services/JobsServices.js';

class JobController {
  async fetchJobsList() {
    const jobList = await JobsService.fetchJobsList();
    store.dispatch(Action.getJobList(jobList));
  }

  async addSavedJob(id, saved_job, status) {
    const job = saved_job;
    // @NOTE: if you aren't going to use 'savedJobList' anywhere then delete everything before 'await'
    const savedJobList = await JobsService.saveJob(id, job, status);
    // @NOTE: is this suppose to be setting savedJob to an empty object?
    store.dispatch(Action.setSavedJob({}));
  }

  async fetchSavedJobList(id) {
    const savedJobList = await JobsService.fetchSavedJobList(id);
    store.dispatch(Action.getSavedList(savedJobList));
  }
}

export default new JobController();
