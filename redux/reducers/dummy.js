const dummy = (state = [], action) => {
    switch (action.type) {
        case 'DUMMY_SUCCESS':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default dummy;
