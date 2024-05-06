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