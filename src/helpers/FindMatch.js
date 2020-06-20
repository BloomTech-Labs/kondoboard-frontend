class MatchTags {
  static matchByJobId(jobs, mappedArr) {
    const mapped2Arr = mappedArr.map(item => {
      return item.job_id;
    });
    for (let i = 0; i < mapped2Arr.length + 1; i++) {
      const filteredJobs = jobs.filter(item => {
        return mapped2Arr.includes(item.ds_id);
      });
      return filteredJobs;
    }
  }
}

export default MatchTags;
