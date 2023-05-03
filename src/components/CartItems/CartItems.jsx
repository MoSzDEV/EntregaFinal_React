import { useContext } from "react"
import { ContextCart } from "../../context/Contextcart"
import './CartItems.css'

const CartItems = ({ item, count}) => {
  const {removeItem} = useContext (ContextCart);

  return (
    <div key={item.id} className='cardProductoCart'>
      <img className='imgProductoCart' src={item.img} alt={item.nombre} />
      <p>{item.nombre}</p>
      <p>Cantidad: {count} </p>
      <p>Valor unit: $ {item.precio}</p>
      <button onClick={() => removeItem(item.id)} className='btnProductoCartCard'>Eliminar</button>
    </div>
  )
}

export default CartItems