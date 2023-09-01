import axios from "axios"

export const api = "https://pokeapi.co/api/v2/pokemon-form/132/"

export const getPoke = async () => {
    try {
        const {data} = await axios.get(api)
        return data
    } catch (error) {
        return error
    }
    
}