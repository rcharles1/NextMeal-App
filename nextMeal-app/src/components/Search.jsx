import React, { useState } from 'react';
import { Search, PreviousIcon } from '/src/components/svgs/InterfaceSvg';

function SearchComponent({ colorTheme }) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleSearch = () => {
    console.log("Searched!!");
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      {/* Your other components */}
      <button onClick={handleOpenDialog}>
        <Search fill={colorTheme === 'pure_white' ? 'white' : 'black'} height="25" width="30" />
      </button>

      {isDialogOpen && (
        <div className="dialog fixed top-0 left-0 h-screen bg-pure_white w-full p-3">
          {/* Dialog content */}
          <div className="flex space-x-4 border-b-2 p-3 caret-transparent">
            <button onClick={handleCloseDialog} className="">
                <PreviousIcon stroke={'gray'} height="25" width="30" />
            </button>
            <input type="text" placeholder="Search..." className="p-0.5 w-72 caret-default focus:outline-none"/>
            <button onClick={handleSearch} className="">
                <Search fill={'gray'} height="25" width="30" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;