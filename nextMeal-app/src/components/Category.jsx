import { React } from  'react';
import { moods } from '../utilities/moods';

function MealCategory() {
    return (
      <div className=" w-full  flex flex-row h-fit space-x-2">
        {moods.map((item, index) => (
          <div key={index} className="flex  flex-col space-y-1">
            <div className="flex flex-row justify-center itmes-center w-fit bg-pure_white rounded-full p-3"><item.svg fill="black" height="35" width="35"/></div>
            <p className="text-xs font-medium text-default/65 text-center">{item.text}</p>
          </div>
        ))}
      </div>
    )
}

export default MealCategory;