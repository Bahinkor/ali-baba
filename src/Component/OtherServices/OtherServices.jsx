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
                        className="flex items-center justify-around text-gray-600 text-sm p-3 border border-solid border-gray-300 [&>a]:flex [&>a]:items-center [&>a]:gap-4 [&>span]:w-px [&>span]:h-8 [&>span]:bg-gray-300">
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
            </div>
        </div>
    );
}