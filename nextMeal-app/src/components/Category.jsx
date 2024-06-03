import { React, useState } from  'react';


function MealCategory({ onCategorySelect, moodOption, resetPage }) {
  const [selected, setSelected] = useState(null);

  const handleClick = index => {
    setSelected(index);
    onCategorySelect(index);
    resetPage();
  };

  return (
    <div className="w-full sm:w-fit sm:px-2 sm:mx-auto flex flex-row h-fit space-x-2 sm:space-x-4">
      {moodOption.map((item, index) => (
        <div key={index} className="flex flex-col space-y-1">
          <div 
              className={`flex flex-row justify-center items-center w-fit bg-pure_white rounded-full p-3 ${selected === index ? 'text-red-500' : 'text-black'} ${selected === index ? 'shadow-sm shadow-bg_variant1' : ''}`} 
              onClick={() => handleClick(index)}
              style={{
                boxShadow: selected === index ? '10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff' : '5px 5px 15px #aeaec0, -5px -5px 15px #ffffff'
              }}
            >
              <item.svg fill={selected === index ? 'red' : 'black'} height="35" width="35"/>
          </div>
          <p className={`text-xs md:text-ssm font-medium text-center ${selected === index ? 'text-bg_variant1' : 'text-default/65'}`}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default MealCategory;
