import { combineReducers } from 'redux'
import user from './UserReducer'
import purpose from './PurposeReducer'


export default combineReducers({
    user: user,
    purpose: purpose
});