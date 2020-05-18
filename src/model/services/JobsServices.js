import axios from 'axios';

const dataUrl = new URL('');
const backUrl = new URL('');

class JobsService {
    async getJobsList() {
        const response = await axios.get(dataUrl);
        return response.data
    }

    async addTaggedJob() {
        const response = await axios.post(`${backUrl}/tagged`, {job});
        return response.data;
    }

    async removeTaggedJob(id) {
        const response = await axios.delete(`${backUrl}/tagged/${id}`)
        return response.data;
    }

    async addAppliedJob() {
        const response = await axios.post(`${backUrl}/applied`, {job})
        return response.data;
    }

    async removeJob() {
        const response = await axios.post(`${backUrl}/removed`, {job});
        return response.data;
    }
}

export default new JobsService;