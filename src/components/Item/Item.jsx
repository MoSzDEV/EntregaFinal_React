import './Item.css'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'
import { ContextCart } from '../../context/Contextcart';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, nombre, precio, img, stock }) => {

  const [addAmount, setAddAmount] = useState(0);

  const { addItem } = useContext(ContextCart);

  const handlerAmount = (cant) => {
    setAddAmount(cant);
    const item = { id, nombre, precio, img , stock};
    addItem(item, cant);
  }


  return (
    <div className='cardProducto'>
      <img className='imgProducto' src={img} alt={nombre} />
      <p>{nombre}</p>
      <p>$ {precio},⁰⁰ </p>
      <p>SKU: {id} </p>
      <Link to={`/item/${id}`} className='btnProducto'> Ver Detalles </Link>
      {
        addAmount > 0
          ? <><button className="btnProducto"><Link to="/cart">En carrito 🛒</Link></button></>
          : <ItemCount stock={stock} initial={1} fnAdd={handlerAmount} />
      }
    </div>
  )
}

export default Item
