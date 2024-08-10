import {useRoutes} from "react-router-dom";
import routes from "./routes/routes.jsx";
import Header from "./Component/Header/Header.jsx";
import MobileBottomMenu from "@/Component/MobileBottomMenu/MobileBottomMenu.jsx";


export default function App() {
    //router
    const router = useRoutes(routes);

    //JSX
    return (
        <>
            <Header/>

            <main className="mt-[57px]">
                {router}


                {/* mobile bottom menu */}
                <MobileBottomMenu/>

            </main>

            {/* footer */}
        </>
    )
}