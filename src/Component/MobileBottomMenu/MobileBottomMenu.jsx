import React from 'react';
import {NavLink} from 'react-router-dom';
import {GoHomeFill} from "react-icons/go";
import {FaRegUserCircle, FaSuitcase} from "react-icons/fa";
import {IoMdNotificationsOutline} from "react-icons/io";
import {FiPlusCircle} from "react-icons/fi";
import "./MobileBottomMenu.css";

export default function MobileBottomMenu() {
    //JSX
    return (
        <div
            className="fixed bottom-0 left-0 right-0 block md:hidden bg-white pt-2 pb-1 border-t border-solid border-gray-300">
            <div className="container">
                <div
                    className="mobile-bottom-menu flex items-center justify-between gap-2 [&>div>a]:flex [&>div>a]:flex-col [&>div>a]:items-center [&>div>a>span]:text-xs">
                    <div>
                        <NavLink to="/">
                            <GoHomeFill/>
                            <span>خانه</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="*">
                            <FiPlusCircle/>
                            <span>پلاس</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="*">
                            <FaSuitcase/>
                            <span>سفر های من</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="*">
                            <IoMdNotificationsOutline/>
                            <span>اعلان ها</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="*">
                            <FaRegUserCircle/>
                            <span>حساب کاربری</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}