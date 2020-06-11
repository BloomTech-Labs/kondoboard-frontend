import store from '../store';
import * as Action from '@state/actions.js';
import JobsService from '@services/JobsServices.js';

class JobController {
    async fetchJobsList() {
        const jobList = await JobsService.fetchJobsList();
        store.dispatch(Action.getJobList(jobList))
    }
    async addSavedJob(id, saved_job) {
        const job = saved_job;
        await JobsService.saveJob(id, job);
        store.dispatch(Action.setSavedJob({id, job}));
        store.dispatch(Action.getSavedIds(job.ds_id))
    }
    async fetchSavedJobList(id) {
        const savedJobList = await JobsService.fetchSavedJobList(id);
        store.dispatch(Action.getSavedList(savedJobList));
    }
    async searchJobs(search, city, state) {
        const userQuery = await JobsService.queryJob(search, city, state)
        store.dispatch(Action.getQueryList(userQuery))
    }
    async selectJob(job) {
        store.dispatch(Action.selectSavedJob(job))
    }
}

export default new JobController();