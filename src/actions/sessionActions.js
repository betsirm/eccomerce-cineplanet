import { LOGIN } from "../types/sessionTypes";


export const loginRequest = (response) => (dispatch) => {

    if(Object.keys(response).includes("tokenId"))
    dispatch({type:LOGIN,payload:response});

}