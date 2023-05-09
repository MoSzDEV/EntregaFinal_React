import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextCart } from '../../context/Contextcart';

const CartWidget = () => {
    const logCart = "https://cdn-icons-png.flaticon.com/512/779/779006.png";
    const {cart} = useContext(ContextCart);
    const total = cart.reduce((total, product) => total +  product.count, 0)

  return (
    <div className='sectCart'>
      <Link to='/cart'>
      <img className='imgCart' src ={logCart} alt="imgCart" />
      <strong>{total}</strong>
      </Link>
    </div>
  )
}

export default CartWidget
