import { LOG } from '../constants/constants'
const logData = (loginState = {}, action) => {
    switch (action.type) {
        case LOG: console.log(action.payLoad); return action.payLoad;
        default: return loginState
    }
}
export default logData;