const initialState = {
    filterBy: {
        type: 'All',
        freeText: ''
    },
    toys: [],
    toysUnfiltered: []
}

export function toyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TOYS':
            return { ...state, toys: action.toys }
        case 'SET_TOYS_UNFILTERED':
            console.log(action.toysUnfiltered);
            return { ...state, toysUnfiltered: action.toysUnfiltered }
        case 'CHANGE_FILTER':
            return { ...state, filterBy: action.filterBy }
        case 'DELETE_TOY':
            return {
                ...state, toys: state.toys.filter(toy => toy._id !== action.toyId)
            }
        case 'ADD_TOY':
            return {
                ...state, toys: [action.toy, ...state.toys]
            }
        case 'EDIT_TOY':
            return {
                ...state, toys: state.toys.map(toy => {
                    return (toy._id === action.toy._id) ? action.toy : toy
                })
            }
        default:
            return state
    }
}
