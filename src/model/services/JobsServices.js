import axios from 'axios';

const dataUrl = new URL('http://localhost:5000');
const backUrl = new URL('http://localhost:5000');

class JobsService { 
    async getJobsList() {
        const response = await axios.get(dataUrl);
        return response.data
    }

    async addTaggedJob(job) {
        const response = await axios.post(`${backUrl}/tagged`, {job});
        return response.data;
    }

    async removeTaggedJob(id) {
        const response = await axios.delete(`${backUrl}/tagged/${id}`)
        return response.data;
    }

    async addAppliedJob(job) {
        const response = await axios.post(`${backUrl}/applied`, {job})
        return response.data;
    }

    async removeJob(job) {
        const response = await axios.post(`${backUrl}/removed`, {job});
        return response.data;
    }
}

export default new JobsService;