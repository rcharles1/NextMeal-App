function QuickLinksComponent() {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 caret-transparent">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {/* Stat 1 */}
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                    <p className="text-bg_variant1 font-bold truncate text-xl sm:text-2xl md:text-3xl mb-1">
                       Zonal
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Nationwide Coverage
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                    <p className="text-bg_variant1 font-bold text-xl sm:text-2xl md:text-3xl mb-1">
                        100+
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Culinary Partners
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                    <p className="text-bg_variant1 font-bold text-xl sm:text-2xl md:text-3xl mb-1">
                        150+
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Delicious Meals
                    </p>
                </div>

                {/* Stat 4 */}
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                    <p className="text-bg_variant1 font-bold text-xl sm:text-2xl md:text-3xl mb-1">
                        180+
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Refreshing Beverages
                    </p>
                </div>
            </div>
        </div>
    );
}

export default QuickLinksComponent;