import store from '../store';
import * as Action from '../model/state/jobs/action.js';
import JobsService from '../model/services/JobsServices.js';

class JobController {
    async fetchJobsList() {
        const jobsList = await JobsService.getJobsList();
        store.dispatch(Action.getJobsList(jobsList))
    }
}

export default new JobController;