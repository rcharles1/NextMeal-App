import Lottie from 'lottie-react';
import menuAnimation from '/public/assets/lotties/fast-food.json';
import { services } from '../../utilities/services';

function Services() {
    return (
        <div className="flex flex-col w-full h-2/3 ssm:px-8 space-y-8 justify-center items-center ssm:space-y-6 caret-transparent antialised">
           <div className="flex flex-col w-full ssm:flex-row ssm:justify-between ssm:items-center ssm:space-x-4">
                <div className="h-fit ssm:w-5/12">
                    <Lottie animationData={menuAnimation} loop={true} speed={0.5}/>
                </div>
                <div className="font-semibold flex flex-col text-center ssm:text-start px-4 ssm:p-4 ssm:w-11/12"> 
                    <span className="text-3xl ssm:text-4xl xl:text-7xl font-extrabold">What is NextMeal and what services does it provide?</span>
                    <span className="mt-3 font-semibold px-3 leading-5 block text-base ssm:text-sm lg:text-base text-pretty text-default/60">
                        Away from helping you discover where and what you will get the next food for pleasure, we do the following in addition
                    </span>
                    <p className="mt-3 ssm:mt-4 leading-relaxed text-start ssm:text-base lg:text-lg indent-2 p-1 text-default/75 font-normal">
                        Imagine a world where finding your next meal is as easy as a few taps on your phone. Next Meal is your compassionate companion, guiding you to nearby food and support services with just a touch. Whether you’re in need or looking to lend a helping hand, Next Meal connects you to a network of care and nourishment, ensuring no one goes hungry. Dive into a community where every meal shared is a step towards a brighter, more connected future.
                    </p>
                </div>
           </div>
            <div className="flex flex-col space-y-4 px-5 ssm:grid ssm:grid-cols-3 gap-6 ssm:p-2 ssm:py-1 ssm:space-y-0 lg:grid-cols-4 ssm:h-80 overflow-hidden">
                {services.map((service, index) => {
                    return (
                        <div key={index} className="flex-col space-y-2 overflow-hidden w-full p-2 mx-auto justify-start items-center rounded-lg ssm:rounded-xl bg-pure_white drop-shadow-sm ssm:space-x-0 ssm:space-y-2 ssm:h-72 ssm:w-64 hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 transition transform hover:-translate-y-1 ease-in-out delay-100">
                            <div className="flex h-56 ssm:h-44">
                                <img src={`${service.imageSRC}`} alt="vector"  className="object-cover w-full"/>
                            </div>
                            <div className="flex flex-col space-y-1.5 h-full ssm:h-fit md:space-y-0.5 pb-4 justify-center items-start px-2">
                                <span className="font-bold text-lg ml-1">{service.title}</span>
                                <span className="font-normal text-start text-base line-clamp-3 px-2">{service.text} </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;