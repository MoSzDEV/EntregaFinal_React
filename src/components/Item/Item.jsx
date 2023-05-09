import './Item.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { ContextCart } from '../../context/Contextcart';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, nombre, precio, img, stock }) => {

  const { checkCart ,addItem } = useContext(ContextCart);
  

  const handlerAmount = (cant) => {
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
         checkCart(id)
          ? <><button className="btnProducto"><Link to="/cart">En carrito 🛒</Link></button></>
          : <ItemCount stock={stock} initial={1} fnAdd={handlerAmount} />
      }
    </div>
  )
}

export default Item
