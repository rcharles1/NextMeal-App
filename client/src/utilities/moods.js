import { CilDinner, Diner } from '/src/components/svgs/DinerSvg.jsx';
import { BbqSvg} from '/src/components/svgs/BbqSvg';
import { PizzaSvg } from '/src/components/svgs/QuickEatsSvg';
import { WineGlass, BeerMugs, SodaBottle, Juice, WaterBottle, GlassWhiskey } from '/src/components/svgs/DrinksSvg';
import { Teacup } from '/src/components/svgs/BreakfastSvgs';

export const mealMoods = [
    { svg: CilDinner, text: 'Dinner'},
    { svg: BbqSvg, text: 'Grills'},
    { svg: PizzaSvg, text: 'Quick Bites'},
    { svg: WineGlass, text: 'Drinks'},
    { svg: Teacup, text: 'Breakfast'}
];

export const beverageMoods = [
    { svg: BeerMugs, text: 'Beer'},
    { svg: GlassWhiskey, text: 'Whiskey'},
    { svg: Juice, text: 'Juice'},
    { svg: SodaBottle, text: 'Soda'},
    { svg: WaterBottle, text: 'Water'},
    { svg: WineGlass, text: 'Wine'},
]