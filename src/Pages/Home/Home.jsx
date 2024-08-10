import ProductDetailsInternalFlight
    from "../../Component/ProductDetailsInternalFlight/ProductDetailsInternalFlight.jsx";

export default function Home() {
    //JSX
    return (
        <div className="container">
            <div>
                <div className="hidden md:block">
                    <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-e1fa22fb.webp" alt="Airplane"/>
                </div>
                {/* products Details box */}
                <ProductDetailsInternalFlight/>
            </div>
        </div>
    )
}