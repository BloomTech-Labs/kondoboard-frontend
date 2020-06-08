class Job {
    static formatSavedJob(jobData) {
        const { id, ...job } = { ...jobData };
        return {
            ...job,
            ds_id: id,
        };
    }
}

export default Job;