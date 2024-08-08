import React from "react";

export default function NumberPassengersInput() {
    //JSX
    return (
        <div className="product-box-input-wrapper">
            <div className="p-2">
                <input type="text" className="w-[160px] h-[30px] outline-none"
                       placeholder="تعداد مسافر"/>
            </div>
        </div>
    );
}