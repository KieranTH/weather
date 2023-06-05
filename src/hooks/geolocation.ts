import { useCallback, useState } from "react"

export const useGeoLocation = () => {
    const [location, setLocation] = useState<GeolocationPosition>()
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<GeolocationPositionError>()
    const [unable, setUnable] = useState(false);

    const resolveLocation: PositionCallback = (position) => {
        setLocation(position);
        setLoading(false)
    }

    const errorLocation: PositionErrorCallback = (err) => {
        setError(err);
        setLoading(false)
    }

    const getUserLocation = useCallback(() => {
        setLoading(true);
        setUnable(false);
        if(navigator.geolocation){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(resolveLocation, errorLocation)
            }
        } else {
            setUnable(true)
            setLoading(false)
        }
    }, [])

    return {
        getUserLocation,
        location,
        loading,
        error,
        unable
    }
}