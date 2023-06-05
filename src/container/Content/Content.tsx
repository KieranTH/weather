import React, { useEffect } from "react";
import { Nav } from "../../component";
import { appTheme } from "../../store/app";
import {useSelector, useDispatch} from 'react-redux'
import { useWeather } from "../../api/weather";
import { useGeoLocation } from "../../hooks/geolocation";

type ContentProps = {

}

const Content = ({}: ContentProps) => {

    const theme = useSelector(appTheme)
    const dispatch = useDispatch()

    const {fetchWeather, weather} = useWeather();
    const {getUserLocation, location} = useGeoLocation();

    useEffect(() => {
        // fetchWeather();
        getUserLocation();
    }, [])

    useEffect(() => {
        if(location && location.coords){
            fetchWeather({...location.coords})
        }
    }, [location])

    console.log(location)

    return (
        <main className={`${theme}`}>
            <Nav/>
        </main>
    )
}

export default Content