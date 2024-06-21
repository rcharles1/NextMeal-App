export const restaurantFilterOptions = [
    {
        title: 'Cuisine',
        type: 'cuisines',
        values: [
            {value: 'African', text: 'African'},
            {value: 'Arab', text: 'Arab'},
            {value: 'Bakery Foods', text: 'Bakery'},
            {value: 'Bar', text: 'Bar'},
            {value: 'Chinese', text: 'Chinese'},
            {value: 'Italian', text: 'Italian'},
            {value: 'Indian', text: 'Indian'},
            {value: 'Kitimoto', text: 'Kitimoto'},
            {value: 'Nyama Choma', text: 'Nyama Choma'},
            {value: 'Smoothie & Juice Bar', text: 'Smoothie & Juice Bar'},
            {value: 'Visinia', text: 'Visinia'}
        ]
    },
    {
        title: 'Open Hours',
        type: 'openHours',
        values: [
            {value: 'Morning', text: 'Less than 24 Hours'},
            {value: 'Bakery Foods', text: '24 Hours'}
        ]
    },
    {
        title: 'Services',
        type: 'services',
        values: [
            {value: 'takeaway', text: 'Takeways'},
            {value: 'delivery', text: 'Delivery'},
            {value: 'catering', text: 'Catering'},
            {value: 'reservation', text: 'Reservations'},
            {value: 'onlineOrders', text: 'Online Ordering'}
        ]
    },
    {
        title: 'Amenities',
        type: 'amenities',
        values: [
            {value: 'wifi', text: 'Wi-Fi Access'},
            {value: 'parking', text: 'Car Parking'},
            {value: 'childrenGrounds', text: 'Children Grounds'}
        ]
    }
];

export const mealFilterOptions = [
    {
        title: 'Cuisines',
        type: 'cuisine',
        values: [
            {value: 'African', text: 'African'},
            {value: 'Arab', text: 'Arab'},
            {value: 'Bakery Foods', text: 'Bakery'},
            {value: 'Chinese', text: 'Chinese'},
            {value: 'Italian', text: 'Italian'},
            {value: 'Indian', text: 'Indian'},
            {value: 'Kitimoto', text: 'Kitimoto'},
            {value: 'Nyama Choma', text: 'Nyama Choma'},
            {value: 'Smoothie & Juice Bar', text: 'Juice & Smoothies'},
            {value: 'Visinia', text: 'Visinia'}
        ]
    },
    {
        title: 'Meal Type',
        type: 'mealType',
        values: [
            {value: 'Barbecue', text: 'BBQ'},
            {value: 'Biryani', text: 'Biryani'},
            {value: 'Bread', text: 'Bread'},
            {value: 'Burger', text: 'Burger'},
            {value: 'Cake', text: 'Cakes'},
            {value: 'Corn Meal', text: 'Corn Meals'},
            {value: 'Fries', text: 'French Fries'},
            {value: 'Rice Pancakes', text: 'Pancakes'},
            {value: 'Savory Pastry', text: 'Pastry'},
            {value: 'Pizza', text: 'Pizza'},
            {value: 'Rice', text: 'Rice'},
            {value: 'Sharwarma', text: 'Sharwarma'},
            {value: 'Soup', text: 'Soup'},
        ]
    },
    {
        title: 'Course',
        type: 'course',
        values: [
            {value: 'Main Course', text: 'Main Course'},
            {value: 'Dessert', text: 'Dessert'},
            {value: 'Appetizer', text: 'Appetizer'}
        ]
    }
];

export const beverageFilterOptions = [
    {
        title: 'Beverage Type',
        type: 'beverageType',
        values: [
            {value: 'Alcoholic', text: 'Alcoholic'},
            {value: 'Non-Alcoholic', text: 'Non-Alcoholic'}
        ]
    },
    {
        title: 'Drink Category',
        type: 'drinkCategory',
        values: [
            {value: 'Ale', text: 'Ale'},
            {value: 'Beer', text: 'Beer'},
            {value: 'Champagne', text: 'Champagne'},
            {value: 'Cider', text: 'Cider'},
            {value: 'Coffee', text: 'Coffee'},
            {value: 'Cognac', text: 'Cognac'},
            {value: 'Digestif', text: 'Digestif'},
            {value: 'Energy Drink', text: 'Energy Drinks'},
            {value: 'Gin', text: 'Gin'},
            {value: 'Irish Whiskey', text: 'Irish Whiskey'},
            {value: 'Juice', text: 'Juice'},
            {value: 'Lager', text: 'Lager'},
            {value: 'Liqueur', text: 'Liqueur'},
            {value: 'Light Lager', text: 'Light Lager'},
            {value: 'Malt Drink', text: 'Malt'},
            {value: 'Milkshake', text: 'Milkshakes'},
            {value: 'Red Wine', text: 'Red Wine'},
            {value: 'Rum', text: 'Rum'},
            {value: 'Scotch Whiskey', text: 'Scotch Whiskey'},
            {value: 'Soda Water', text: 'Soda Water'},
            {value: 'Smoothie', text: 'Smoothies'},
            {value: 'Spirits', text: 'Spirits'},
            {value: 'Stout', text: 'Stout'},
            {value: 'Tea', text: 'Tea'},
            {value: 'Tonic Water', text: 'Tonic Water'},
            {value: 'Water', text: 'Water'},
            {value: 'White Wine', text: 'White Wine'},
            {value: 'Whiskey', text: 'Whiskey'},
            {value: 'Wine', text: 'Wine'},
            {value: 'Vodka', text: 'Vodka'},
            {value: 'Sparkling', text: 'Sparkling Wine'},
        ]
    }
] 

export const sortOptions = [
    {  text: 'Ascending', value: '1', icon: 'Ascending'},
    {  text: 'Descending', value: '-1', icon: 'Descending'},
    {  text: 'Price: Low to High', value: '1', icon: 'Rise'},
    {  text: 'Price: High to Low', value: '-1', icon: 'Fall'},
];

export const reviewOptions = [
    { text: 'Business' },
    { text: 'Couples' },
    { text: 'Family' },
    { text: 'Friends' },
    { text: 'Solo' },
];
  
export const cuisineOptions = [
    { text: 'Select one' },
    { text: 'Breakfast' },
    { text: 'Beer' },
    { text: 'Lunch' },
    { text: 'Dinner' },
    { text: 'Dessert' },
    { text: 'Coffee or tea' },
    { text: 'Wine' },
    { text: 'Spirits' },
    { text: 'Other' },
];