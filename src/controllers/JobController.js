import store from '@root/store';
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
    }
    async fetchSavedJobList(id) {
        const savedJobList = await JobsService.fetchSavedJobList(id);
        if (savedJobList.message === undefined) { // message property indicates no saved jobs found response from back end
            store.dispatch(Action.getSavedList(savedJobList));
        } 
 
    }
    async searchJobs(search, city, state) {
        const userQuery = await JobsService.queryJob(search, city, state)
        store.dispatch(Action.getQueryList(userQuery))
    }
    async selectJob(job) {
        store.dispatch(Action.selectSavedJob(job))
    }
    async addTag(tag_name, id, color, job_id) {
        const tag = {tag_name, color, job_id}
        await JobsService.submitTag(tag_name, id, color, job_id)
        store.dispatch(Action.setTag(tag))
    }
    async getJobTags(id) {
        const tags = await JobsService.fetchTagsList(id);
        store.dispatch(Action.getJobTags(tags));
    }
    async selectTaggedJobs(id) {
        store.dispatch(Action.setSelectTaggedJob(id))
    }
    async setApplied(id) {
        const appliedJob = await JobsService.setApplied(id);
        store.dispatch(Action.setAppliedJob(appliedJob))
    }
}

export default new JobController();