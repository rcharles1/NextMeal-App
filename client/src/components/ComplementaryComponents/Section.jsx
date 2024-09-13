import React, { useState } from 'react';

const Section = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white shadow rounded text-default/75 my-6 md:my-3 caret-transparent">
      <div className="flex justify-between items-center cursor-pointer px-5 hover:text-bg_variant1 py-2" onClick={toggleOpen}>
          <span className="text-lg ssm:text-base ssm:uppercase font-bold text-default/75 hover:text-bg_variant1">{title}</span>
          <span>{isOpen ?  <img src={`/assets/icon/minus.svg`} alt="minus-icon" className="size-6 md:size-5" /> :  <img src={`/assets/icon/plus-outline.svg`} alt="plus-icon" className="size-6 md:size-5"/>}</span>
      </div>
      <div className={`transition-all ease-in-out duration-5000 overflow-hidden ${isOpen ? 'h-auto' : 'h-0'}`}>
        <div className="text-default/75 text-base px-5 py-2">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Section;