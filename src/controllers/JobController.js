import store from '../store';
import * as Action from '@state/actions.js';
import JobsService from '@services/JobsServices.js';

class JobController {
    async fetchJobsList() {
        const jobList = await JobsService.fetchJobsList();
        store.dispatch(Action.getJobList(jobList))
    }
}

export default new JobController();