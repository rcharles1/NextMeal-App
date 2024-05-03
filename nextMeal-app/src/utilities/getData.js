// Fetch All Meals to populate Meal Cards
export const fetchAllMeals = async (page) => {
    try {
        const response = await fetch(`http://localhost:3000/meals/?p=${page}`);
       if (response.ok) {
            const data = await response.json();
           return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error fetching meals:', error);
    }
};

// Fetch All Restaurants
export const fetchAllRestaurants = async (page) => {
    try {
        const response = await fetch(`http://localhost:3000/restaurants/?p=${page}`);
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
export const fetchMealsOrBeverages = async (page, entrypoint) => {
    let url, item;
    if (entrypoint === 'meals'){
        url = `http://localhost:3000/meals/?p=${page}`;
        item = 'meals';
    } else {
        url = `http://localhost:3000/beverages/?p=${page}`;
        item = 'beverages';
    }
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error(`Error fetching ${item}: Response not OK`);
            return []; 
        }
    } catch (error) {
        console.error(`Error fetching ${item}:`, error);
        return []; 
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
        setRestaurantDoc(data);
    } catch (error) {
        console.error('Error fetching restaurant document:', error);
    }
};

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
