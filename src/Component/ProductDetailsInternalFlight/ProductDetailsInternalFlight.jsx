import React from 'react';
import ProductTypeSelectBox from "@/Component/ProductTypeSelectBox/ProductTypeSelectBox.jsx";
import ProductsBox from "@/Component/ProductsBox/ProductsBox.jsx";
import SelectCitiesInput from "@/Component/SelectCitiesInput/SelectCitiesInput.jsx";
import SelectDateInputs from "@/Component/SelectDateInputs/SelectDateInputs.jsx";
import NumberPassengersInput from "@/Component/NumberPassengersInput/NumberPassengersInput.jsx";

export default function ProductDetailsInternalFlight() {

    //JSX
    return (
        <>

            <ProductsBox>
                <div className="px-8 pb-[36px] text-gray-600">
                    <form action="#" onSubmit={e => e.preventDefault()}>
                        <div>
                            {/* type select box component */}
                            <ProductTypeSelectBox/>

                            <div className="flex items-center gap-2 flex-wrap">
                                {/* select city input (button) for internal flight */}
                                <SelectCitiesInput/>

                                {/* select date input for flight */}
                                <SelectDateInputs/>

                                {/* number of passengers */}
                                <NumberPassengersInput/>

                                <button type="submit" className="product-box-submit-button">جستجو
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </ProductsBox>

        </>
    );
}