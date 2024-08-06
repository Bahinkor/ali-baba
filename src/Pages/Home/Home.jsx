import ProductsBox from "../../Component/ProductsBox/ProductsBox.jsx";
import {LuArrowLeftRight} from "react-icons/lu";

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
                    <div className="px-8 text-gray-600">
                        <form action="#" onSubmit={e => e.preventDefault()}>
                            <div>
                                <div className="product-select-box">
                                    <select name="Round trip or one way?" className="p-[2px] outline-none">
                                        <option value="false">یک طرفه</option>
                                        <option value="true">رفت و برگشت</option>
                                    </select>
                                </div>

                                <div className="flex items-center">
                                    <div>
                                        <div>
                                            <input type="text" placeholder="مبدا (شهر)"/>
                                        </div>
                                        <span>
                                            <LuArrowLeftRight/>
                                        </span>
                                        <div>
                                            <input type="text" placeholder="مقصد (شهر)"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="text" placeholder="تاریخ رفت"/>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="تاریخ بازگشت"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="تعداد مسافر"/>
                                    </div>
                                    <button type="submit">جستجو</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </ProductsBox>
            </div>
        </div>
    )
}