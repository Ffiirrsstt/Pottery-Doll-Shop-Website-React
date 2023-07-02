import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import PageMain from "./PageMain";
import Cart from "./component/Cart";
import Contact from "./Contact";
import Disproduct from "./Disproduct";
import Itemdetail from "./component/Itemdetail";
import Notfound from "./component/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageMain />}></Route>
          <Route path="/product" element={<Disproduct />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<Itemdetail />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
