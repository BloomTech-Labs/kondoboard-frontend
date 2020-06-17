class FilterByTagName {
    static filterByName(tags, tag) {
        const filteredArr = tags.filter(t => {
            return (t.tag_name === tag)
        })

        return filteredArr;
    }
}

export default FilterByTagName;