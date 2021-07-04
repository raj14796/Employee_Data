import { GET_USER_DATA } from '../constants/constants'

const userData = (userDataState=[], action) => {
    switch(action.type){
        case GET_USER_DATA: return action.payLoad;
        default: return userDataState;
    }
}
export default userData;