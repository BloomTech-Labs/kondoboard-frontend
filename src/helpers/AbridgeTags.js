class AbrideTag {
    static shortenArr(tags) {
        const display = tags.slice(0, 3).map(tag => {
            return tag;
        })
        return display;
    }
}

export default AbrideTag;