import React, {useState, useEffect} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MapPinIcon } from '../svgs/InterfaceSvg';

function MapComponent({ restaurantDoc }) {
    const [latitude, longitude] = restaurantDoc.locationData.coordinates;
    const [locationCoordinates, setLocationCoordinates] = useState({ latitude: null, longitude: null });

    const [viewport, setViewPort] = useState(
        {
            latitude: latitude,
            longitude: longitude,
            zoom: 14,
        }
    );

    useEffect(() => {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success, error, options);
        }
    }, []);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocationCoordinates({
            latitude: `${latitude}`,
            longitude: `${longitude}`
        });
    };
  
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    const apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

    return (
        <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
            onViewPortChange={newViewport => setViewPort(prevState => ({ ...prevState, ...newViewport }))}
            mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`}
        >
           {latitude && longitude && (
                <Marker latitude={latitude} longitude={longitude} offsetLeft={-7.5} offsetTop={-15}>
                <MapPinIcon fill="red" height="15" width="15" />
            </Marker>
            
            )}

        </ReactMapGL>
    );
}

export default MapComponent;