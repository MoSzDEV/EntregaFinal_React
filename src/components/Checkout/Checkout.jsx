import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ContextCart } from '../../context/Contextcart'
import { db } from '../../services/firebase/config'
import { collection, doc, addDoc, updateDoc } from 'firebase/firestore'
import Loading from '../Loading/Loading'
import './Checkout.css'


const Checkout = () => {

    const { cart, emptyCart } = useContext(ContextCart)
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [emailCheck, setEmailCheck] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);

    const discountStock = (err, id, stock, sellItems) => {
        if (err === "") {
            const productOut = doc(db, "products", id)
            updateDoc(productOut, {
                stock: stock - sellItems,
            })
        }
        return;
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        if (cart.length == 0 || !name || !surname || !phoneNumber || !email || !emailCheck) {
            setError("Por favor complete todos los campos correctamente!")
            return;
        }

        if (email !== emailCheck) {
            setError("Su e-mail y confirmacion de e-mail no coinciden")
            return;
        }

        const orden = {
            items: cart.map((element) => ({
                id: element.item.id,
                producto: element.item.nombre,
                cantidad: element.count,
            })),
            total: cart.reduce((total, element) => total + element.item.precio * element.count, 0),
            name,
            surname,
            phoneNumber,
            email,
        }

        setLoading(true);

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrderId(docRef.id);
                updateDoc(docRef, {
                    id: docRef.id
                })
                emptyCart();
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al crear la orden, por favor revise la info, aguarde un instante y vuelva a enviar la solicitud", { err })
                setError("Error al procesar, aguarde y vuelva a intentar por favor.");
            })

        cart.map((e) => (
            discountStock(error, e.item.id, e.item.stock, e.count)
        ))


        setName("");
        setSurname("");
        setPhoneNumber("");
        setEmail("");
        setEmailCheck("");
        setError("");
    }

    return (
        <div >
            <h2 className='titleCheckout'>
                CheckOut 🛒
            </h2>
            <form className='preTicket' onSubmit={handleSumbit}>
                <div className='resume'>
                    <h3 className='subTitleCheckout'>Resumen:</h3>
                    {
                        cart.map((element) => (
                            <div key={element.item.id}>
                                <h4>"{element.item.nombre}" x {element.count}</h4>
                                <p>Precio u.: ${element.item.precio} Total item: ${element.item.precio * element.count}</p>
                            </div>
                        ))
                    }
                    <h4 className='subTitleCheckout'>Total a pagar: ${
                        cart.reduce((total, element) => total + element.item.precio * element.count, 0)}
                    </h4>
                </div>
                <div className='form'>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="">Apellido:</label>
                    <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                    <label htmlFor="">Telefono:</label>
                    <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <label htmlFor="">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Confirmar Email:</label>
                    <input type="email" value={emailCheck} onChange={(e) => setEmailCheck(e.target.value)} />
                    <div className='confirm'>
                    <button className='btnProductoConfirm'> <Link to="/cart">Editar carrito</Link></button>
                    <button className='btnProductoConfirm' type='submit'>Finalizar compra</button>
                    </div>
                </div>
            </form>
            <div className='checkoutDetail'>
                {loading && <Loading shape={ "clock" }/>}
                {error && <p style={{ color: "red" }}> {error} </p>}
                {orderId &&
                    <>  
                        <strong> Gracias por tu compra, tu numero de orden es {orderId} </strong>
                        <Link to={`/checkoutDetail/${orderId}`} ><button className='btnProductoConfirm'> Ver detalle </button></Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Checkout