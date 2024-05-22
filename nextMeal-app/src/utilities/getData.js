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

// Fetch All Beverages to populate Beverage Cards
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

// Fetch One Meal for MealItem
export const fetchMealDoc = async () => {
    try {
        const response = await fetch(`http://localhost:3000/meals//${id}`);
        const data = await response.json();
        setMealDetails(data);
    } catch (error) {
        console.error('Error fetching meal document:', error);
    }
};

// Fetch One Beverage for BeverageItem
export const fetchBeverageDoc = async () => {
    try {
        const response = await fetch(`http://localhost:3000/beverages//${id}`);
        const data = await response.json();
        setBeverageDetails(data);
    } catch (error) {
        console.error('Error fetching Brverage document:', error);
    }
};

// Fetch one Restaurant
export const fetchRestaurantDoc = async () => {
    try {
        const response = await fetch(`http://localhost:3000/restaurants//${id}`);
        const data = await response.json();
    } catch (error) {
        console.error('Error fetching restaurant document:', error);
    }
};

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

export const updateFavorites = async (googleId, itemId, itemType) => {
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

// To be implemented at later days
export const fetchMealsAndBeverages = async () => {
    try {
        const mealsResponse = fetch('http://localhost:3000/meals/');
        const beveragesResponse = fetch('http://localhost:3000/beverages/');
        
        const responses = await Promise.all([mealsResponse, beveragesResponse]);
        
        const mealsData = await responses[0].json();
        const beveragesData = await responses[1].json();
        
        const combinedData = {
            meals: mealsData,
            beverages: beveragesData
        };
        
        return combinedData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
