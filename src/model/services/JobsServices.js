import axios from 'axios';
import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';

const dataUrl = new URL('http://kondoboard-ds-environment.eba-u7c3zdzn.us-east-1.elasticbeanstalk.com');
const backEndUrl = new URL('https://kondo-board-api.herokuapp.com/api');

class JobsService { 
  async fetchJobsList() {
    const response = await axios.get(`${dataUrl}/all`);
    return response.data.jobs;
  }

  async saveJob(id, job, status) {
    const response = await axiosWithAuth().post(`${backEndUrl}/jobs/${id}/save_job`, {job, status});
    return response.data;
  }

  async fetchSavedJobList(id) {
    const response = await axiosWithAuth().get(`${backEndUrl}/users/${id}/favorite`)
    return response.data;
  }
}

export default new JobsService();
