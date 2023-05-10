import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextCart } from '../../context/Contextcart'

const ItemDetail = ({ nombre, precio, id, img, desc, stock }) => {


    const { checkCart, addItem } = useContext(ContextCart);

    const handlerAmount = (cant) => {
        const item = { id, nombre, precio, img, stock };
        addItem(item, cant);
    }

    return (
            <div className='contenedorGroupDetail'>
                <div className='contenedorItemDetail'>
                    <img className='imgProductoDetail' src={img} alt={nombre} />
                </div>
                <div className='contenedorItemDetail'>
                    <p>{nombre}</p>
                    <p>$ {precio},⁰⁰ </p>
                    <p>SKU: {id} </p>
                    <p>Descripcion: {desc} </p>
                    {
                        checkCart(id)
                            ? <><button className="btnProducto"><Link to="/cart">En carrito 🛒</Link></button></>
                            : <div className='contenedorItemCount' ><ItemCount BotonCarrito={"Agregar al carrito"} stock={stock} initial={1} fnAdd={handlerAmount} /></div>
                    }
                </div>
            </div>
    )
}

export default ItemDetail