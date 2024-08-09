import React from "react";
import {FaPlus, FaMinus} from "react-icons/fa";

export default function NumberPassengersInput() {
    //JSX
    return (
        <div className="relative product-box-input-wrapper">
            <div className="p-2">
                <input type="text" className="w-[160px] h-[30px] outline-none"
                       placeholder="تعداد مسافر"/>

                {/* counter box */}
                <div className="absolute w-[300px] p-4 border border-solid border-gray-300">
                    <div className="flex items-center justify-between">
                        <p>بزرگسال
                            <span>(۱۲ سال به بالا)</span>
                        </p>
                        <div>
                            <button>
                                <FaPlus/>
                            </button>

                            <span>۱</span>

                            <button>
                                <FaMinus/>
                            </button>
                        </div>
                    </div>

                    {/*    */}
                    <div>
                        <p>کودک
                            <span>(۲ تا ۱۲ سال)</span>
                        </p>
                        <div>
                            <button>
                                <FaPlus/>
                            </button>

                            <span>۰</span>

                            <button>
                                <FaMinus/>
                            </button>
                        </div>
                    </div>

                    {/*    */}
                    <div>
                        <p>نوزاذ
                            <span>(۱۰ روز تا ۲ سال)</span>
                        </p>
                        <div>
                            <button>
                                <FaPlus/>
                            </button>

                            <span>۰</span>

                            <button>
                                <FaMinus/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}