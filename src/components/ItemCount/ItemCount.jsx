import { useState, useEffect } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, fnAdd }) => {
    const [counter, setCounter] = useState(initial);


    const increaseCounter = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decreaseCounter = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }


    return (
        <div className="count">            
            <button className="btnCart" onClick={decreaseCounter}> - </button>
            <strong className="countCart"> {counter} </strong>
            <button className="btnCart" onClick={increaseCounter}> + </button>
            <button className="btnCart" onClick={() => fnAdd(counter)} id="boton"> Agregar al Carrito </button>
        </div>
    )
}

export default ItemCount
