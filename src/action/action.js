import { loginData, userData } from '../data/data'
import * as constants from '../constants/constants'
const logData = {
    status: '404',
    loggedIn: false
}
export const login = (username, password) => {
    if (username === loginData.username && password === loginData.password) {
        return {
            type: constants.LOG,
            payLoad: { ...logData, status: '200', loggedIn: true }
        }
    }
    else {
        return {
            type: constants.LOG,
            payLoad: { ...logData, status: '404', loggedIn: false }
        }
    }
}

export const logout = () => {
    return {
        type: constants.LOG,
        payLoad: { ...logData, status: '200', loggedIn: false }
    }
}

export const setUserData = () => {
    return {
        type: constants.GET_USER_DATA,
        payLoad: userData.user
    }
}