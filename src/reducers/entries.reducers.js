export const entriesReducer = (state = initialEntries, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return state.concat({...action.payload})
        case 'REMOVE_ENTRY':
            return state.filter(entry => entry.id !== action.payload.id)
        default:
            return state
    }
}

export const initialEntries = [
    {
        id: 1,
        description:'Work income redux',
        value: 1000.00,
        isExpense:false
    },
    {
        id: 2,
        description:'Water bill redux',
        value: 20.00,
        isExpense:true
    },
    {
        id: 3,
        description:'Rent redux',
        value: 300.00,
        isExpense:true
    }
];
