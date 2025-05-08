import { NavLink as Link } from 'react-router-dom';

function Stakeholdership() {
    return (
        <section className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 py-12 ">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                    Partner with NextMeal
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Become a Partner, Sponsor or Contributor in our mission to connect people with great food
                </p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl shadow-sm px-2.5 md:p-8 lg:p-10 mb-10">
                <p className="text-lg text-gray-700 mb-6 md:mb-8">
                    Join us in our mission to ensure no one goes hungry. Whether you&apos;re a restaurant owner, volunteer, or food enthusiast, NextMeal offers various ways to get involved.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Partner Card */}
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-bg_variant1/10 text-bg_variant1 p-3 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Partners</h3>
                        </div>
                        <p className="text-gray-600 mb-4 text-base">
                            Add your services - listings, reservation systems, delivery services, and exclusive deals. Join our marketing efforts and reach more customers.
                        </p>
                        <Link 
                            to="/stakeholders/#content" 
                            className="inline-flex items-center text-base text-bg_variant1 font-medium hover:underline"
                        >
                            Partner with NextMeal
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Sponsor Card */}
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-bg_variant1/10 text-bg_variant1 p-3 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Sponsors</h3>
                        </div>
                        <p className="text-gray-600 mb-4 text-base">
                            Boost your brand with logo placement, newsletter mentions, and social media promotions. Participate in our events and connect with our audience.
                        </p>
                        <Link 
                            to="/stakeholders/#content" 
                            className="inline-flex items-center text-base text-bg_variant1 font-medium hover:underline"
                        >
                            Learn about Sponsorship
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Contributor Card */}
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-bg_variant1/10 text-bg_variant1 p-3 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Contributors</h3>
                        </div>
                        <p className="text-gray-600 mb-4 md:text-base">
                            Enrich our platform with restaurant reviews, food blogs, and culinary guides. Volunteer your time and expertise to enhance the NextMeal experience.
                        </p>
                        <Link 
                            to="/stakeholders/#content" 
                            className="inline-flex items-center text-base  text-bg_variant1 font-medium hover:underline"
                        >
                            Become a Contributor
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                    Together, we can create a community where every meal shared brings us closer to a brighter, more connected future.
                </p>
                <Link 
                    to="/stakeholders#joinus" 
                    className="inline-block bg-bg_variant1 hover:bg-bg_variant1/90 text-pure_white text-base font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
                >
                    Join Us Now
                </Link>
            </div>
        </section>
    );
}

export default Stakeholdership;