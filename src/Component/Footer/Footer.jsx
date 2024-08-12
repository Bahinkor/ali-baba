import React from 'react';

export default function Footer() {
    //JSX
    return (
        <footer>
            <div className="mt-[10rem] border-t border-solid border-gray-300">
                <div className="container">
                    <div className="w-[80%] mx-auto">
                        <div
                            className="flex items-center justify-around flex-col lg:flex-row gap-10 lg:gap-20 py-10 [&>div]:flex [&>div]:items-center [&>div]:gap-2">
                            {/*  */}
                            <div>
                                <img
                                    src="data:image/webp;base64,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"
                                    alt="ali baba" loading="lazy" className="w-[89px]"
                                />
                                <div>
                                    <span className="block font-bold mb-2">رتبه یک سفر</span>
                                    <p className="text-sm text-gray-600 leading-relaxed">معتبرترین عرضه‌کننده محصولات
                                        گردشگری در ایران</p>
                                </div>
                            </div>
                            {/*  */}
                            <div>
                                <img
                                    src="data:image/webp;base64,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"
                                    alt="ali baba" loading="lazy" className="w-[89px]"
                                />
                                <div>
                                    <span className="block font-bold mb-2">همسفر هر سفر</span>
                                    <p className="text-sm text-gray-600 leading-relaxed">ارائه تمامی خدمات سفر (پرواز،
                                        قطار، اتوبوس، هتل و تور)</p>
                                </div>
                            </div>
                            {/*  */}
                            <div>
                                <img
                                    src="data:image/webp;base64,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"
                                    alt="ali baba" loading="lazy" className="w-[89px]"
                                />
                                <div>
                                    <span className="block font-bold mb-2">همسفر همه لحظات سفر</span>
                                    <p className="text-sm text-gray-600 leading-relaxed">پشتیبانی و همراهی ۲۴ ساعته در
                                        تمامی مراحل سفر</p>
                                </div>
                            </div>
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}