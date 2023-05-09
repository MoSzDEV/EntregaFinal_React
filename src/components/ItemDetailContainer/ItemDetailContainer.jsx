import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
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
            {loading && <div style={{marginTop: "8rem"}}><Loading shape={ "line" }/></div>}
            <ItemDetail {...productState}/>
        </>
    )
}


export default ItemDetailContainer
