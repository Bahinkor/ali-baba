import React from "react";

export default function SelectDateInputs() {
    //JSX
    return (
        <div className="product-box-input-wrapper">
            <div className="p-2 border-l border-solid border-gray-300">
                <input type="text" className="max-w-[136px] h-[30px] outline-none"
                       placeholder="تاریخ رفت"/>
            </div>
            <div className="p-2">
                <input type="text" disabled className="max-w-[136px] h-[30px] outline-none"
                       placeholder="تاریخ بازگشت"/>
            </div>
        </div>
    );
}