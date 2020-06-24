class column {
    static filterApply(columns) {
        const appliedColumn = columns.filter(column => {
            return column.name === 'Applied'
        })
        const column_id = appliedColumn.map(column => {
            return column.id
        })
        const columns_id = column_id.pop([0])

        return columns_id;
    }
}

export default column;