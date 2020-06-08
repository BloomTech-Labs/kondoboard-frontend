import axios from 'axios';
import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';

const dataUrl = new URL('https://l24api.kondoboard.org/');
const backEndUrl = new URL('https://kondo-board-api.herokuapp.com/api');

class JobsService { 
    async fetchJobsList() {
        const response = await axios.get(`${dataUrl}/all`);
        return response.data;
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