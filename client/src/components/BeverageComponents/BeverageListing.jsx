import React, { useState, useEffect } from 'react';
import Loading from '../ComplementaryComponents/Loading';
import { useParams } from 'react-router-dom';
import { fetchAllSimilarBeverages } from '../../utilities/getData';
import { Diamonds, CompanyIcon, PricetagIcon, VolumeIcon, CategoryIcon  } from '/src/components/svgs/InterfaceSvg';
import SimilarBeverage from './SimilarBeverage';

function BeverageListing() {
    const { id } = useParams();
    const [beverageDetails, setBeverageDetails] = useState(null);
    const [similarBeverages, setSimilarBeverages] = useState([]);
    const [showAll, setShowAll] = useState(false);

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
    }, [ id ]);

    useEffect(() => {
        const fetchSimilarBeverages = async () => {
            const drinkCategory = beverageDetails?.category;
            try {
                const response = await fetchAllSimilarBeverages(drinkCategory);
                setSimilarBeverages(response);
            } catch(error) {
                console.error('Error fetching similar beverages', error);
            }
        };
        if (beverageDetails) {
            fetchSimilarBeverages();
        }
    }, [beverageDetails]);

    const handleToggle = event => {
        setShowAll(!showAll);
    };

    return (
        <div className="flex flex-col antialiased text-default/75 bg-bg_variant2 mx-auto text-base font-normal h-fit w-100 ">
           {beverageDetails ? (
                <div key={beverageDetails._id} className="flex mt-2 flex-col w-full mx-auto mb-12 p-3 space-y-8 h-fit transition-all duration-500">
                    <div className="flex flex-col p-1">
                        <div className="flex flex-col space-y-2 h-fit pb-3 items-start w-full px-1 ">
                            <span className="font-bold text-2xl text-wrap">{beverageDetails.name}</span>
                            <div className="flex w-full items-center space-x-2">
                                <p className="text-default/55 font-semibold">{beverageDetails.type}</p>
                                <p className="font-medium">{beverageDetails.volume}</p>
                            </div>
                            <div className="space-y-2 ssm:flex ssm:space-y-0 ssm:space-x-2">
                                <div className="flex flex-row space-x-1 w-full items-center text-default/75 font-medium">
                                    <div className="flex items-center space-x-0.5">
                                        <PricetagIcon fill="black" stroke="black" />
                                        <p className="text-nowrap w-full">TZS {beverageDetails.price}</p>
                                    </div>
                                    <p>|</p>
                                    <div className="flex items-center space-x-1">
                                        <VolumeIcon fill="black" />
                                        <p className="text-nowrap">{beverageDetails.size}</p>
                                    </div>
                                    <p>|</p>
                                    <div className="flex items-center space-x-1">
                                        <CompanyIcon fill="black"/>
                                        <p className="text-nowrap">{beverageDetails.brand}</p>
                                    </div>
                                </div>
                                <div className='flex space-x-1 w-full'>
                                    <CategoryIcon />
                                    <div className="flex flex-row items-center space-x-1 h-fit w-fit">
                                        {beverageDetails.category.flatMap((category, index, array) => {
                                            let elements = [<span key={index}>{category}</span>];
                                            if (index < array.length - 1) {
                                                elements.push(<Diamonds key={`diamond-${index}`} fill="black" height="10" width="10" />);
                                            }
                                            return (
                                                <div key={index} className="flex space-x-1 text-start font-medium text-wrap items-center w-fit h-fit">
                                                    {elements}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-96 w-full mt-10 ">
                            <img src={`/assets/img/gallery/meals/beverages/${beverageDetails.gallery?.[0]}.webp`} alt='beverage photo' className="w-full h-full object-scale-down " />
                        </div>
                    </div>
                    <div className="space-y-4 p-2 caret-transparent relative" >
                        <h2 className="font-semibold text-lg">Discover More Drinks You'll Love</h2>
                        <div className={`absolute bottom-0 bg-gradient-to-t h-48 w-11/12 from-slate_white to-transparent z-10 ${showAll ? 'hidden' : 'visible'}`}></div>
                        <div className="ssm:grid ssm:grid-cols-2 ssm:gap-x-4">
                            {similarBeverages ? (showAll ? similarBeverages : similarBeverages.slice(0, 4)).map(similarBeverage => (
                                <SimilarBeverage key={similarBeverage._id} similarBeverage={similarBeverage} />
                            )) : ''}
                        </div>
                        <div className="absolute inset-x-0 -bottom-2 left-1/2 transform -translate-x-1/2 w-fit z-10 bg-bg_variant1 px-2.5 rounded-3xl">
                            <button className="text-sm tracking-wide text-slate_white font-bold p-2" onClick={handleToggle}>
                                {showAll ? 'Show Less' : 'See All'}
                            </button>
                        </div>
                    </div>
                </div>
           ) : <Loading />}
        </div>
    );
}

export default BeverageListing;