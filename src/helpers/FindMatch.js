class MatchTags {
    static matchByJobId(jobs, mappedArr) {
        const mapped2Arr = mappedArr.map(item => {
            return item.job_id;
        });
        
        let filteredJobs = jobs.filter(item => {
            return mapped2Arr.includes(item.ds_id);
        });
        console.log(filteredJobs);
        return filteredJobs;
    }
}

export default MatchTags;