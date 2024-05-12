// Search Meals or Beverages
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

export const search = async (searchTerm) => {
    try {
        const response = await fetch(`http://localhost:3000/search//${searchTerm}`);
       if (response.ok) {
            const data = await response.json();
            return data;
       }
       throw new Error(`HTTP error! status: ${response.status}` )
    } catch (error) {
        console.error('Error:', error);
    }
};

