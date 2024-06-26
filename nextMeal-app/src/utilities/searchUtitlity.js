// Search Meals or Beverages by name
export const searchForMealOrBeverage = async (searchTerm) => {
    try {
        const response = await fetch(`http://localhost:3000/search/mealsorbeverages/${searchTerm}`);
       if (response.ok) {
            const data = await response.json();
            let resultCard = data.results[0].collection;
           return { data, resultCard };
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error:', error);
        return { data: [], resultCard }; 
    }
};

// Search for a single restaurant by name
export const searchRestaurant = async (searchTerm) => {
    try {
        const response = await fetch(`http://localhost:3000/search/restaurants/${searchTerm}`);
       if (response.ok) {
            const data = await response.json();
            return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error:', error);
    }
};

// Search Entire database for items by name
export const search = async (validTerm) => {
    try {
        const response = await fetch(`http://localhost:3000/search//${validTerm}`);
       if (response.ok) {
        const data = await response.json();
        return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error:', error);
    }
};