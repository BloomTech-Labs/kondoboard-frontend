class SavedJobId {
    static filterJobIds(saved) {
        const savedIds = saved.map(job => {
            return job.ds_id
        })
        return savedIds;
    }
}

export default SavedJobId;