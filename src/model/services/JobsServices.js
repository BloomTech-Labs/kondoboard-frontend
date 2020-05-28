import axios from 'axios';

const dataUrl = new URL('http://kondoboard-ds-environment.eba-u7c3zdzn.us-east-1.elasticbeanstalk.com');
const backEndUrl = new URL('https://kondo-board-api.herokuapp.com/api');

class JobsService { 
    async fetchJobsList() {
        const response = await axios.get(`${dataUrl}/all`);
        return response.data.jobs;
    }

    async saveJob(id, job) {
        const response = await axios.post(`${backEndUrl}/users/${id}/favorite_jobs`, {job})
        return response.data;
    }

    async fetchSavedJobList(id) {
        const response = await axios.get(`${backEndUrl}/users/${id}/favorite_jobs`)
        return response.data;
    }
}

export default new JobsService();