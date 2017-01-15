// Using combineReducers for when we add additional reducers
import { combineReducers } from 'redux';

import settings from './settings';

/*
 * When using the @connect decorator or accessing the store properties,
 * the name of the reducer (exported below) represent the 'store' and the
 * properites will be represented by the initial state in the reducers es6 module
 */
export default combineReducers({
    settings,
});
