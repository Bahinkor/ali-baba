import React, {useState, useEffect} from "react";
import {FaPlus, FaMinus} from "react-icons/fa";
import {englishToPersian} from "@/utils/englishToPersianNumber.jsx";


export default function NumberPassengersInput() {
    //state
    const [isShowCounterBox, setIsShowCounterBox] = useState(false);

    const [adultPassengers, setAdultPassengers] = useState(1);
    const [childPassengers, setChildPassengers] = useState(0);
    const [infantPassengers, setInfantPassengers] = useState(0);
    const [sumPassengers, setSumPassengers] = useState(adultPassengers + childPassengers + infantPassengers);

    //function
    const increaseAdultPassengers = () => {
        if (adultPassengers < 9) {
            setAdultPassengers(prevState => prevState + 1);
        }
    }

    const decreaseAdultPassengers = () => {
        if (adultPassengers > 1) {
            setAdultPassengers(prevState => prevState - 1);
        }
    }

    const increaseChildPassengers = () => {
        if (childPassengers < 9) {
            setChildPassengers(prevState => prevState + 1);
        }
    }

    const decreaseChildPassengers = () => {
        if (childPassengers > 0) {
            setChildPassengers(prevState => prevState - 1);
        }
    }

    const increaseInfantPassengers = () => {
        if (infantPassengers < 9) {
            setInfantPassengers(prevState => prevState + 1);
        }
    }

    const decreaseInfantPassengers = () => {
        if (infantPassengers > 0) {
            setInfantPassengers(prevState => prevState - 1);
        }
    }

    //useEffect
    useEffect(() => {
        setSumPassengers(adultPassengers + childPassengers + infantPassengers);
    }, [adultPassengers, childPassengers, infantPassengers]);


    //JSX
    return (
        <div className="relative product-box-input-wrapper">
            <div className="p-2">
                <input type="text" className="w-[160px] h-[30px] outline-none"
                       value={`${englishToPersian(sumPassengers)} مسافر `}
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
                            <button onClick={increaseAdultPassengers}
                                    className={`${adultPassengers === 9 ? "!bg-blue-400 cursor-not-allowed" : ""}`}>
                                <FaPlus/>
                            </button>

                            <span className="w-7 text-center text-black">{englishToPersian(adultPassengers)}</span>

                            <button onClick={decreaseAdultPassengers}
                                    className={`${adultPassengers === 1 ? "!bg-blue-400 cursor-not-allowed" : ""}`}>
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
                            <button onClick={increaseChildPassengers}
                                    className={`${childPassengers === 9 ? "!bg-blue-400 cursor-not-allowed" : ""}`}>
                                <FaPlus/>
                            </button>

                            <span className="w-7 text-center text-black">{englishToPersian(childPassengers)}</span>

                            <button onClick={decreaseChildPassengers}
                                    className={`${childPassengers === 0 ? "!bg-blue-400 cursor-not-allowed" : ""}`}>
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
                            <button onClick={increaseInfantPassengers}
                                    className={`${infantPassengers === 9 ? "!bg-blue-400 cursor-not-allowed" : ""}`}>
                                <FaPlus/>
                            </button>

                            <span className="w-7 text-center text-black">{englishToPersian(infantPassengers)}</span>

                            <button onClick={decreaseInfantPassengers}
                                    className={`${infantPassengers === 0 ? "!bg-blue-400 cursor-not-allowed" : ""}`}>
                                <FaMinus/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}