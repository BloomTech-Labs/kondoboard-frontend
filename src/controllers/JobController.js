import store from '../store';
import * as Action from '@state/actions.js';
import JobsService from '@services/JobsServices.js';

class JobController {
    async fetchJobsList() {
        const jobList = await JobsService.fetchJobsList();
        store.dispatch(Action.getJobList(jobList))
    }
    async addSavedJob(job) {
        const savedJobList = await JobsService.saveJob(job);
        store.dispatch(Action.getSavedList(savedJobList));
        store.dispatch(Action.setSavedJob({}));
    }
    async fetchSavedJobList() {
        const savedJobList = await JobsService.fetchSavedJobList();
        store.dispatch(Action.getSavedList(savedJobList));
    }
}

export default new JobController();