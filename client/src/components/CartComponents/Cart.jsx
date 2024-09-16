import { useState } from 'react';
import { CartIcon,  CloseIcon } from '../svgs/InterfaceSvg';
import CartContents from './CartContents';

function Cart() {
  const [isDialogOpen, setDialogOpen] = useState(false); 

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const showInputField = location.pathname === '/'; 

  return (
    <div>
      <button onClick={handleOpenDialog} className={`${isDialogOpen ? 'collapse' : 'block'} caret-transparent flex flex-row md:w-96 space-x-1 items-center md:space-x-1.5 md:p-1.5 md:px-3 md:pt-1.5 px-3 p-1`}>
        <CartIcon fill='black'  />
      </button>

      {isDialogOpen ? (
        <div className="fixed inset-0 z-30 bg-default opacity-50" style={{ backdropFilter: 'blur(5px)' }}></div>                
      ) : ''}

      {isDialogOpen && (
        <div className="dialog z-30 h-screen w-full bg-pure_white sm:rounded-lg absolute sm:max-top-0 left-0 p-4 sm:h-96 mx-auto sm:w-96 sm:my-5 sm:-ml-96 md:-mt-56 md:fixed md:top-72 md:left-2/3 sm:mx-auto -mt-10">
          {/* Dialog content */}
          <div className="flex w-full space-x-4 border-b border-offset-4 items-center mt-2 md:pb-1.5 md:space-x-0.5 md:p-0 border-silver/75 p-3">
            <button onClick={handleCloseDialog} ><CloseIcon fill="black" /></button>
            <h2 className="text-lg font-semibold">Shopping Cart </h2>
          </div>
          <div className="bg-silver/55 h-2/3 mt-6 grid grid-cols-2 gap-6">
            <CartContents />
         </div>
        </div>
      )}
    </div>
  );
}

export default Cart;