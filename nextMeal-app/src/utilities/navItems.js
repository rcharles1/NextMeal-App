
export const navItems = [
    { 
        label: "Home",
        mainLink: "",
        showDropdown: false,
        dropDownContent: []
    },
    { 
        label: "About",
        mainLink: "about",
        showDropdown: true,
        dropDownContent: [
            {
                title: "About Us - NextMeal",
                link: "/about/#aboutus",
                summary: "Learn what we are, mission, and our cultural motive ."
            },
            {
                title: "Our Story and Journey",
                link: "/about/#ourstory",
                summary: "Get to know the motive, and founder behind NextMeal together with milestones achieved"
            },
            {
                title: "Our Services",
                link: "/about/#ourservices",
                summary: "Get to know briefly what we off you through our platform"
            },
            {
                title: "Testmonials",
                link: "/about/#testmonials",
                summary: "Don’t just take our word for it. Here’s what our users have to say"
            }
        ]
    },
    { 
        label: "Restaurants",
        mainLink: "restaurantlistings",
        showDropdown: false,
        dropDownContent: [],
    },
    { 
        label: "Meals & Beverages", 
        mainLink: "meallistings",
        showDropdown: false,
        dropDownContent: [],
    },
    { 
        label: "Contact Us",
        mainLink: "contacts",
        showDropdown: true,
        dropDownContent: [
            {
                title: "Let's Help You",
                link: "/conatacts/#helpingyou",
                summary: "Email or Call us Now"
            },
            {
                title: "Why Reach Out ",
                link: "/contacts/#whyreachout",
                summary: "Get Assistance in Finding the Perfect Spot or Know the ABCs of becoming a partner"
            },
            {
                title: "Stay Connected With Us",
                link: "/contacts/#contactdetails",
                summary: "Connect with us in across various platforms"
            }
        ],
    },
];