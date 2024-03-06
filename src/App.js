import './App.css';
import Index from './views/pages/home/Home';
import Category from "./views/pages/Category/Category";
import Customer from "./views/pages/Customer/Customer";
import Employee from "./views/pages/Employee/Employee";
import Order from "./views/pages/Order/Order";
import Payment from "./views/pages/Payment/Payment";
import Book from "./views/pages/Book/Book";
import Login from "./views/login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { publicRoutes } from 'routes';



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
          <Route path="/book" element={<Book />}  />
          <Route path="/login" element={<Login />}    />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
