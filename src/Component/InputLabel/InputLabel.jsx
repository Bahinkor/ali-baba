import React from 'react';

export default function InputLabel({value, isShow}) {
    //JSX
    return (
        <label
            className={`absolute px-1 bg-white text-gray-400 text-[16px] opacity-0 invisible ${isShow ? "transition-transform !text-[12px] !opacity-100 !visible !transform !-translate-y-[20px]" : ""}`}>{value}</label>
    );
}