import { useState, createContext } from "react"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const ContextCart = createContext ({cart:[]});

export const ProviderCart = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addItem = (item, count) => {
        if(!checkCart(item.id)){
            setCart(prev => [...prev, {item, count}]);
            Toastify({
                text: "Producto agregado",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #800080, #805c00)",
                }
              }).showToast();
        }else{
            const newQ = addQ(item.id)
            setCart([...newQ, {item, count}])
            Toastify({
                text: "Actualizando cantidad en carrito",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #805c00, #800080)",
                }
              }).showToast();             
        }
    }

    const removeItem = (id) => {
        const upCart = cart.filter(prod => prod.item.id !== id);
        setCart(upCart);
    }

    const emptyCart = () =>{
        setCart([]);
    }

    const checkCart = (id) => {
        return cart.some(prod => prod.item.id === id);
    }

    const addQ = (id) =>{
        return cart.filter(prod => prod.item.id !== id)
    }

    return (
        <ContextCart.Provider value={{cart, addItem, removeItem, emptyCart}}>
            {children}
        </ContextCart.Provider>
    )

}
