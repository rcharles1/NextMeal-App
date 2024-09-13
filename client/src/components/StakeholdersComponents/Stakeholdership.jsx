import React from "react";
import { NavLink as Link } from 'react-router-dom';

function Stakeholdership() {
    return (
        <div className="partners h-fit w-full p-4 leading-relaxed pb-20 ssm:px-12">
            <h1 className="text-3xl ssm:text-4xl lg:text-5xl font-extrabold text-center">Get Involved with NextMeal </h1>
            <h3 className="text-base text-center font-semibold text-default/50">Become a Partner, Sponsor or a Contributor </h3>
            <div className="mt-4 px-2 ssm:px-4">
                <p className="mt-2">Join us in our mission to ensure no one goes hungry. Whether you're a restaurant owner looking to partner with us, a volunteer eager to lend a helping hand, or a food enthusiast wanting to explore and share culinary delights, NextMeal offers various ways to get involved.</p>
                    <ul className="list-decimal ml-8 space-y-4">
                        <li className="mt-2 space-y-1 ssm:space-y-2">
                            <span className="font-bold">Partners</span>
                            <p>Partners add their services - listings, reservation systems, delivery services, and exclusive deals, joining marketing efforts, and offering special deals. <Link to='/stakeholders/#content' className="font-medium underline underline-offset-2 text-base">Learn more</Link></p>
                        </li>
                        <li className="mt-2 space-y-1 ssm:space-y-2">
                            <span className="font-bold">Sponsor </span>
                            <p>Sponsor NextMeal and boost your brand! Enjoy logo placement, newsletter mentions, and social media promotions. Participate in our events and connect with our audience. Join us in enhancing dining experiences and your brand visibility.</p>
                        </li>
                        <li className="mt-2">
                            <span className="font-bold">Contributor Package</span>
                            <p>Join NextMeal as a contributor and help enrich our platform with your unique insights and skills. Contributors can provide valuable content such as restaurant reviews, food blogs, and culinary guides.</p>
                            <p className="mt-2 hidden">You can also volunteer your time and expertise in areas like web development or community engagement. By sharing your feedback and innovative ideas, you’ll play a crucial role in enhancing the NextMeal experience for all users. Join us in our mission to help people discover great dining experiences and support the restaurant community.</p>
                        </li>
                    </ul>
                <p className="mt-2">Together, we can create a community where every meal shared brings us closer to a brighter, more connected future.</p>
            </div>
            <div className="mt-4 p-0.5 w-fit mx-auto">
                <Link to={`/stakeholders#joinus`} className="p-2 px-3.5 rounded-2xl bg-bg_variant1 font-semibold text-base text-slate_white">Join Us Now</Link>
            </div>
        </div>
    );
}

export default Stakeholdership;