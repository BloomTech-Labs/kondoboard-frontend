class colMatch {
    static matchJobToCol(column, jobs) {
        for (let i = 0; i < column.savedJobs.length; i++) {
            let matchingJobs = jobs.filter(job => {
                return column.savedJobs.includes(job.jobs_id)
            })

            return matchingJobs;
        }
    }
}

export default colMatch;