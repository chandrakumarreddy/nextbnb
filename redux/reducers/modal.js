const modal = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_MODAL':
            return action.payload;
        default:
            return state;
    }
};

export default modal;
