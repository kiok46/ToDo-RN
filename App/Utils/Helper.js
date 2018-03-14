
/*
    @params uniqueId - uniqueId, usually a long string generated using uuid library.
    @params todoData - a list to iterate and find the particular id from array of object.
*/
export const returnIndex = (uniqueId, todoData) => {
    const idx = todoData.findIndex((p) => {
        return p.id === uniqueId
    })
    return idx
}