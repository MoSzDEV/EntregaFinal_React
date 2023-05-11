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
      <p className="itemsCart">Item: "{item.nombre}" </p>
      <p className="itemsCart">Cantidad: {count} </p>
      <p className="itemsCart">Valor unit: $ {item.precio}</p>
      <div style={{display:"flex", width:"auto"}}>
        <ItemCount BotonCarrito={"Actualizar cantidad"} stock={item.stock} initial={count} fnAdd={handlerAmount} />
      </div>
      <div >
        <button onClick={() => removeItem(item.id)} className="btnDel">Eliminar</button>
        </div>
    </div>
  )
}

export default CartItems