import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';

function Partnership() {
    return (
        <div className="partners h-fit w-full p-4 leading-relaxed pb-20">
            <h1 className="text-3xl ssm:text-4xl lg:text-5xl font-extrabold text-center">Get Involved with NextMeal </h1>
            <h3 className="text-base text-center font-semibold">Become a Stakeholder </h3>
            <div className="mt-4 px-2">
                <p className="mt-2">Join us in our mission to ensure no one goes hungry. Whether you're a restaurant owner looking to partner with us, a volunteer eager to lend a helping hand, or a food enthusiast wanting to explore and share culinary delights, NextMeal offers various ways to get involved.</p>
                    <ul className="list-decimal ml-8 space-y-4">
                        <li className="mt-2 space-y-1 ssm:space-y-2">
                            <span className="font-bold">Partnership</span>
                            <p>Partners help improve NextMeal by adding their services - listings, reservation systems, delivery services, and exclusive deals, joining marketing efforts, and offering special deals.</p>
                        </li>
                        <li className="mt-2 space-y-1 ssm:space-y-2">
                            <span className="font-bold">Get involved through sponsorship </span>
                            <p>Become a sponsor of NextMeal and gain valuable exposure for your brand. By supporting our platform, you’ll enjoy benefits such as logo placement on our website, mentions in our newsletters, and promotions on our social media channels. </p>
                            <p className="mt-2 hidden">Sponsors can also participate in our events and campaigns, connecting directly with our engaged audience. Join us in our mission to help users discover great dining experiences while enhancing your brand visibility.</p>
                        </li>
                        <li className="mt-2">
                            <span className="font-bold">Contributor Package</span>
                            <p>Join NextMeal as a contributor and help enrich our platform with your unique insights and skills. Contributors can provide valuable content such as restaurant reviews, food blogs, and culinary guides.</p>
                            <p className="mt-2 hidden">You can also volunteer your time and expertise in areas like web development or community engagement. By sharing your feedback and innovative ideas, you’ll play a crucial role in enhancing the NextMeal experience for all users. Join us in our mission to help people discover great dining experiences and support the restaurant community.</p>
                        </li>
                    </ul>
                <p className="mt-2">Together, we can create a community where every meal shared brings us closer to a brighter, more connected future <NavLink to={`/stakeholders`} className="underline font-medium text-base underline-offset-2">Join Us Now</NavLink></p>
            </div>
        </div>
    );
}

export default Partnership;