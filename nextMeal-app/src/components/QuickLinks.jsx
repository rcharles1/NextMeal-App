import React from 'react';

function QuickLinksComponent() {
    return (
        <div className="flex w-full mx-auto md:w-full rounded h-fit p-2 md:px-4 justify-center items-center sm:space-y-1 caret-transparent font-semibold antialised">
            <div className="px-4 w-full md:grid md:grid-cols-4 gap-6 sm:py-1 sm:space-y-0">
                <div class="rounded-lg border border-slate_white/50 hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 drop-shadow-sm h-fit w-24 md:w-36 p-1 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div className="px-1 rounded-md text-center">
                        <p className="text-sm mt-0.5"><span className="font-bold text-bg_variant1/90">NextMeal Coverage</span> Brings Nation-wide Compassion.</p>
                    </div>
                </div>
                <div class="rounded-lg border border-slate_white/50 hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 drop-shadow-sm h-fit w-24 md:w-36 p-1 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div className="px-1 rounded-md text-center">
                        <p className="text-sm mt-0.5">Taste the Heart: Explore NextMeal’s <span className="text-bg_variant1/90 font-bold">67+</span> Culinary Partners!.</p>
                    </div>
                </div>
                <div class="rounded-lg border border-slate_white/50 hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 drop-shadow-sm h-fit w-24 md:w-36 p-1 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div className="px-1 rounded-md text-center">
                        <p className="text-sm mt-0.5"><span className="text-bg_variant1/90 font-bold">150+ Meals</span>, 1 Mission: No One Goes Hungry!.</p>
                    </div>
                </div>
                <div class="rounded-lg border border-slate_white/50 hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 drop-shadow-sm h-fit w-24 md:w-36 p-1 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div className="px-1 rounded-md text-center">
                        <p className="text-sm mt-0.5">Cheers to Variety! With NextMeal's <span className="text-bg_variant1/90 font-bold">77+</span> beverage listings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickLinksComponent;