import { React } from 'react';

function Menu() {
    return (
        <>
            <div className="transition-all duration-500 ease-in-out text-sm leading-relaxed">
                <p className=" ">
                    Welcome to Kitisa Restaurant! Click the link below to explore our 
                    diverse menu. We've crafted a variety of dishes for your enjoyment. Can't 
                    wait to serve you! Enjoy your meal! 😊
                </p>
                <a href="/path/to/your/file.pdf" target="_blank" rel="noopener noreferrer" className="flex mt-2 flex-row space-x-1 text-blue font-medium">
                    <span>Explore Our Menu</span>
                    <span className="size-5">
                        <img src='/assets/icon/link-out.svg'/>
                    </span>
                </a>
            </div>
        </>
    );
}

export default Menu;