import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../services/firebase/config';

const ItemDetailContainer = () => {
    const [productState, setProductState] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        const newDocDetail = doc(db, "products", id)
        
        getDoc(newDocDetail)
        .then((resp) => {
            const data = resp.data();
            const newDetail = {id: resp.id,...data}
            setProductState(newDetail);
        }).catch(error => console.log(error))
    }, [id])
        



    return (
        <>
            <ItemDetail {...productState}/>
        </>
    )
}


export default ItemDetailContainer
