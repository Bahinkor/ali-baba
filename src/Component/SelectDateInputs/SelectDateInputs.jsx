import React, {useState} from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputLabel from "@/Component/InputLabel/InputLabel.jsx";

export default function SelectDateInputs() {
    //state
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    const [isShowDepartureDateLabel, setIsShowDepartureDateLabel] = useState(false);
    const [isShowReturnDateLabel, setIsShowReturnDateLabel] = useState(false);


    //JSX
    return (
        <div className="product-box-input-wrapper">
            <div className="relative p-2 xs:border-l border-b border-solid border-gray-300">
                <InputLabel value="تاریخ رفت" isShow={isShowDepartureDateLabel}/>

                {/* date picker package (departure date) */}
                <DatePicker value={departureDate} onChange={date => setDepartureDate(date)}
                            render={(value, openCalendar) => {
                                return (
                                    <input
                                        value={value}
                                        onClick={openCalendar}
                                        readOnly
                                        className="w-[136px] h-[30px] p-0 m-0 border-0 outline-none"
                                        placeholder="تاریخ رفت"
                                        onFocus={() => setIsShowDepartureDateLabel(true)}
                                    />

                                )
                            }}
                            calendar={persian} locale={persian_fa}
                />
            </div>
            <div className="p-2">
                <InputLabel value="تاریخ بازگشت" isShow={isShowReturnDateLabel}/>

                {/* date picker package (return date) */}
                <DatePicker value={returnDate} onChange={date => setReturnDate(date)}
                            render={(value, openCalendar) => {
                                return (
                                    <input
                                        value={value}
                                        onClick={openCalendar}
                                        readOnly
                                        className="w-[136px] h-[30px] p-0 m-0 border-0 outline-none"
                                        placeholder="تاریخ بازگشت"
                                        onFocus={() => setIsShowReturnDateLabel(true)}
                                    />

                                )
                            }}
                            calendar={persian} locale={persian_fa}
                />
            </div>
        </div>
    );
}