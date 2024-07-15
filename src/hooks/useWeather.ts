import axios from "axios"
import { SearchType } from "../types"

export default function useWheather() {

    const fetchWeather = async (search : SearchType) => {
        const appId = import.meta.env.VITE_API_KEY
        
        try{
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios.get(geoUrl)
            console.log(data)
            
            console.log(geoUrl)

        }catch(error){
            console.log(error)
        }
    }

    return {
        fetchWeather
    }
}