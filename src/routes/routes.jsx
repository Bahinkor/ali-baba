import Home from "../Pages/Home/Home.jsx";
import NotFound from "../Pages/NotFound/NotFound.jsx";

const routes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    }
];

export default routes;