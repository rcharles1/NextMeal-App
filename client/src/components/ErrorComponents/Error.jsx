
import Lottie from 'lottie-react';
import errorAnimation from '/public/assets/lotties/restaurant-cat.json';
import { Retry } from '../svgs/ErrorSvg';

function Error({ message, onReset, onClose }) {
    const handleClick = () => {
        onReset();
        onClose();
    };

    return (
        <div className="h-fit w-full text-base sm:text-lg font-medium text-default/75 antialised text-center">
            <div className="size-64 sm:size-72 justify-center mx-auto">
                <Lottie animationData={errorAnimation} loop={true} speed={0.5}/>
            </div>
            {message}
            <div className="flex space-x-1.5 mt-2 mx-auto w-fit items-center ">
                <p onClick={handleClick} className="text-bg_variant1 cursor-pointer font-semibold">Refresh to clear filters</p>
                <Retry fill={'red'} height="14" width="14"/>
            </div>
        </div>
    )
}

export default Error;