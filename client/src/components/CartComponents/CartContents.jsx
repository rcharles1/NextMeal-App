

import { useSelector } from 'react-redux'; 
import { selectCartItems } from '../../features/cart/cartSelector'; 

function CartContents(){

    console.log(cartItems);

    return (
        <>
            <div>
                <h2>Cart Contents</h2>
                <ul>
                    ...
                </ul>
            </div>
        </>
    );
}

export default CartContents;