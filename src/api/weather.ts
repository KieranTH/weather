import axios from "axios";
import { useCallback, useState } from "react"


export const useWeather = () => {
    const [weather, setWeather] = useState()
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState()

    const key = process.env.REACT_APP_TOMORROW_API_KEY
    const url =  process.env.REACT_APP_TOMORROW_API_URL

    const fetchWeather = useCallback((c?: Coordinates) => {
        setLoading(true);

        const cords: Coordinates = {
            latitude: 40.75872069597532,
            longitude: -73.98529171943665
        }

        if(c){
            cords.latitude = c.latitude
            cords.longitude = c.longitude
        }

        axios
            .get(`${url}timelines?location=${cords.latitude},${cords.longitude}&fields=temperature&timesteps=1h&units=metric&apikey=${key}`)
            .then(({data}) => {
                setWeather(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [key, url])

    return {
        weather,
        loading,
        error,
        fetchWeather
    }
}