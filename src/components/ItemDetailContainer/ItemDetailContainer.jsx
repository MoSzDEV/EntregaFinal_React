import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../services/firebase/config';

const ItemDetailContainer = () => {
    const [productState, setProductState] = useState(null);
    const {id} = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const newDocDetail = doc(db, "products", id)
        setLoading(true)
        getDoc(newDocDetail)
        .then((resp) => {
            const data = resp.data();
            const newDetail = {id: resp.id,...data}
            setProductState(newDetail);
            setLoading(false);
        }).catch(error => console.log(error))
    }, [id])
        



    return (
        <>
            {loading && <h2 className='products'>Cargando...</h2>}
            <ItemDetail {...productState}/>
        </>
    )
}


export default ItemDetailContainer
