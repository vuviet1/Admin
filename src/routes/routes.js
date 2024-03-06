import config from 'config';

//pages
import Home from 'views/pages/home/Home';
import Category from "views/pages/Category/Category";
import Customer from "views/pages/Customer/Customer";
import Employee from "views/pages/Employee/Employee";
import Order from "views/pages/Order/Order";
import Payment from "views/pages/Payment/Payment";
import Book from "views/pages/Book/Book";
import Login from "views/login";

// Public routes
const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.category, component: Category},
    {path: config.routes.customer, component: Customer},
    {path: config.routes.employee, component: Employee},
    {path: config.routes.order, component: Order},
    {path: config.routes.payment, component: Payment},
    {path: config.routes.book, component: Book},
    {path: config.routes.login, component: Login},
];
const privateRoutes = [];

export {publicRoutes, privateRoutes};
