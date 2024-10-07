// Search Meals or Beverages by name
export const searchForMealOrBeverage = async (searchTerm) => {
    try {
        const response = await fetch(`https://nextmeal-server.onrender.com/search/mealsorbeverages/${searchTerm}`);
       if (response.ok) {
            const data = await response.json();
            let resultCard = data.results[0].collection;
           return { data, resultCard };
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error:', error);
        return { data: [] }; 
    }
};

// Search for a single restaurant by name
export const searchRestaurant = async (searchTerm) => {
    try {
        const response = await fetch(`https://nextmeal-server.onrender.com/search/restaurants/${searchTerm}`);
       if (response.ok) {
            const data = await response.json();
            return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error:', error);
    }
};

// Search entire database for items by name, type, cuisine, region, and district from 3 collections(restaurants, meals, and beverages)
export const search = async (validTerm) => {
    try {
        const response = await fetch(`https://nextmeal-server.onrender.com/search//${validTerm}`);
       if (response.ok) {
        const data = await response.json();
        if (data.success === false) {
            return { data };
        } else { 
            let resultCategory = data?.results[0].collection;
            return { data, resultCategory };
        }
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};