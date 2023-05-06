import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { getDocs, collection, query, where, orderBy } from "firebase/firestore"
import { db } from '../../services/firebase/config';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
      const producsView = idCategory ? query(collection(db, "products"), where("idCats", "==", idCategory)) : query(collection(db, "products"), orderBy("idCats"));
    getDocs(producsView)
      .then((resp) => {
        setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
  }, [idCategory])



  return (
    <div>
      <h2 className='products'>Productos personalizados</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
