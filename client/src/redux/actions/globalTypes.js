export const GLOBALTYPES = {
    LOAD: "LOAD",
    USER: "USER",
    CATEGORIES: "CATEGORIES",
    CHANNELL: "CHANNELL",
    GALLERY: "GALLERY",
    PUBLIC: "PUBLIC"
}

export const EditData = (data, id, post) => {
    const newData = data.map(item =>
        (item._id === id ? post : item)
    )
    return newData;
}

export const DeleteData = (data, id) => {
    console.log(data, id)
    const newData = data.filter(item => item._id !== id)
    return newData;
}