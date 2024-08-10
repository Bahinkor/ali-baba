import ProductDetailsInternalFlight
    from "../../Component/ProductDetailsInternalFlight/ProductDetailsInternalFlight.jsx";

export default function Home() {
    //JSX
    return (
        <>
            {/* shape */}
            <div
                className="absolute top-0 left-0 right-0 flex justify-center items-start md:hidden h-[10rem] bg-yellow-400">

                <img src="https://cdn.alibaba.ir/h2/mobile/assets/images/shawl_logotype_black-86af55bd.svg"
                     alt="ali baba logo"
                     className="w-[125px] mt-3"
                />
            </div>


            {/* home page */}
            <div className="container">
                <div>
                    <div className="hidden md:block">
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-e1fa22fb.webp"
                             alt="Airplane"/>
                    </div>
                    {/* products Details box */}
                    <ProductDetailsInternalFlight/>
                </div>
            </div>
        </>
    )
}