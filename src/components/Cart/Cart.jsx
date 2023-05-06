import { Link } from "react-router-dom"
import { useContext } from "react"
import { ContextCart } from "../../context/Contextcart"
import CartItems from "../CartItems/CartItems"
import './Cart.css'

const Cart = () => {

    const {cart, emptyCart} =useContext(ContextCart);
    const totalCount =  cart.reduce((total, product) => total + product.count, 0)
    const total = cart.reduce((total, product) => total + (product.item.precio * product.count), 0)

    if(totalCount === 0){
        return(
            <>
                <Link to="/" className="message">Agregar productos 🎨</Link>
            </>
        )

    }
    return (
        <>
        <div className='cart'>
            {cart.map(product => <CartItems key={product.id} {...product}/>)}
        </div>
        <div className='cart'>
            <h3 className='totalProductoCart'>Total: ${total}</h3>
            <button className='btnProductoCart' onClick={emptyCart}>Vaciar carrito</button>
            <Link to='/'><button className='btnProductoCart'>Agregar productos</button></Link>
            <Link to='/checkout'><button className='btnProductoCart'>Finalizar compra</button></Link>
        </div>
        </>
    )
}

export default Cart