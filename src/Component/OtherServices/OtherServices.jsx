import React from 'react';
import {Link} from 'react-router-dom';
import Questions from '../Questions/Questions.jsx';
import {MdKeyboardArrowLeft} from "react-icons/md";
import {FaAndroid, FaApple} from "react-icons/fa";

export default function OtherServices() {
    //JSX
    return (
        <div className="mt-5 md:-mt-[50px]">
            <div className="w-full md:w-[80%] mx-auto">
                <div>
                    <h3 className="text-black text-lg font-bold mb-5">سایر خدمات علی بابا</h3>
                    <div
                        className="flex items-center justify-around flex-col md:flex-row text-gray-600 text-sm p-3 border border-solid border-gray-300 rounded-md [&>a]:flex [&>a]:items-center [&>a]:gap-4 [&>span]:w-px [&>span]:h-8 [&>span]:bg-gray-300">
                        <Link to="*">
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/safarcard-3dc2c4c4.svg"
                                 alt="سفر سازمانی"/>
                            <span>سفر کارت (سازمانی)</span>
                        </Link>
                        <span/>

                        <Link to="*">
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/insurance-icon-bb51c425.svg"
                                 alt="بیمه"/>
                            <span>بیمه مسافرتی</span>
                        </Link>
                        <span/>

                        <Link to="*">
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/visa-icon-d8507c8e.svg"
                                 alt="ویزا"/>
                            <span>ویزای سفر</span>
                        </Link>
                        <span/>

                        <Link to="*">
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/gtour-icon-5e641f1b.svg"
                                 alt="تور گروهی"/>
                            <span>تور گروهی</span>
                        </Link>
                    </div>
                </div>

                {/* poster */}
                <div className="mt-5 rounded-md overflow-hidden">
                    <Link to="*">
                        <img
                            src="https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp"
                            alt="ali baba" loading="lazy"/>
                    </Link>
                </div>

                <div className="flex items-center gap-5 mt-5 [&>a]:rounded-md [&>a]:overflow-hidden">
                    <Link to="*">
                        <img
                            src="https://cdn.alibaba.ir/cms/uploads/Safir_Cardview_Banner_Desktop_02_11_25_1385e307de.png"
                            alt="ali baba" loading="lazy"/>
                    </Link>
                    <Link to="*">
                        <img
                            src="https://cdn.alibaba.ir/cms/uploads/AL_Digitalmarketing_Hotel_Festival_Cardview_Banner_Desktop_03_05_08_8bac9a36b0.png"
                            alt="ali baba" loading="lazy"/>
                    </Link>
                </div>

                {/* mobile app poster */}
                <div
                    className="flex items-center justify-between flex-col md:flex-row px-5 md:px-20 pt-3 mt-5 border border-solid border-gray-300 rounded-md">
                    <div className="flex items-center gap-12">
                        <div>
                            {/* QR code image */}
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/qrcode-56155e39.png"
                                 alt="ali baba mobile app QR code"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">اپلیکیشن علی بابا</h3>
                            <span>سریع تر و مطمئن تر به سفر بروید</span>
                            <Link to="*"
                                  className="flex items-center text-blue-600 my-5">مشاهده لینک دانلود
                                <MdKeyboardArrowLeft size="30"/>
                            </Link>
                            <span className="flex items-center gap-2 text-gray-400 text-sm">
                                <FaApple size="20"/>
                                <FaAndroid size="20"/>
                                قابلیت نصب روی Android و IOS
                            </span>
                        </div>
                    </div>

                    {/* mobile image */}
                    <div>
                        <img
                            src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/app-mobile@4x-e3e3b7dc.webp"
                            alt="ali baba mobile app"
                            className="w-[300px]"
                        />
                    </div>
                </div>

                {/* Questions section */}
                <Questions/>
            </div>
        </div>
    );
}