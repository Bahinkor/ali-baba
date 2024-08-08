import React from "react";

export default function ProductTypeSelectBox() {
    //JSX
    return (
        <div className="product-select-box">
            <select name="Round trip or one way?" className="p-[2px] outline-none">
                <option value="false">یک طرفه</option>
                <option value="true">رفت و برگشت</option>
            </select>
        </div>
    );
}