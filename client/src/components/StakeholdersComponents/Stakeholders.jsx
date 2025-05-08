import { stakeholderdefinition, stakeholderapplicationsteps } from "../../utilities/content";

function Stakeholders() {
    return (
        <div className="min-h-screen w-full p-4 text-default/75 space-y-3 max-w-[105rem] mx-auto pb-10 ssm:flex ssm:space-x-6 ssm:space-y-0">
            <div className="hidden ssm:block w-52 p-2 h-fit sticky top-8">
                <h3 className="font-bold text-lg capitalize text-winterWhite/90">On this page</h3>
                <ul className="flex flex-col space-y-1 mt-2 pl-1 text-base">
                    <li><a href="#getinvolved">Get Involved</a></li>
                    <li><a href="#whatyoudo">What You&apos;ll Do</a></li>
                    <li><a href="joinus">How to Join</a></li>
                </ul>
            </div>
            <div className="h-lvh overflow-hidden overflow-y-auto container-snap">
                <h1 id="getinvolved" className="text-3xl lg:text-5xl font-extrabold">Get Involved with us</h1>
                <div className="space-y-2 p-1">
                    <p>Join NextMeal, the dynamic restaurant discovery platform! Whether you’re a restaurant owner, a business seeking sponsorship, or an individual ready to share content, there’s a unique and enriching experience waiting for you.</p>
                    <p>Help us connect people with great dining experiences and support the restaurant industry.</p>
                </div>
                <div id="whatyoudo" className="w-full p-2 space-y-8">
                    {stakeholderdefinition.map((stakeholder, index) => {
                        return (
                            <div id={`${stakeholder.type}`} key={index} className="ml-0.5">
                                <h2 className="font-bold text-2xl">{index +1 }. {stakeholder.type}</h2>
                                <div className="">
                                    <p className="font-bold">What You&apos;ll Do</p>
                                    <p>{stakeholder.roleDescription}</p>
                                </div>
                                {stakeholder.engagements.map((engagement, index) => {
                                    return (
                                        <ol key={`${index} + ${engagement.title}`} className="list-disc ml-8">
                                            <li className="my-1.5">
                                                <span className="font-semibold capitalize">{engagement.title}</span>
                                                <p className="mt-1">{engagement.body}</p>
                                            </li>
                                        </ol>
                                    );
                                })}
                            </div>
                        );
                    })}
                    <div id="joinus" className="mt-4">
                        <h2 className="font-bold text-2xl">How to Join Us</h2>
                        <p>Ready to join us? Follow these steps to become a stakeholder;</p>
                        {stakeholderapplicationsteps.map((step, index) => {
                            return (
                                <ol key={index} className="list-none ml-4">
                                    <li className="my-1.5">
                                        <span className="font-semibold capitalize">{index +1 }. {step.title}</span>
                                        <p className="mt-1">{step.body}</p>
                                    </li>
                                </ol>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stakeholders;