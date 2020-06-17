class FilterByTagName {
    static filterByName(tags, tag) {
        console.log('helper', tag)
        const filteredArr = tags.filter(t => {
            return (t.tag_name === tag)
        })

        console.log(filteredArr)
        return filteredArr;
    }
}

export default FilterByTagName;