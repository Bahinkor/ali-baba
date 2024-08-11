import React from 'react';
import {Link} from 'react-router-dom';

export default function OtherServices() {
    //JSX
    return (
        <div className="-mt-[50px]">
            <div className="w-[80%] mx-auto">
                <div>
                    <h3 className="text-black text-lg font-bold mb-5">سایر خدمات علی بابا</h3>
                    <div
                        className="flex items-center justify-around text-gray-600 text-sm p-3 border border-solid border-gray-300 rounded-md [&>a]:flex [&>a]:items-center [&>a]:gap-4 [&>span]:w-px [&>span]:h-8 [&>span]:bg-gray-300">
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
            </div>
        </div>
    );
}