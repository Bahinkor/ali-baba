import {useRoutes} from "react-router-dom";
import routes from "./routes/routes.jsx";

export default function App() {
    //router
    const router = useRoutes(routes);

    //JSX
    return (
        <>
            {/* header */}

            {router}

            {/* footer */}
        </>
    )
}