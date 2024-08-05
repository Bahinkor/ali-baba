import ProductsBox from "../../Component/ProductsBox/ProductsBox.jsx";

export default function Home() {
    //JSX
    return (
        <div className="container">
            <div>
                <div>
                    <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-e1fa22fb.webp" alt="Airplane"/>
                </div>
                {/* products box */}
                <ProductsBox>

                </ProductsBox>
            </div>
        </div>
    )
}