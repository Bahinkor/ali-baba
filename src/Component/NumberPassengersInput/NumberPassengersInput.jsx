import React, {useState} from "react";
import {FaPlus, FaMinus} from "react-icons/fa";
import {englishToPersian} from "@/utils/englishToPersianNumber.jsx";


export default function NumberPassengersInput() {
    //state
    const [isShowCounterBox, setIsShowCounterBox] = useState(false);

    const [adultPassengers, setAdultPassengers] = useState(1);
    const [childPassengers, setChildPassengers] = useState(0);
    const [infantPassengers, setInfantPassengers] = useState(0);
    const [sumPassengers, setSumPassengers] = useState(adultPassengers + childPassengers + infantPassengers);

    const [adultPassengersFA, setAdultPassengersFA] = useState(englishToPersian(adultPassengers));
    const [childPassengersFA, setChildPassengersFA] = useState(englishToPersian(childPassengers));
    const [infantPassengersFA, setInfantPassengersFA] = useState(englishToPersian(infantPassengers));
    const [sumPassengersFA, setSumPassengersFA] = useState(englishToPersian(sumPassengers));

    //function


    //JSX
    return (
        <div className="relative product-box-input-wrapper">
            <div className="p-2">
                <input type="text" className="w-[160px] h-[30px] outline-none"
                       value={`${sumPassengersFA} مسافر `}
                       readOnly
                       onClick={() => setIsShowCounterBox(!isShowCounterBox)}
                />

                {/* counter box */}
                <div
                    className={`absolute top-[47px] w-[300px] bg-white p-4 rounded-md border border-solid border-gray-300 transition opacity-0 invisible ${isShowCounterBox ? "!opacity-100 !visible" : ""} [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:mb-6`}>

                    {/* Adults */}
                    <div>
                        <p className="text-sm text-black">بزرگسال
                            <span className="text-gray-500 mr-2">(۱۲ سال به بالا)</span>
                        </p>
                        <div
                            className="flex items-center gap-2 [&>button]:bg-blue-500 [&>button]:text-white [&>button]:p-1 [&>button]:rounded-md">
                            <button>
                                <FaPlus/>
                            </button>

                            <span className="w-7 text-center text-black">{adultPassengersFA}</span>

                            <button>
                                <FaMinus/>
                            </button>
                        </div>
                    </div>

                    {/* Children */}
                    <div>
                        <p className="text-sm text-black">کودک
                            <span className="text-gray-500 mr-2">(۲ تا ۱۲ سال)</span>
                        </p>
                        <div
                            className="flex items-center gap-2 [&>button]:bg-blue-500 [&>button]:text-white [&>button]:p-1 [&>button]:rounded-md">
                            <button>
                                <FaPlus/>
                            </button>

                            <span className="w-7 text-center text-black">{childPassengersFA}</span>

                            <button>
                                <FaMinus/>
                            </button>
                        </div>
                    </div>

                    {/* babies */}
                    <div className="!mb-0">
                        <p className="text-sm text-black">نوزاد
                            <span className="text-gray-500 mr-2">(۱۰ روز تا ۲ سال)</span>
                        </p>
                        <div
                            className="flex items-center gap-2 [&>button]:bg-blue-500 [&>button]:text-white [&>button]:p-1 [&>button]:rounded-md">
                            <button>
                                <FaPlus/>
                            </button>

                            <span className="w-7 text-center text-black">{infantPassengersFA}</span>

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