import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProviderCart } from "./context/Contextcart";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProviderCart>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<h2 style={{display: "grid", height: "80vh", placeContent: "center", fontSize: "50px"}}>Sitio en construccion 🤓</h2>} />
          </Routes>
        </ProviderCart>
      </BrowserRouter>
    </>
  );
}

export default App;
