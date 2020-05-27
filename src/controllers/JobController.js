import store from '../store';
import * as Action from '../model/state/jobs/action.js';
import JobsService from '../model/services/JobsServices.js';

class JobController {
    async fetchJobsList() {
        const jobList = await JobsService.fetchJobsList();
        store.dispatch(Action.getJobList(jobList))
        console.log('controller', jobList)
    }
}

export default new JobController();