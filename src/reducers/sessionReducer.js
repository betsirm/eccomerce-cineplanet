import { LOGIN } from "../types/sessionTypes";

const INITIAL_STATE = {
    user:{},
    token:null
}

const sessionReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                token:action.payload.tokenId,
                user:action.payload.profileObj
            }
    
        default:
           return state
    }

}
export default sessionReducer