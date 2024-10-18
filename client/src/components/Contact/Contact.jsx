/* eslint-disable react/no-unescaped-entities */
function Contacts() {


    return (
        <div className="p-8 px-5 ssm:px-3 h-fit ssm:text-start ssm:flex ssm:space-x-8 text-winterWhite/75">
            <div className="hidden ssm:block h-fit p-2 w-3/12 pt-10 sticky top-16">
                <h3 className="font-bold text-lg capitalize text-winterWhite/90">On this page</h3>
                <ul className="flex flex-col ssm:space-y-1 lg:space-y-2 mt-1.5 pl-1 text-base">
                    <li>Let's Help You</li>
                    <li>Why Reach Out</li>
                    <li>Let's Connect</li>
                </ul>
            </div>
            <div id="page-content" className="space-y-8 ssm:text-base">
                <h1 className="font-black text-3xl gradient-text tracking-wide lg:text-5xl text-bg_variant1 ">Get in Touch</h1>
                <div id="helpingyou">
                    <h3 className="font-bold ssm:text-lg">Let’s Help You!</h3>
                    <p className="mt-2 text-base lg:text-lg">We’re thrilled to connect with you! Whether you’re an individual seeking a spot, a potential partner, or a collaborator, we’d love to hear from you.</p>
                </div>
                <div id="whyreachout">
                    <h3 className="font-bold ssm:text-lg">Why Reach Out?</h3>
                    <ul className="mt-2 ml-8 mb-4 text-base list-disc space-y-3">
                        <li className="space-x-1 mb-1"><span className="font-bold">Assistance in Finding the Perfect Spot</span> <p>Helping you locate the ideal location tailored to your needs and preferences.</p></li>
                        <li className="space-x-1 mb-1"><span className="font-bold">Becoming a Contributor - Grow Your Business</span> <p>Expand your reach and build your brand by contributing your expertise and insights.</p></li>
                    </ul>
                </div>
                <div id="contactdetails">
                    <h3 className="font-bold ssm:text-lg">Let’s Connect!</h3>
                    <p className="mt-2 text-base lg:text-lg">Feel free to reach out via email, phone, or connect with us on X.</p>
                    <div className="mt-3">
                        <ul className="mt-2 text-base lg:text-lg ml-8 list-disc text-start">
                            <li className="space-x-1 mb-1"><span className="font-bold">Email:</span> <a className="hover:underline">nextmeal@gmail.com</a></li>
                            <li className="space-x-1 mb-1"><span className="font-bold">Phone:</span> <a className="hover:underline">+255 768 700 700</a></li>
                            <li className="space-x-1 mb-1"><span className="font-bold">Instagram:</span> <a className="hover:underline">NextMeal</a></li>
                            <li className="space-x-1 mb-1"><span className="font-bold">WhatsApp:</span> <a className="hover:underline">Chat with us</a></li>
                            <li className="space-x-1 mb-1"><span className="font-bold">X:</span> <a className="hover:underline">Connect with us</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-bg_variant1 ssm:text-lg">Ready to Get Started?</h3>
                    <p className="mt-2 lg:text-lg">Don’t hesitate to contact us today.  </p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;