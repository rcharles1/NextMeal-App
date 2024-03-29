import { React, useState } from 'react';

function RestaurantProfile() {
    const [isExpanded, setIsExpanded] = useState(false);

    const text = `Welcome to Kitisa, your go-to fast-food restaurant in Tanzania! Located in the bustling city of Dar es Salaam, Kitisa offers a delightful blend of speedy service and mouth-watering meals.

        Our menu is a vibrant mix of fast-food favorites and Tanzanian delicacies, all prepared with fresh, locally-sourced ingredients. From juicy burgers and crispy fries to local dishes with a modern twist, there's something for everyone at Kitisa.

        But Kitisa is more than just a fast-food restaurant. With our warm, friendly service and lively, Tanzanian-inspired interiors, we offer a dining experience that's truly unique. 

        So why wait? Visit Kitisa today for a fast, flavorful feast that's sure to leave you coming back for more!`;

    const truncatedText = text.slice(0, 200) + '...';

    return (
        <div className="mx-auto text-sm font-normal h-screen w-100 space-y-0"> 
            <div className="rounded-t-lg h-1/3  overflow-hidden">
                <img src='/assets/img/data/spicy-biryani.jpg'/>
            </div>
            <div className="flex flex-col space-y-2 p-5 h-2/3">
                <div className='flex flex-row space-x-7 items-center'>
                    <div>
                        <h2 className="text-xl font-semibold w-72 text-wrap">Kitisa Fast Food Restaurant</h2>
                        <div className='flex flex-row text-default/60 w-fit space-x-2 text-base font-normal items-center'>
                            <span>4</span>
                            <div className="flex flex-row space-x-0">
                                <span className="size-5 object-scale-down"><img src='/assets/icon/star-6.svg' /></span>
                                <span className="size-5 object-scale-down"><img src='/assets/icon/star-6.svg' /></span>
                                <span className="size-5 object-scale-down"><img src='/assets/icon/star-6.svg' /></span>
                                <span className="size-5 object-scale-down"><img src='/assets/icon/star-6.svg' /></span>
                            </div>
                            <span className="text-default/30">(1.2K)</span>
                        </div>
                    </div>
                    <div className='bg-bg_variant1 h-10 w-10 items-center justify-center overflow-hidden rounded-full'> 
                        <button className='h-6 w-6 mx-2 mt-2 rounded-full shadow'>
                            <img src='/assets/icon/navigate.svg' />
                        </button>
                    </div>
                </div>

                <p className='tracking-normal leading-relaxed font-medium text-default/65'>
                   {isExpanded ? text : truncatedText }
                </p>
                <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue ml-72 mt-2">
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>

                <div>
                    Details Menu Reviews
                </div>
            </div>
        </div>
    );
}

export default RestaurantProfile;