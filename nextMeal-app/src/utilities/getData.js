/* -----------  Fetch requests for all items: meals, beverages or resturants  -----------  */
// Fetch All Meals
export const fetchAllMeals = async (page) => {
    let url = `http://localhost:3000/meals/?${page}`;

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
export const fetchSampleRestaurants = async (page) => {
    let url = `http://localhost:3000/restaurants/?${page}`;

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

// Fetch All Restaurants
export const fetchAllRestaurants = async (page, filters, sort) => {
    let url = `http://localhost:3000/restaurants/?`;
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
    let url = `http://localhost:3000/restaurants/?`;
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
        const response = await fetch(`http://localhost:3000/beverages/?p=${page}`);
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
    let url = `http://localhost:3000/${item}/?`;

    let openCard = item;
    let params =  {p: page, sort: JSON.stringify(sort), ...filters};

    if (mood) {
        params = {...params, mood};
        if (item === 'meals' && mood === 'Drinks') {
            openCard = 'beverages';
            url = `http://localhost:3000/beverages/?p=${page}`;
        }
    }

    const queryParams = new URLSearchParams(params).toString();
    url = `http://localhost:3000/${item}/?${queryParams}`;

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
        const response = await fetch(`http://localhost:3000/restaurants//${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching restaurant document:', error);
    }
};

/* -----------  Autheentication requests  -----------  */
// Get User's data signined in via Google  
export const fetchUserData = async () => {
    const response = await fetch('http://localhost:3000/api/current_user', { 
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
    const response = await fetch('http://localhost:3000/favorites', { 
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
    const response = await fetch(`http://localhost:3000/favorites//favoritesItems/?googleId=${googleId}&itemType=${active}`, { 
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
        url = `http://localhost:3000/restaurants/${id}`
    } else if (cardType === 'meal') {
        url = `http://localhost:3000/meals/${id}`;
    } else {
        url = `http://localhost:3000/beverages/${id}`;
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
export const addReview = async (createdAt, userId, listingId, content) => {
    
    const response = await fetch('http://localhost:3000/reviews/', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            createdAt,
            userId,
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

export const getListingReviews = async (listingId) => {
    let url = `http://localhost:3000/reviews/?`;
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