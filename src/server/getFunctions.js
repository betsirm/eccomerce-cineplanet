import axios from "axios";


export async function getPremieres(){
    const {data:respuesta} = await axios.get('premieres')
    return respuesta;
}

export async function getCandies(){
    const {data:respuesta} = await axios.get('candystore')
    return respuesta;
}