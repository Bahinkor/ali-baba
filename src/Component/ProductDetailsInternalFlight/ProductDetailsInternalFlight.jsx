import React, {useState} from 'react';
import {LuArrowLeftRight} from "react-icons/lu";
import ProductsBox from "@/Component/ProductsBox/ProductsBox.jsx";
import {Check} from "lucide-react";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";


export default function ProductDetailsInternalFlight() {
    //state
    const [cities, setCities] = useState([
        {
            value: "تهران",
            label: "تهران",
        },
        {
            value: "شیراز",
            label: "شیراز",
        },
        {
            value: "مشهد",
            label: "مشهد",
        },
        {
            value: "زنجان",
            label: "زنجان",
        },
        {
            value: "کرج",
            label: "کرج",
        },
    ]);

    const [originInputValue, setOriginInputValue] = useState("");
    const [destinationInputValue, setDestinationInputValue] = useState("");
    const [isOpenSearchBarOriginInput, setIsOpenSearchBarOriginInput] = useState(false);
    const [isOpenSearchBarDestinationInput, setIsOpenSearchBarDestinationInput] = useState(false);

    //JSX
    return (
        <>

            <ProductsBox>
                <div className="px-8 pb-[36px] text-gray-600">
                    <form action="#" onSubmit={e => e.preventDefault()}>
                        <div>
                            <div className="product-select-box">
                                <select name="Round trip or one way?" className="p-[2px] outline-none">
                                    <option value="false">یک طرفه</option>
                                    <option value="true">رفت و برگشت</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-2 flex-wrap">
                                <div className="product-box-input-wrapper">
                                    <div className="relative p-2 border-l border-solid border-gray-300">

                                        {/* shadcn component (origin) */}
                                        <Popover open={isOpenSearchBarOriginInput}
                                                 onOpenChange={setIsOpenSearchBarOriginInput}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={isOpenSearchBarOriginInput}
                                                    className="w-[200px] h-[30px] text-[16px] p-0 border-0 justify-between !outline-none hover:bg-white"
                                                >
                                                    {originInputValue
                                                        ? cities.find((city) => city.value === originInputValue)?.label
                                                        : "مبدا (شهر)"}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[200px] p-0">
                                                <Command>
                                                    <CommandInput placeholder="جستحوی شهر"/>
                                                    <CommandList>
                                                        <CommandEmpty>یافت نشد!</CommandEmpty>
                                                        <CommandGroup>
                                                            {cities.map((city) => (
                                                                <CommandItem
                                                                    key={city.value}
                                                                    value={city.value}
                                                                    onSelect={(currentValue) => {
                                                                        setOriginInputValue(currentValue === originInputValue ? "" : currentValue)
                                                                        setIsOpenSearchBarOriginInput(false)
                                                                    }}
                                                                >
                                                                    <Check
                                                                        className={cn(
                                                                            "mr-2 h-4 w-4",
                                                                            originInputValue === city.value ? "opacity-100" : "opacity-0"
                                                                        )}
                                                                    />
                                                                    {city.label}
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>

                                        {/* arrow left-right */}
                                        <span className="product-arrow-left-right">
                                                <LuArrowLeftRight/>
                                            </span>
                                    </div>
                                    <div className="p-2">

                                        {/* shadcn component (destination) */}
                                        <Popover open={isOpenSearchBarDestinationInput}
                                                 onOpenChange={setIsOpenSearchBarDestinationInput}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={isOpenSearchBarDestinationInput}
                                                    className="w-[200px] h-[30px] text-[16px] p-0 pr-4 border-0 justify-between outline-none hover:bg-white"
                                                >
                                                    {destinationInputValue
                                                        ? cities.find((city) => city.value === destinationInputValue)?.label
                                                        : "مقصد (شهر)"}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[200px] p-0">
                                                <Command>
                                                    <CommandInput placeholder="جستحوی شهر"/>
                                                    <CommandList>
                                                        <CommandEmpty>یافت نشد!</CommandEmpty>
                                                        <CommandGroup>
                                                            {cities.map((city) => (
                                                                <CommandItem
                                                                    key={city.value}
                                                                    value={city.value}
                                                                    onSelect={(currentValue) => {
                                                                        setDestinationInputValue(currentValue === destinationInputValue ? "" : currentValue)
                                                                        setIsOpenSearchBarDestinationInput(false)
                                                                    }}
                                                                >
                                                                    <Check
                                                                        className={cn(
                                                                            "mr-2 h-4 w-4",
                                                                            destinationInputValue === city.value ? "opacity-100" : "opacity-0"
                                                                        )}
                                                                    />
                                                                    {city.label}
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>

                                    </div>
                                </div>
                                <div className="product-box-input-wrapper">
                                    <div className="p-2 border-l border-solid border-gray-300">
                                        <input type="text" className="max-w-[136px] h-[30px] outline-none"
                                               placeholder="تاریخ رفت"/>
                                    </div>
                                    <div className="p-2">
                                        <input type="text" disabled className="max-w-[136px] h-[30px] outline-none"
                                               placeholder="تاریخ بازگشت"/>
                                    </div>
                                </div>
                                <div className="product-box-input-wrapper">
                                    <div className="p-2">
                                        <input type="text" className="w-[160px] h-[30px] outline-none"
                                               placeholder="تعداد مسافر"/>
                                    </div>
                                </div>
                                <button type="submit" className="product-box-submit-button">جستجو
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </ProductsBox>

        </>
    );
}