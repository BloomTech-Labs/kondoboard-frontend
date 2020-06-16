import axios from 'axios';
import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';

const dataUrl = new URL('https://l24api.kondoboard.org/');
const backEndUrl = new URL('https://kondo-board-api.herokuapp.com/api');

class JobsService { 
    async fetchJobsList() {
        const response = await axios.get(`${dataUrl}/all`);
        return response.data;
    }

    async saveJob(id, job) {
        const ds_id = job.ds_id;
        const source_url = job.source_url;
        const title = job.title;
        const company = job.company;
        const description = job.description;
        const date_published = job.date_published;
        const location_city = job.location_city;
        const location_state = job.location_state;
        const geo_locat = job.geo_locat;
        const response = await axiosWithAuth().post(`${backEndUrl}/jobs/${id}/save_job`, {ds_id, source_url, title, company, description, date_published, location_city, location_state, geo_locat});
        return response.data;
    }

    async fetchSavedJobList(id) {
        const response = await axiosWithAuth().get(`${backEndUrl}/users/${id}/favorite`)
        return response.data;
    }

    async submitTag(tag_name, id, color) {
        const response = await axiosWithAuth().post(`${backEndUrl}/users/${id}/tag`, {tag_name, color})
        return response.data;
    }

    async fetchTagsList(id) {
        const response = await axiosWithAuth().get(`${backEndUrl}/users/${id}/tag`);
        return response.data;
    }

    async queryJob(search, city, state) {
        const response = await axios.post(`${dataUrl}/search/`, {search, city, state})
        return response.data;
    }
}

export default new JobsService();
