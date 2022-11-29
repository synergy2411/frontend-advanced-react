import UseEffectDemo from "./Components/Demo/UseEffectDemo";
import Expenses from "./Components/Expenses/Expenses";
import Login from "./Components/Login/Login";
import Todo from "./Components/Todo/Todo";

import { Route, Routes } from 'react-router-dom';
import ProductList from "./Components/Products/ProductList/ProductList";
import AddProduct from "./Components/Products/AddProduct/AddProduct";
import Header from "./Components/Products/Header/Header";
import Users from "./Components/Demo/Users/Users";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product-list/*" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;

// http://localhost:3000  << ROOT PATH << "/"
// http://localhost:3000/product-list << ProductList