import { toyService } from "../../services/toyService.js";

export function loadToys(filterBy) { // Action Creator
    return (dispatch) => {
        return toyService.query(filterBy)
            .then(toys => {
                const action = {
                    type: 'SET_TOYS',
                    toys
                }
                dispatch(action)
            })
    }
}

export function loadUnfilteredToys(filterBy) { // Action Creator
    console.log('fuck');
    return (dispatch) => {
        return toyService.query(filterBy)
            .then(toysUnfiltered => {
                const action = {
                    type: 'SET_TOYS_UNFILTERED',
                    toysUnfiltered
                }
                dispatch(action)
            })
    }
}

export function setFilter(filterBy) {
    return (dispatch) => {
        const action = {
            type: 'CHANGE_FILTER',
            filterBy
        }
        dispatch(action)
    }
}

export function deleteToy(toyId) {
    return (dispatch) => {
        toyService.removeToy(toyId).then(() => {
            console.log(toyId);
            const action = {
                type: 'DELETE_TOY',
                toyId,
                activity: {
                    txt: 'Deleted a Toy',
                    at: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                }
            }
            dispatch(action);
        })
    }
}

// export function filterToys(filterBy) {
//     return (dispatch) => {
//         return toyService.query(filterBy)
//             .then(() => {
//                 const action = {
//                     type: 'FILTER_TOYS',
//                     filterBy
//                 }
//                 dispatch(action)
//             })

//     }
// }

export function save(toy) {
    return (dispatch) => {
        toyService.editOrAddToy(toy).then(toyToSave => {
            const action = {
                type: `${toy._id ? 'EDIT' : 'ADD'}_TOY`,
                toy: toyToSave,
            }
            console.log(action);
            dispatch(action);
        })
    }
}