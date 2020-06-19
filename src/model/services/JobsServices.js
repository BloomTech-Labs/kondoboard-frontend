import axios from 'axios';
import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';

const dataUrl = new URL('https://l24api.kondoboard.org');
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

    async removeTaggedJob(id) {
        const response = await axios.delete(`${backEndUrl}/tagged/${id}`)
        return response.data;
    }

    async addAppliedJob(job) {
        const response = await axios.post(`${backEndUrl}/applied`, {job})
        return response.data;
    }

    async removeJob(job) {
        const response = await axios.post(`${backEndUrl}/removed`, {job});
        return response.data;
    }

    async submitTag(tag_name, id, color, job_id) {
        const response = await axiosWithAuth().post(`${backEndUrl}/users/${id}/tag/`, {tag_name, color, job_id})
        return response.data;
    }

    async fetchTagsList(id) {
        const response = await axiosWithAuth().get(`${backEndUrl}/users/${id}/tag/`);
        return response.data;
    }

    async queryJob(search, city, state) {
        const response = await axios.post(`${dataUrl}/search/`, {search, city, state})
        return response.data;
    }

    async setApplied(id) {
        await axiosWithAuth().put(`${backEndUrl}/users/saved_job/${id}`, {applied: true});
        const response = await axiosWithAuth().get(`${backEndUrl}/users/saved_job/${id}`)
        return response.data;
    }

    async fetchAppliedList(id) {
        const response = await axiosWithAuth().get(`${backEndUrl}/users/${id}/applied`);
        return response.data;
    }

    async getColumns(id) {
        const response = await axiosWithAuth().get(`${backEndUrl}/jobs/${id}/column`)
        return response.data;
    }

    async addColumn(id, name, location) {
        const response = await axiosWithAuth().post(`${backEndUrl}/jobs/column/${id}`, {name, location})
        return response.data;
    }

    async addApplied(users_jobs_id) {
        const columns_id = 6
        const response = await axiosWithAuth().post(`${backEndUrl}/jobs/column/`, {users_jobs_id, columns_id})
        return response.data;
    }

    async updateAppliedCol(users_jobs_id, columns_id) {
        const response = await axiosWithAuth().put(`${backEndUrl}/jobs/column/`, {users_jobs_id, columns_id})
    }
}

export default new JobsService();