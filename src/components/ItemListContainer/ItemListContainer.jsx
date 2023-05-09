import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { getDocs, collection, query, where, orderBy } from "firebase/firestore"
import { db } from '../../services/firebase/config';
import Loading from '../Loading/Loading';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idCategory } = useParams();

  useEffect(() => {
      const producsView = idCategory ? query(collection(db, "products"), where("idCats", "==", idCategory)) : query(collection(db, "products"), orderBy("idCats"));
      !idCategory && setLoading(true);
      getDocs(producsView)
      .then((resp) => {
        setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);})
  }, [idCategory])



  return (
    <div>
      <h2 className='products'>Productos personalizados</h2>
      {loading && <Loading/>}
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
