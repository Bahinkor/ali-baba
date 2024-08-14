import Home from "../Pages/Home/Home.jsx";
import NotFound from "../Pages/NotFound/NotFound.jsx";
import Products from "../Pages/Products/Products.jsx";

const routes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
    {
        path: "/products",
        element: <Products/>,
    }
];

export default routes;