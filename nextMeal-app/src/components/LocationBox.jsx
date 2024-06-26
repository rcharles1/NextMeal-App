import React, {useEffect, useState} from 'react';

function LocationAddress() {
  const [locationCoordinates, setLocationCoordinates] = useState('');
  const [address, setAddress] = useState([]);
  const query = locationCoordinates; 

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
  
    setLocationCoordinates(`${latitude},${longitude}`);
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  useEffect(() => {
    const apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

    const getLocationByCoordinates = async () => {
      const response = await fetch(`https://api.maptiler.com/geocoding/${query}.json?key=${apiKey}`);
      
      if (response.ok) {
        const data = await response.json();
        const addressData = data.features
        setAddress(addressData);
      } else {
        console.log('API response:', await response.text());
      }
    }
    getLocationByCoordinates();
  }, []);

  return (
    <div className="flex flex-row justify-center items-center space-x-3 md:space-x-2 md:px-4 h-12 w-fit bg-blur sm:h-16 sm:w-48 md:h-10 md:w-fit p-3 border border-silver/35 rounded-md drop-shadow">
      <div className="size-8 sm:size-10 md:size-8 justify-center items center flex">
        <img src='/assets/icon/location-light.svg' alt='Location Icon'/>
      </div>
      {address[0] ? <p>{address[0].place_name}</p> : ''}
    </div>
  );
}

export default LocationAddress;