import { useContext } from "react"
import { ContextCart } from "../../context/Contextcart"
import './CartItems.css'
import ItemCount from "../ItemCount/ItemCount"

const CartItems = ({ item, count}) => {
  
  const {addItem, removeItem} = useContext (ContextCart);

  const handlerAmount = (cant) => {
      addItem(item, cant);
  }

  return (
    <div key={item.id} className='cardProductoCart'>
      <img className='imgProductoCart' src={item.img} alt={item.nombre} />
      <p>{item.nombre}</p>
      <p>Cantidad: {count} </p>
      <p>Valor unit: $ {item.precio}</p>
      <div className='contenedorItemCount' style={{display:"flex", width:"auto"}}><ItemCount BotonCarrito={"Actualizar cantidad"} stock={item.stock} initial={count} fnAdd={handlerAmount} /></div>
      <button onClick={() => removeItem(item.id)} className='btnProductoCartCard'>Eliminar</button>
    </div>
  )
}

export default CartItems