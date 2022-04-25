import { LOGIN } from "../types/sessionTypes";

const INITIAL_STATE = {
    user:{},
    token:null
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                token:action.payload.tokenId,
                user:action.payload.profileObj
            }
            break;
    
        default:
           return state
    }

}