class DateConversion {
    static convertToDays(date_published) {
        const dayPosted = new Date(date_published)
        const currentDate = new Date();
        const daysAgo = Math.floor((currentDate - dayPosted)/86400000)
            
        return daysAgo;
    }
}

export default DateConversion;