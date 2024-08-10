import React, {useContext} from "react";
import {IsReturnContext} from "@/ContextAPI/IsReturn.jsx";


export default function ProductTypeSelectBox() {
    //context
    const {isReturnPassenger, setIsReturnPassenger} = useContext(IsReturnContext);

    //JSX
    return (
        <div className="product-select-box">
            <select name="Round trip or one way?" className="p-[2px] outline-none"
                    onChange={e => setIsReturnPassenger(e.target.value)}>
                <option value="false">یک طرفه</option>
                <option value="true">رفت و برگشت</option>
            </select>
        </div>
    );
}