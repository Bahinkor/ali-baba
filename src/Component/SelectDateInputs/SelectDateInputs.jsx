import React, {useState} from "react";
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function SelectDateInputs() {
    //state
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    //JSX
    return (
        <div className="product-box-input-wrapper">
            <div className="p-2 border-l border-solid border-gray-300">
                <DatePicker value={departureDate} onChange={setDepartureDate}
                            calendar={persian} locale={persian_fa} placeholder="تاریخ رفت"
                            inputClass="w-[136px] h-[30px] p-0 m-0 border-0 outline-none"
                />
            </div>
            <div className="p-2">
                <DatePicker value={returnDate} onChange={setReturnDate}
                            calendar={persian} locale={persian_fa} placeholder="تاریخ بازگشت"
                            inputClass="w-[136px] h-[30px] p-0 m-0 border-0 outline-none"
                />
            </div>
        </div>
    );
}