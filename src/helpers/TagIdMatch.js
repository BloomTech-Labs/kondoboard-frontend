class JobTags {
    static matchTagsToJobs(tags, job_id) {
        const filterId = tags.filter(tag => {
            return (tag.job_id === job_id)
        })

        return filterId;
    }
}

export default JobTags;