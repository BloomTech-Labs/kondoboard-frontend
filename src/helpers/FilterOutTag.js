class NotTagged {
    static filterOutTag(tags, job_id) {
        const filteredArr = tags.filter(tag => {
            return (tag.job_id !== job_id)
        })

        return filteredArr;
    }
}

export default NotTagged;