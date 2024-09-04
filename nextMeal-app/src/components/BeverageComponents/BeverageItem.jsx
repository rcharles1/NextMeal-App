import { React, useState, useEffect } from 'react';
import Loading from '../ComplementaryComponents/Loading';

import { addToCart, removeFromCart } from '../../features/cart/cartSlice';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CartAddIcon, CartRemoveIcon, Diamonds, CompanyIcon, PricetagIcon, VolumeIcon, PlusIcon, MinusIcon  } from '/src/components/svgs/InterfaceSvg';

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
        console.log('Added', beverageDetails?.name)
    };

    const handleRemoveFromCart = () => {
    dispatch(removeFromCart(beverageDetails));
    };

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);


    return (
        <div className="flex flex-col antialiased text-default/75 bg-bg_variant2 mx-auto text-base font-normal h-screen w-100 ">
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
                            <PricetagIcon fill="black" stroke="black" />
                            <p className="text-wrap w-full">TZS {beverageDetails.price}</p>
                        </div>
                       <div className="flex flex-col items-center w-max-4/12">
                            <VolumeIcon fill="black" />
                            <p className="w-fit">{beverageDetails.size}</p>
                        </div>
                        <div className="flex flex-col items-center w-max-4/12">
                            <CompanyIcon fill="black"/>
                            <p className="text-wrap w-full">{beverageDetails.brand}</p>
                        </div>
                    </div>

                    <div className="hidden space-y-4 px-3 py-2 caret-transparent" >
                        <div className="flex flex-row space-x-1 justify-around p-2">
                            <div id="quantity">
                                <p className="font-bold md:text-sm w-fit mx-auto">QUANTITY</p>
                                <div className="flex mt-3 flex-row space-x-0.5 items-center bg-light_dark/5 shadow-sm focus:bg-pure_white rounded">
                                    <button onClick={decrementQuantity} className="p-1"><MinusIcon stroke="black" /></button>
                                    <input type="number" min="1" max="99" value={quantity} onChange={e => setQuantity(e.target.value)} className="text-center font-medium outline outline-silver/25 rounded-md w-7 p-1" />
                                    <button onClick={incrementQuantity} className="p-1"><PlusIcon stroke="black"/></button>
                                </div>
                            </div>

                            <div id="price">
                                <p className="font-semibold md:text-sm w-fit mx-auto">PRICE</p>
                                <p className="mt-3 p-2 font-medium">Tzs{beverageDetails.price}</p>
                            </div>

                            <div id="Total">
                                <p className="font-semibold md:text-sm w-fit mx-auto">TOTAL</p>
                                <p className="mt-3 p-2 font-bold">Tzs {`${quantity*beverageDetails.price}`}</p>
                            </div>
                        </div>
                        <button onClick={handleAddToCart} className="flex space-x-2 md:text-ssm items-center justify-center bg-bg_variant1/75 p-3 w-80 h-10 md:w-40 md:h-8 mx-auto text-pure_white font-bold rounded-md focus:bg-bg_variant1">
                            <CartAddIcon fill="white" height="22" width="30" />
                            <span> Add to cart</span>
                        </button>
                        <button onClick={handleRemoveFromCart} className="flex space-x-2  md:text-ssm items-center text-default/75 justify-center outline outline-2 outline-light_dark/15 bg-pure_white p-3 w-80 h-10 md:w-40 md:h-8 mx-auto font-semibold rounded-md">
                            <CartRemoveIcon fill="gray" height="22" width="30" />
                            <span> Remove from cart</span>
                        </button>
                    </div>
                </div>
           ) : <Loading />}
        </div>
    );
}

export default BeverageItem;