import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Initialize SweetAlert with React content
const MySwal = withReactContent(Swal);

function CartItem ( {product} ) {

    const {  removeFromCart, order  } = useContext(cartContext);


    const handleRemove = () => {
        removeFromCart(product.id);
       MySwal.fire({
      title: 'Removed from Cart!',
      text: `${product.name} x ${product.qty} has been removed from your cart.`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
      };

    return (
        <li className="cartProductItem">
          <img className="cartProductImage" src={product.image} alt={product.name + ' illustration'} />
          <p>{product.name} x {product.qty} <span>Subtotal = ${product.price * product.qty}</span></p> 
          <button onClick={handleRemove}>Remove from Cart</button>
        </li>
    )
}

export default CartItem