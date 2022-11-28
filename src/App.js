import UseEffectDemo from "./Components/Demo/UseEffectDemo";
import Expenses from "./Components/Expenses/Expenses";
import Login from "./Components/Login/Login";
import Todo from "./Components/Todo/Todo";

import { Route, Routes } from 'react-router-dom';
import ProductList from "./Components/Products/ProductList/ProductList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;

// http://localhost:3000  << ROOT PATH << "/"
// http://localhost:3000/product-list << ProductList