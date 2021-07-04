import { combineReducers } from 'redux'
import logData from './loginReducer'
import userData from './userDataReducer'
export default combineReducers({
    logData,
    userData
})