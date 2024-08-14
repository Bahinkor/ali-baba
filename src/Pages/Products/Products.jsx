import React from 'react';
import {Link} from 'react-router-dom';
import {MdOutlineNotificationImportant} from "react-icons/md";

export default function Products() {
    //JSX
    return (
        <div className="container">
            <div className="w-full lg:w-[60%] mx-auto py-5">
                <span className="flex items-center gap-2 pb-3 text-sm text-gray-600">
                    <MdOutlineNotificationImportant size={20}/>
                    قیمت ها برای یک بزرگسال محاسبه شده است.
                </span>

                <div className="flex items-center justify-between flex-col md:flex-row md:p-5 bg-gray-100 mb-5 rounded-md border border-solid border-gray-300 shadow">
                    <div>
                        <div className="flex items-center gap-2 py-7 text-lg">
                            <span>تهران</span>
                            <span className="font-bold">۰۴:۴۵</span>
                            <span className="mx-5">به</span>
                            <span>شیراز</span>
                            <span className="font-bold">۰۶:۰۵</span>
                        </div>
                        <div
                            className="flex items-center justify-center md:justify-start gap-5 my-5 md:my-0 text-xs text-blue-600">
                            <Link to="*">اطلاعات پرواز</Link>
                            <Link to="*">قوانین استرداد</Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 pr-5 md:border-r border-solid border-gray-300">
                        <div className="text-blue-600 text-lg font-bold">
                            ۲,۰۰۰,۰۰۰
                            <span className="inline-block text-sm font-light mr-1">تومان</span>
                        </div>
                        <div>
                            <Link to="*" className="bg-blue-600 text-white px-10 py-2 rounded-lg">انتخاب پرواز</Link>
                        </div>
                        <div>
                            <span className="text-red-500 text-xs">۵ صندلی باقی مانده</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}