import { React, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import Loading from './Loading';

import { addToCart, removeFromCart } from '../features/cart/cartSlice';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Bookmark, Cart, Diamonds, CompanyIcon, PricetagIcon, VolumeIcon } from '/src/components/svgs/InterfaceSvg';

function BeverageItem() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [beverageDetails, setBeverageDetails] = useState(null);

    useEffect(() => {
        const fetchBeverageDoc = async () => {
            try {
                const response = await fetch(`http://localhost:3000/beverages//${id}`);
                const data = await response.json();
                setBeverageDetails(data);
            } catch (error) {
                console.error('Error fetching Brverage document:', error);
            }
        };
        fetchBeverageDoc();
    }, [ id ])

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
          dispatch(addToCart(beverageDetails));
        }
    };

    const handleRemoveFromCart = () => {
    dispatch(removeFromCart(beverageDetails));
    };

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div className="flex flex-col antialiased text-default/75 bg-bg_variant2 mx-auto text-base font-normal h-screen w-100 ">
            <div className="sticky top-0 z-50 w-full">
                <Header />
            </div>
            <div className='sticky w-full md:hidden caret-transparent top-20 sm:top-28 z-50 px-1 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
                <div className="ml-3 sticky"><MenuIcon /></div>
                <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
            </div>
           {beverageDetails ? (
                <div key={beverageDetails._id} className="flex mt-2 flex-col w-full mx-auto mb-12 p-3 space-y-4 h-fit transition-all duration-500">
                    <div className="h-fit w-full mx-auto">
                        <div className="flex flex-col p-1">
                            <div className="flex flex-col space-y-6 h-fit pb-3 items-start justify-center w-full px-1 ">

                                <div className="flex flex-col text-center mx-auto">
                                    <span className="font-bold text-xl md:text-base text-wrap mx-auto w-fit">{beverageDetails.name}</span>
                                    <span className="text-default/55 text-lg md:text-sm font-semibold text-wrap w-full">{beverageDetails.type}</span>
                                    <div className="flex flex-row items-start mx-auto space-x-1 h-fit w-fit">
                                        {beverageDetails.category.flatMap((category, index, array) => {
                                            let elements = [<span key={index}>{category}</span>];
                                            if (index < array.length - 1) {
                                                elements.push(<Diamonds key={`diamond-${index}`} fill="black" height="10" width="10" />);
                                            }
                                            return (
                                                <div key={index} className="flex space-x-1 text-start font-medium text-wrap items-center w-fit text-base md:text-sm h-fit">
                                                    {elements}
                                                </div>
                                            );
                                        })}
                                    </div>
                                     <span className="font-normal text-sm text-wrap w-full">{beverageDetails.volume}</span>
                                </div>
                            </div>
                            <div className="h-96 w-full">
                                <img src={`/assets/img/gallery/meals/beverages/${beverageDetails.img}.webp`} alt='beverage photo' className="w-full h-full object-scale-down " />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around bg-pure_white p-1 py-2 w-full items-center text-default/75 underline underline-offset-2 font-semibold text-sm">
                        
                        <div className="flex flex-col items-center w-max-4/12">
                            <PricetagIcon fill="gray" stroke="gray" height="24" width="24" />
                            <p className="text-wrap w-full">TZS {beverageDetails.price}</p>
                        </div>
                       <div className="flex flex-col items-center w-max-4/12">
                            <VolumeIcon fill="gray" height="24" width="24" />
                            <p className="w-fit">{beverageDetails.size}</p>
                        </div>
                        <div className="flex flex-col items-center w-max-4/12">
                            <CompanyIcon fill="gray" height="24" width="24"/>
                            <p className="text-wrap w-full">{beverageDetails.brand}</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 px-3 py-2 caret-transparent" >
                        <div className="flex justify-left px-4 space-x-4 items-center">
                            <p className="font-medium">Select quantity:</p>
                            <div className="flex flex-row mx-auto items-center bg-light_dark/5 shadow-sm focus:bg-pure_white rounded">
                                <button onClick={decrementQuantity} className="p-2 w-8 text-base">-</button>
                                <input type="number" min="1" max="10" value={quantity} onChange={e => setQuantity(e.target.value)} className="text-center" />
                                <button onClick={incrementQuantity} className="p-2 w-8 text-base">+</button>
                            </div>
                        </div>
                        <button onClick={handleAddToCart} className="flex space-x-2 items-center justify-center bg-bg_variant1/75 p-3 w-80 h-10 mx-auto text-pure_white/80 font-bold rounded-md focus:bg-bg_variant1">
                            <span> Add to cart</span>
                            <Cart fill="white" height="30" width="30" />
                        </button>
                        <button onClick={handleRemoveFromCart} className="flex space-x-2 items-center text-default/75 justify-center outline outline-2 outline-light_dark/35 bg-pure_white p-3 w-80 h-10 mx-auto font-semibold rounded-md">
                            <span> Remove from cart</span>
                            <Cart fill="white" height="30" width="30" />
                        </button>
                    </div>
                </div>
           ) : <Loading />}
           <Footer />
        </div>
    );
}

export default BeverageItem;