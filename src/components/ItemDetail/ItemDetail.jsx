import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ContextCart } from '../../context/Contextcart'

const ItemDetail = ({ nombre, precio, id, img, desc, stock }) => {

    const [addAmount, setAddAmount] = useState(0);

    const {addItem} = useContext(ContextCart);

    const handlerAmount = (cant) =>{
        setAddAmount(cant);
        const item = {id, nombre, precio, img, stock};
        addItem(item, cant);
    }

    return (
        <>
            <div className='contenedorGroupDetail'>
                <div className='contenedorItemDetail'>
                    <p>{nombre}</p>
                    <p>$ {precio},⁰⁰ </p>
                    <p>SKU: {id} </p>
                    <p>Descripcion: {desc} </p>
                </div>
                <div className='contenedorItemDetail'>
                    <img className='imgProductoDetail' src={img} alt={nombre} />
                {
                    addAmount > 0 
                    ? <button className="btnCart"><Link  to="/cart">  Ver carrito </Link></button>
                    : <ItemCount stock={stock} initial={1} fnAdd={handlerAmount} />
                }
                </div>
            </div>
        </>
    )
}

export default ItemDetail