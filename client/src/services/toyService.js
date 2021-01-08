import axios from 'axios';

const baseUrl = 'http://localhost:3030/api/toy'

export const toyService = {
    query,
    getToyById,
    removeToy,
    editOrAddToy,
}

function query(filterBy) {
    console.log(filterBy,'frontend');
    return axios.get(baseUrl, { params: filterBy })
        .then(res => res.data)
}

function removeToy(toyId) {
    return axios.delete(`${baseUrl}/${toyId}`)
        .then(res => res.data)
}

function editOrAddToy(editedToy) {
    if (editedToy._id) {
        return axios.put(`${baseUrl}/${editedToy._id}`, editedToy)
            .then(res => res.data)
    } else {
        const newToy = { ...editedToy };
        return axios.post(`${baseUrl}`, newToy)
            .then(res => res.data)
    }
}

function getToyById(toyId) {
    return axios.get(`${baseUrl}/${toyId}`)
        .then(res => res.data);
}