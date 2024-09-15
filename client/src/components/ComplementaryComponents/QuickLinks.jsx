
function QuickLinksComponent() {
    return (
        <div className="flex w-full mx-auto rounded h-fit p-2 ssm:p-3 ssm:py-5 text-ssm ssm:text- justify-center items-center sm:space-y-1 caret-transparent font-semibold antialised">
            <div className="px-10 w-full ssm:w-fit grid grid-cols-2 gap-2 md:px-4 ssm:grid-cols-4 ssm:gap-0 sm:space-y-0 items-center">
                <div className="h-fit w-24 md:w-36">
                    <div className="rounded-md text-center">
                        <p className="text-bg_variant1/90 font-bold text-lg tracking-tighter ">Mutli-Regional</p>
                        <p>Coverage of the country</p>
                    </div>
                </div>
                <div className="h-fit w-24 md:w-36">
                    <div className="px-1 rounded-md text-center">
                        <p className="text-bg_variant1/90 font-bold text-lg tracking-tighter ">Over 100</p>
                        <p> Culinary Partners!</p>
                    </div>
                </div>
                <div className="h-fit w-24 md:w-36">
                    <div className="text-center">
                        <p className="text-bg_variant1/90 font-bold text-lg tracking-tighter ">150+ Meals</p>
                        <p> No One Goes Hungry!</p>
                    </div>
                </div>
                <div className="h-fit w-24 md:w-36">
                    <div className="text-center">
                        <p className="text-bg_variant1/90 font-bold text-lg tracking-tighter ">180+ beverages</p>
                        <p className=" mt-0.5">Cheers to Variety!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickLinksComponent;