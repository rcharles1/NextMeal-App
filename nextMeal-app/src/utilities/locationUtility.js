const apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

// Geocoding by name, and coordinates(reverse-geocoding)
const geocoding = `https://api.maptiler.com/geocoding/$.json?key=${apiKey}`
const reverseGeocoding = `https://api.maptiler.com/geocoding/8.528509,47.3774434.json?key=${apiKey}`