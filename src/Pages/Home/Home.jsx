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
                    <div className="px-8 pb-[36px] text-gray-600">
                        <form action="#" onSubmit={e => e.preventDefault()}>
                            <div>
                                <div className="product-select-box">
                                    <select name="Round trip or one way?" className="p-[2px] outline-none">
                                        <option value="false">یک طرفه</option>
                                        <option value="true">رفت و برگشت</option>
                                    </select>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="product-box-input-wrapper">
                                        <div className="relative p-2 border-l border-solid border-gray-300">
                                            <input type="text" className="outline-none" placeholder="مبدا (شهر)"/>

                                            {/* arrow left-right */}
                                            <span className="product-arrow-left-right">
                                                <LuArrowLeftRight/>
                                            </span>
                                        </div>
                                        <div className="p-2">
                                            <input type="text" className="pr-4 outline-none" placeholder="مقصد (شهر)"/>
                                        </div>
                                    </div>
                                    <div className="product-box-input-wrapper">
                                        <div className="p-2 border-l border-solid border-gray-300">
                                            <input type="text" className="outline-none" placeholder="تاریخ رفت"/>
                                        </div>
                                        <div className="p-2">
                                            <input type="text" className="outline-none" placeholder="تاریخ بازگشت"/>
                                        </div>
                                    </div>
                                    <div className="product-box-input-wrapper">
                                        <div className="p-2">
                                            <input type="text" className="outline-none" placeholder="تعداد مسافر"/>
                                        </div>
                                    </div>
                                    <button type="submit"
                                            className="product-box-input-wrapper bg-yellow-400 p-2 text-black">جستجو
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </ProductsBox>
            </div>
        </div>
    )
}