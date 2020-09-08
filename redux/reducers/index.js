import { combineReducers } from 'redux';
import dummy from './dummy';
import modal from './modal';

const rootReducer = combineReducers({
    modal,
    dummy
});

export default rootReducer;
