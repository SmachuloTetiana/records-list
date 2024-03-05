import { combineReducers } from 'redux';
import { records } from './records';
import { filter } from './filter';

export default combineReducers({
    records,
    filter
})