/* -----------  Fetch requests for all items: meals, beverages or resturants  -----------  */
// Fetch All Meals
export const fetchAllMeals = async (page) => {
    let url = `https://nextmeal-server.onrender.com/meals/?p=${page}`;

    try {
        const response = await fetch(url);
       if (response.ok) {
            const data = await response.json();
           return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error fetching meals:', error);
    }
};

// Sample restaurants
export const fetchSampleRestaurants = async () => {
    let url = `https://nextmeal-server.onrender.com/restaurants/`;

    try {
        const response = await fetch(url);
        console.log("Response:", response)
       if (response.ok) {
            const data = await response.json();
           return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }
};

// Fetch All Restaurants
export const fetchAllRestaurants = async (page, filters, sort) => {
    let url = `https://nextmeal-server.onrender.com/restaurants/?`;
    let params =  {p: page, sort:JSON.stringify(sort), ...filters};
    let queryParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    url += queryParams;

    try {
        const response = await fetch(url);
       if (response.ok) {
        const data = await response.json();
        return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }
};

// Fetch All Nearby Restaurants
export const fetchAllNearbyRestaurants = async (page, district, region ) => {
    let url = `https://nextmeal-server.onrender.com/restaurants/?`;
    let params =  {p: page, district, region};
    let queryParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    url += queryParams;

    try {
        const response = await fetch(url);
       if (response.ok) {
        const data = await response.json();
        return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }
};

// Fetch All Beverages 
export const fetchAllBeverages = async (page) => {
    try {
        const response = await fetch(`https://nextmeal-server.onrender.com/beverages/?p=${page}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error('Error fetching beverages:', error);
    }
};

// Fetch Meals or Beverages
export const fetchMealsOrBeverages = async (page, entrypoint, mood, filters, sort) => {
    const item = entrypoint === 'meals' ? 'meals' : 'beverages';
    let url = `https://nextmeal-server.onrender.com/${item}/?`;

    let openCard = item;
    let params =  {p: page, sort: JSON.stringify(sort), ...filters};

    if (mood) {
        params = {...params, mood};
        if (item === 'meals' && mood === 'Drinks') {
            openCard = 'beverages';
            url = `https://nextmeal-server.onrender.com/beverages/?p=${page}`;
        }
    }

    const queryParams = new URLSearchParams(params).toString();
    url = `https://nextmeal-server.onrender.com/${item}/?${queryParams}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return { openCard, data };
        } else {
            console.error(`Error fetching ${item}: Response not OK`);
            return { openCard, data: [] }; 
        }
    } catch (error) {
        console.error(`Error fetching ${item}:`, error);
        return { openCard, data: [] }; 
    }
};

/* -----------  Fetch requests for single items: a single meal, beverage or resturant  -----------  */
// Fetch one Restaurant
export const fetchRestaurantDoc = async (id) => {
    try {
        const response = await fetch(`https://nextmeal-server.onrender.com/restaurants//${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching restaurant document:', error);
    }
};

// Search similar drinks or beverages
export const fetchAllSimilarBeverages = async (drinkCategory ) => {
    let url = `https://nextmeal-server.onrender.com/beverages/?`;
    let params =  {drinkCategory};
    let queryParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    url += queryParams;

    try {
        const response = await fetch(url);
       if (response.ok) {
        const data = await response.json();
        return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error fetching similar beverages from inner source:', error);
    }
};

/* -----------  Authentication requests  -----------  */
// Get User's data signined in via Google  
export const fetchUserData = async () => {
    const response = await fetch('https://nextmeal-server.onrender.com/api/current_user', { 
      method: 'GET',
      credentials: 'include'
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data;
};  


/* -----------  Fetch requests for favorite items  ------------  */
// Adds, or removes items from the favorites list
export const updateFavoritesList = async (googleId, itemId, itemType) => {
    const response = await fetch('https://nextmeal-server.onrender.com/favorites', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            googleId,
            itemId,
            itemType
        }),
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}. Network response was not ok`);
    }

    const data = await response.json();
    return data;
};

// Fetch all favorite items
export const getMyFavorites = async (googleId, active) => {
    const response = await fetch(`https://nextmeal-server.onrender.com/favorites//favoritesItems/?googleId=${googleId}&itemType=${active}`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}. Network response was not ok`);
    }
    const data = await response.json();
    
    return data[0].favorites;
};

// Fetch a single favorite item
export const fetchFavoriteItemDoc = async (id, cardType) => {
    let url;
    if (cardType === 'restaurant') {
        url = `https://nextmeal-server.onrender.com/restaurants/${id}`
    } else if (cardType === 'meal') {
        url = `https://nextmeal-server.onrender.com/meals/${id}`;
    } else {
        url = `https://nextmeal-server.onrender.com/beverages/${id}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching restaurant document:', error);
    }
}; 

// ------------------------REVIEWS-------------------------------------
// Add Review
export const addReview = async (createdAt, googleId, listingId, content) => {
    
    const response = await fetch('https://nextmeal-server.onrender.com/reviews/', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            createdAt,
            googleId,
            listingId,
            content
        }),
        credentials: 'include'
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}. Network response was not ok`);
    }

    const data = await response.json();
    return data;
};

// Get all reviews on a particular listing
export const getListingReviews = async (listingId) => {
    let url = `https://nextmeal-server.onrender.com/reviews/?`;
    let params =  { listingId };
    let queryParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    url += queryParams;

    try {
        const response = await fetch(url);
       if (response.ok) {
        const data = await response.json();
        return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
};