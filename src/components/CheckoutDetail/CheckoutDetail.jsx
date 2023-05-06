import './CheckoutDetail.css'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore"
import { useState, useEffect } from 'react';
import { db } from '../../services/firebase/config';

const CheckoutDetail = () => {
    const [orders, setOrders] = useState([]);
    const { orderId } = useParams();

    useEffect(() => {
        const orderViewer = orderId ? query(collection(db, "ordenes"), where("id", "==", orderId)) : query(collection(db, "ordenes"));
        getDocs(orderViewer)
            .then((resp) => {
                setOrders(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
    }, [orderId])

    return (
        <div className='ticket'>

            <div className='ticketDetail'>
                {
                    orders.map(e =>
                        <>
                            <h1>Detalle de compra 💳</h1>
                            <h2>Orden N°: {e.id}</h2>
                            <p>Nombre: {e.name}</p>
                            <p>Apellido: {e.surname}</p>
                            <p>Tel: {e.phoneNumber}</p>
                            <p>Email: {e.email}</p>
                            {e.items.map(i =>
                                <p>Item: "{i.producto}" x {i.cantidad}u.</p>
                            )
                            }
                            <h3>Total: ${e.total}</h3>
                        </>
                    )
                }
            </div>
            <h4>Por consultas sobre estado de la orden envienos un mail a MoSzArt@reactjs.com</h4>
            <p style={{color: "#008000"}}>Por favor piense en el medio ambiente antes de imprimir este comprobante.</p>
        </div>
    )
}

export default CheckoutDetail