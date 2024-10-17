function About() {
    return (
        <div className="w-full h-fit p-4 ssm:px-8 caret-transparent">
            <div className="about2-gradient p-1">
                <h1 className="font-black text-3xl tracking-wide gradient-text lg:text-5xl text-bg_variant1/90">About Us</h1>
            </div>
            <div className="ssm:flex ssm:space-x-6">
                <div className="hidden ssm:block w-6/12 p-2 h-fit sticky top-28">
                    <h3 className="font-bold text-lg capitalize text-winterWhite/90 lg:text-base">On this page</h3>
                    <ul className="flex flex-col ssm:space-y-1 lg:space-y-2 mt-2 pl-1 text-sm">
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="#ourstory">Our Story</a></li>
                        <li><a href="#ourservices">What We Offer</a></li>
                        <li><a href="#team">Meet Our Team</a></li>
                        <li><a href="#testmonials">Testmonials</a></li>
                        <li><a href="#engagewithus"></a></li>
                    </ul>
                </div>
                <div id="page-contert" className="grow p-1 space-y-6 ssm:space-y-8 ssm:text-base">
                    <div id="aboutus" className="space-y-2.5">
                        <h3 className="text-winterWhite/90 font-bold ssm:text-lg lg:text-xl sticky top-24 backdrop-blur bg-slate_white/55 z-10 pb-2 ssm:py-2">About Us - NextMeal</h3>
                        <div>
                            <p>Welcome to NextMeal! We are dedicated to helping you discover and connect with the best restaurants for your next meal. Our mission is to make dining out an unforgettable experience by providing you with a curated selection of top meals, drinks, and restaurants.</p>
                            <p className="mt-2.5">At NextMeal, we believe in the joy of exploring new flavors and dining experiences. Whether you’re looking for a cozy local spot or a trendy new eatery, we’ve got you covered. Our platform is designed to be your go-to guide for finding the perfect place to dine, taste, and enjoy.</p>
                            <p className="mt-2.5">Join us on this culinary journey and let us help you find your next favorite meal. Bon appétit!</p>
                        </div>
                    </div>
                    <div id="ourstory" className="space-y-2.5">
                        <h3 className="text-winterWhite/90 mt-4 font-bold capitalize ssm:text-lg lg:text-xl sticky top-24 backdrop-blur bg-slate_white/55 py-2">Our Story</h3>
                        <p>NextMeal was founded with a simple idea: to make it easier for food lovers to find the best dining spots. Our journey began in 2023, when our founder, Robin Charles, realized the need for a reliable platform that could guide people to great meals.</p>
                        <p>Since our inception, we’ve reached several milestones. From launching our first version to expanding our database to include thousands of restaurants, our journey has been fueled by our passion for food and technology.</p>
                    </div>
                    <div id="ourservices" className="space-y-2.5 ssm:space-y-4">
                        <h3 className="text-winterWhite/90 font-bold ssm:text-lg lg:text-xl sticky top-24 backdrop-blur bg-slate_white/55 py-2 ">What we Offer</h3>
                        <p>NextMeal offers a comprehensive restaurant discovery service. Whether you’re looking for a cozy local spot or a trendy new eatery, our platform provides detailed information, reviews, and recommendations to help you make the best choice.</p>
                        <h4 className="font-semibold">Unique Selling Points</h4>
                        <p> What sets us apart? Our curated selection of restaurants, user-friendly interface, and commitment to quality. We go beyond just listings; we provide insights and recommendations tailored to your tastes.</p>
                    </div>
                    <div id="meetourteam" className="space-y-2.5">
                        <h3 className="text-winterWhite/90 font-bold capitalize ssm:text-lg lg:text-xl sticky top-24 backdrop-blur bg-slate_white/55 py-2">Meet Our Team</h3>
                       <p>Meet the team behind NextMeal! Our dedicated team of food enthusiasts and tech experts work tirelessly to bring you the best dining experiences</p>
                       <p>At NextMeal, we value innovation, quality, and community. Our culture is built on a love for food and a commitment to excellence. We believe in creating a positive impact through our work.</p>
                    </div>
                    <div id="testmonials" className="space-y-2.5">
                        <h3 className="text-winterWhite/90 font-bold capitalize ssm:text-lg lg:text-xl sticky top-24 backdrop-blur bg-slate_white/55 py-2 ">Testmonials</h3>
                        <p className="text-pretty">Don’t just take our word for it. Here’s what our users have to say</p>
                        <ul className="list-disc ml-7 space-y-2">
                            <li className="space-y-1 ssm:space-y-2">“NextMeal helped me find the perfect spot for my anniversary dinner. Highly recommend!” - <span className="italic">John Doe</span></li>
                            <li className="space-y-1 ssm:space-y-2">“A fantastic platform for food lovers. The recommendations are always spot on.” - <span className="italic">Jane Doe</span></li>
                        </ul>
                        <p> We’ve helped countless users discover their new favorite restaurants. From romantic dinners to family gatherings, NextMeal has been a part of many memorable dining experiences.</p>
                    </div>
                    <div id="engagewithus" className="space-y-2.5">
                        <h3 className="text-winterWhite/90 mt-4 font-bold capitalize ssm:text-lg lg:text-xl">Join Us</h3>
                        <p>Ready to find your next favorite meal? Join us today! Sign up for our newsletter, follow us on social media, or download our app to stay updated with the latest restaurant recommendations.</p>
                        <p> Have questions or feedback? We’d love to hear from you. Reach out to us at <a className="underline text-base">nextmeal.com</a> or <a className="text-base">0768 400 700</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;