import React from 'react';

export default function Description() {
    //JSX
    return (
        <div className="w-full md:w-[80%] mx-auto mt-10 text-sm text-gray-600 leading-loose">
            <div className="flex items-center flex-col lg:flex-row justify-between xl:gap-40">
                <div>
                    <h3 className="text-xl text-black font-bold my-10">بلیط هواپیما</h3>
                    <p>
                        علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از
                        سال ۱۳۹۳ کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی از کاربران را به دست
                        بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت؛ اما به مرور امکان خرید
                        سایر محصولات گردشگری نیز به علی‌بابا اضافه شد.
                    </p>

                    <h4 className="text-lg text-black font-semibold mt-10 mb-5">مزایای خرید بلیط هواپیما از
                        علی‌بابا</h4>
                    <p>
                        شما با خرید بلیط هواپیما از علی‌بابا با سامانه مطمئن و معتبری روبه‌رو هستید که تمام نیازهایتان
                        را پاسخ می‌دهد. برای خرید آنلاین بلیط هواپیما در علی‌بابا کافیست مبدا، مقصد و تاریخ پرواز خود را
                        انتخاب کنید. پس از کلیک روی جستجو، لیست قیمت بلیط هواپیما به مقصد مورد نظر شما ظاهر می‌شود. در
                        این لیست، انتخابهای متعددی پیش روی شماست. برای اینکه گزینه‌ ها را برای خرید بلیط هواپیما محدودتر
                        کنید، علی‌بابا ابزارهای مختلفی در اختیار شما می‌گذارد.
                    </p>
                </div>
                <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/baggage/baggage@3x-bda919ec.webp"
                     alt="ali baba" loading="lazy" className="w-[480px]"/>
            </div>
        </div>
    );
}