import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import CheckoutDetail from "./components/CheckoutDetail/CheckoutDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProviderCart } from "./context/Contextcart";
import Cart from "./components/Cart/Cart";
import './App.css'

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
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/checkoutDetail/:orderId" element={<CheckoutDetail/>}/>
            <Route path="*" element={<h2 className="message">Sitio en construccion 🤓</h2>} />
          </Routes>
          <Footer />
        </ProviderCart>
      </BrowserRouter>
    </>
  );
}

export default App;
