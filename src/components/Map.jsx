import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export default function map (){
    const {isLoaded} = useLoadScript ({googleMapsApiKey: "AIzaSyDh3l6G9Y1QEHikiPnBKHBHWQ9FBG-yHj0"});
    if(!isLoaded){
        return <div>Loading....</div>
    }

    return <GoogleMap  zoom={10} center={{lat: 23.791267,lng: 90.409358}} mapContainerClassName='w-full h-full overflow-clip rounded-xl' > </GoogleMap>


}
