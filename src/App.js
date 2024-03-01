import './App.css';
import Index from './views/pages/index';
import Category from "./views/pages/Category";
import Customer from "./views/pages/Customer";
import Employee from "./views/pages/Employee";
import Order from "./views/pages/Order";
import Payment from "./views/pages/Payment";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />}  />
          <Route path="/category" element={<Category />}  />
          <Route path="/employee" element={<Employee />}  />
          <Route path="/customer" element={<Customer />}  />
          <Route path="/order" element={<Order />}  />
          <Route path="/payment" element={<Payment />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
