import { useState, useEffect } from 'react';
import { getMyFavorites, fetchFavoriteItemDoc } from '../../utilities/getData';
import RestaurantCard from '../RestaurantComponents/RestaurantCard';
import MealCard from '../MealComponents/MealCard';
import BeverageCard from '../BeverageComponents/BeverageCard';

function MyFavorites() {
    const [active, setActive] = useState('Restaurants');
    const [googleId, setGoogleId] = useState(null);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [itemData, setItemData] = useState([])

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setGoogleId(userData?.googleId);
    }, []);

    useEffect(() => {
        setItemData([]);
        const favoriteItems = async () => {
            try {
                const response = await getMyFavorites(googleId, active);
                localStorage.setItem('wishlist', JSON.stringify(response));
                setFavoriteItems(response);
            } catch(error) {
                console.log(error);
            }
        };
        favoriteItems();
    },[googleId, active]);

    useEffect(() => {
        favoriteItems.forEach(item => {
            let id = item.id;
            let cardType = item.itemType;
            const fetchfavoriteItem = async () => {
                try {
                    const data = await fetchFavoriteItemDoc(id, cardType);
                    setItemData(prevData => [...prevData, data]);
                } catch(error) {
                    console.log('Error fetching favorite item details:', error);
                }
            };
            fetchfavoriteItem();
        });
    }, [favoriteItems]);    
     
    const CardComponents = {
        'restaurant': RestaurantCard, 
        'meal': MealCard, 
        'beverage': BeverageCard 
    };

    return (
        <div className="antialiased flex flex-col h-fit sm:p-6 justify-center items-center text-default/75 w-100 caret-transparent text-base sm:text-xs">
            <div id="container" className="flex flex-col pb-12 sm:flex-row mt-4 sm:items-top sm:space-y-0 space-y-6 justify-center px-3 sm:px-0 sm:flow-row sm:space-x-4 sm:items-top w-full text-start">
                <h1 className="text-xl px-2 font-bold">My Favorites</h1>
                <div className="rounded-xl w-full h-fit bg-bg_variant1/5 p-1 flex justify-center items-center space-x-5 font-semibold caret-transparent cursor-pointer">
                    <a href='#' onClick={() => setActive('restaurant')} className={`h-8 px-2 rounded-lg items-center pt-1 ${active === 'restaurant' ? 'bg-bg_variant1 text-pure_white/75 ': ''}:bg-gray/5`}>Restaurants</a>
                    <a href='#' onClick={() => setActive('meal')} className={`h-8 p-2 rounded-md items-center pt-1  ${active === 'meal' ? 'bg-bg_variant1/95 text-pure_white/75 ': ''}:bg-gray/5`}>Meals</a>
                    <a href='#' onClick={() => setActive('beverage')} className={`h-8 px-2 rounded-lg items-center pt-1  ${active === 'beverage' ? 'bg-bg_variant1/85 text-pure_white/75': ''}:bg-gray/5`}>Beverages</a>
                </div>
                <div className="w-full px-3 h-fit grid grid-cols-2 gap-4">
                    {favoriteItems.length > 0 ? (
                        favoriteItems.map((favoriteItem) => {
                            const item = itemData.find(item => item._id === favoriteItem.id);
                            if (!item) {
                                return null;
                            }
                            const CardComponent = CardComponents[favoriteItem.itemType];
                            return <CardComponent key={item._id} {...{ [favoriteItem.itemType]: item }}  favoriteItems={favoriteItems} />;
                        })
                    ) : (
                        <p>No favorites yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyFavorites;