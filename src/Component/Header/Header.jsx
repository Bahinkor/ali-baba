import React from 'react';
import {Link} from 'react-router-dom';
import {RiArrowDownSLine} from "react-icons/ri";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {LuBaggageClaim} from "react-icons/lu";
import {FaRegUser} from "react-icons/fa";

export default function Header() {
    //JSX
    return (
        <header className="sticky bg-white shadow-sm">
            <div className="container">
                {/* top menu */}
                <div className="flex items-center justify-between w-full text-gray-600">
                    <div className="flex items-center">
                        <Link to="/" className="ml-16">
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMyIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTMyIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNODMuODkxOCAyOS4xMDk1QzgzLjg5MTggMzMuMzQyOCA4MS44NTUgMzcuMzA4NSA3Ny4xMDU0IDM3LjMwODVDNzUuMzE3NCAzNy4zMDg1IDc0LjA2MDIgMzYuNjk4NiA3My4yMDg3IDM1Ljg1NTdMNzIuODE4OSAzNy4zMDg1SDcwLjUwNTlWMTYuMzkyNEg3My40NDAyVjI5LjMwOEM3My40NDAyIDMxLjkyNDUgNzQuMDczMiAzNC43NTk2IDc3LjIxMTggMzQuNzQzOEM4MC4yNTU1IDM0LjcyOTQgODAuOTI0NCAzMS43NzM0IDgwLjkyNDQgMjkuMzA4QzgwLjkyNDQgMjYuODQyNSA4MC4yNTQxIDIzLjkwNTMgNzcuMjEwNCAyMy44OTIzQzc2LjU3MTUgMjMuODk5NSA3NS45Mzg3IDI0LjAxNzggNzUuMzQwNCAyNC4yNDE5VjIxLjg1NjlDNzYuMTUxMSAyMS41MzQgNzcuMDEyNiAyMS4zNTc3IDc3Ljg4NSAyMS4zMzYyQzgyLjA0NDkgMjEuMzM2MiA4My44OTE4IDI1LjQ0NTggODMuODkxOCAyOS4xMDk1Wk01Ny4yOTgyIDM3LjMwODVINjAuMjM0MVYxNi4zOTI0SDU3LjI5ODJWMzcuMzA4NVpNMTA5LjgwOSAyMS4zNDJDMTA4LjkzNyAyMS4zNjM1IDEwOC4wNzUgMjEuNTM5OCAxMDcuMjY1IDIxLjg2MjdWMjQuMjQ3NkMxMDcuODYzIDI0LjAyMzQgMTA4LjQ5NiAyMy45MDUxIDEwOS4xMzUgMjMuODk4MUMxMTIuMTc4IDIzLjkxMSAxMTIuODQ5IDI2Ljg0OTcgMTEyLjg0OSAyOS4zMTM3QzExMi44NDkgMzEuNzc3OCAxMTIuMTc3IDM0LjczMDkgMTA5LjEyOSAzNC43NDM4QzEwNS45OSAzNC43NTk2IDEwNS4zNTcgMzEuOTI0NSAxMDUuMzU3IDI5LjMwOFYxNi4zOTI0SDEwMi40MjNWMzcuMzA5OUgxMDQuNzM2TDEwNS4xMjQgMzUuODU3MUMxMDUuOTc3IDM2LjcwMDEgMTA3LjIzNSAzNy4zMDk5IDEwOS4wMjMgMzcuMzA5OUMxMTMuNzY5IDM3LjMwOTkgMTE1LjgwOSAzMy4zNDI4IDExNS44MDkgMjkuMTEwOUMxMTUuODA5IDI1LjQ0NTggMTEzLjk2MiAyMS4zMzYyIDEwOS44MDkgMjEuMzM2MlYyMS4zNDJaTTEzMC42NjcgMzMuMTgzMVYyNy43MDEzQzEzMC42NjcgMjMuMzg2IDEyNy44ODUgMjEuMzQ5MiAxMjQuNjc4IDIxLjM0OTJDMTIxLjI5MSAyMS4zNDkyIDExOC45MSAyMy41NSAxMTguOTEgMjMuNTVMMTIwLjMxMSAyNS41NTIzQzEyMC42MjggMjUuMjk5MSAxMjIuMzExIDI0LjAzOSAxMjQuNTE3IDI0LjAzOUMxMjYuNCAyNC4wMzkgMTI3LjkyNiAyNC45MDIxIDEyNy45MjYgMjcuNzk0OFYzMS4yMDI0QzEyNy45MjYgMzMuNzQ5OCAxMjUuMzM3IDM0Ljg0MyAxMjMuNTkxIDM0Ljg0M0MxMjIuMDM5IDM0Ljg0MyAxMjAuODk4IDM0LjIyMTYgMTIwLjg5OCAzMi44NDc5QzEyMC44OTggMzAuNTIyIDEyNC4wOTIgMjkuODI3MyAxMjYuMDE5IDI5LjkyNTFWMjcuNjgyNkMxMjEuNzk0IDI3LjQ2NTQgMTE4LjAwNiAyOS4yMjE3IDExOC4wMDYgMzMuMDIzNEMxMTguMDA2IDM1LjY2NzMgMTIwLjA1NyAzNy4zMDQyIDEyMy4xMjkgMzcuMzA0MkMxMjUuNDMxIDM3LjMwNDIgMTI3LjQyIDM2LjQxNjcgMTI4LjM5MiAzNS40NDcyQzEyOC45MTMgMzYuNzc5MiAxMzAuMzI3IDM3LjMwNDIgMTMxLjQyNSAzNy4zMDQyTDEzMiAzNS4xNTgxQzEzMS4wNzcgMzQuOTU2NyAxMzAuNjcxIDM0LjUxNTEgMTMwLjY3MSAzMy4xNzc0TDEzMC42NjcgMzMuMTgzMVpNOTguNzQ5MyAzMy4xODMxVjI3LjcwMTNDOTguNzQ5MyAyMy4zODYgOTUuOTY3NCAyMS4zNDkyIDkyLjc2MTIgMjEuMzQ5MkM4OS4zNzM3IDIxLjM0OTIgODYuOTkzMSAyMy41NSA4Ni45OTMxIDIzLjU1TDg4LjM5NTYgMjUuNTUyM0M4OC43MTA2IDI1LjI5OTEgOTAuMzkzNSAyNC4wMzkgOTIuNjAwMSAyNC4wMzlDOTQuNDgzIDI0LjAzOSA5Ni4wMTA2IDI0LjkwMjEgOTYuMDEwNiAyNy43OTQ4VjMxLjIwMjRDOTYuMDEwNiAzMy43NDk4IDkzLjQyMTQgMzQuODQzIDkxLjY3MzcgMzQuODQzQzkwLjEyMTcgMzQuODQzIDg4Ljk4MSAzNC4yMjE2IDg4Ljk4MSAzMi44NDc5Qzg4Ljk4MSAzMC41MjIgOTIuMTc0MyAyOS44MjczIDk0LjEwMTggMjkuOTI1MVYyNy42ODI2Qzg5Ljg3NzEgMjcuNDY1NCA4Ni4wODgzIDI5LjIyMTcgODYuMDg4MyAzMy4wMjM0Qzg2LjA4ODMgMzUuNjY3MyA4OC4xMzk1IDM3LjMwNDIgOTEuMjEyIDM3LjMwNDJDOTMuNTEzNSAzNy4zMDQyIDk1LjUwMjggMzYuNDE2NyA5Ni40NzUyIDM1LjQ0NzJDOTYuOTk1OSAzNi43NzkyIDk4LjQwOTkgMzcuMzA0MiA5OS41MDc0IDM3LjMwNDJMMTAwLjA4MyAzNS4xNTgxQzk5LjE1OTMgMzQuOTU2NyA5OC43NTM3IDM0LjUxNTEgOTguNzUzNyAzMy4xNzc0TDk4Ljc0OTMgMzMuMTgzMVpNNTMuNjI1OSAzMy4xODMxVjI3LjcwMTNDNTMuNjI1OSAyMy4zODYgNTAuODQ0IDIxLjM0OTIgNDcuNjM3OCAyMS4zNDkyQzQ0LjI1MDMgMjEuMzQ5MiA0MS44Njk3IDIzLjU1IDQxLjg2OTcgMjMuNTVMNDMuMjc2NSAyNS41NTIzQzQzLjU5MTUgMjUuMjk5MSA0NS4yNzU5IDI0LjAzOSA0Ny40ODEgMjQuMDM5QzQ5LjM2NTMgMjQuMDM5IDUwLjg5MTUgMjQuOTAyMSA1MC44OTE1IDI3Ljc5NDhWMzEuMjAyNEM1MC44OTE1IDMzLjc0OTggNDguMzAyMyAzNC44NDMgNDYuNTU0NiAzNC44NDNDNDUuMDA0IDM0Ljg0MyA0My44NjMzIDM0LjIyMTYgNDMuODYzMyAzMi44NDc5QzQzLjg2MzMgMzAuNTIyIDQ3LjA1NTIgMjkuODI3MyA0OC45ODQxIDI5LjkyNTFWMjcuNjgyNkM0NC43NTggMjcuNDcxMSA0MC45NzUgMjkuMjI3NCA0MC45NzUgMzMuMDI5MkM0MC45NzUgMzUuNjczIDQzLjAyNjIgMzcuMzA5OSA0Ni4wOTg3IDM3LjMwOTlDNDguNDAwMSAzNy4zMDk5IDUwLjM4OCAzNi40MjI0IDUxLjM2MDQgMzUuNDUyOUM1MS44ODI2IDM2Ljc4NDkgNTMuMjk1MSAzNy4zMDk5IDU0LjM5NDEgMzcuMzA5OUw1NC45Njk0IDM1LjE2MzhDNTQuMDM1OSAzNC45NTY3IDUzLjYzMzEgMzQuNTE1MSA1My42MzMxIDMzLjE3NzRMNTMuNjI1OSAzMy4xODMxWk02My44OTc3IDM3LjMxNTdINjYuODMyMVYyMS44MjI0SDYzLjg5NzdWMzcuMzE1N1pNNjMuODk3NyAxOS4zMzU0SDY2LjgzMjFWMTYuMzkyNEg2My44OTc3VjE5LjMzNTRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjcuMjMwOCAzNS43NTc5QzI3LjA4NyAzNi4wMTgyIDI2Ljc0MDMgMzYuMTM2MiAyNi40MzI1IDM2LjIyMzlMMjIuOTI0MiAzNy4yMTVDMjIuNjE2NCAzNy4zMDEzIDIyLjIzMjMgMzcuMzcxOCAyMS45NzQ4IDM3LjIyNTFDMjEuNzE3MyAzNy4wNzg0IDIxLjU4OTMgMzYuNzE0NCAyMS41MDczIDM2LjQwOEMxNi40MTI0IDE3LjQwMzYgMTUuNzA5IDEzLjMwNjkgMTMuNjU5MyAxMy4zMDY5QzExLjYwOTUgMTMuMzA2OSAxMC45MTE5IDE3LjQwMzYgNS44MTEyNCAzNi40MDhDNS43MjkyNSAzNi43MTQ0IDUuNTk4MzUgMzcuMDc4NCA1LjM0Mzc1IDM3LjIyNTFDNS4wODkxNSAzNy4zNzE4IDQuNzAwNzcgMzcuMzAxMyA0LjM5Mjk1IDM3LjIxNUwwLjg4NDYyOSAzNi4yMjM5QzAuNTc2ODA2IDM2LjEzNjIgMC4yMzE1ODcgMzYuMDE4MiAwLjA4Nzc0NDQgMzUuNzU3OUMtMC4wNTYwOTgyIDM1LjQ5NzUgMC4wMDcxOTI1NCAzNS4xMTYzIDAuMDg3NzQ0NCAzNC44MTg2QzUuMzAyMDQgMTUuNDY3NSA4LjIxNDg0IDEwIDEzLjY1OTMgMTBDMTkuMTAzNyAxMCAyMi4wMjIzIDE1LjQ2NiAyNy4yMjk0IDM0LjgxODZDMjcuMzA5OSAzNS4xMTYzIDI3LjM3MDQgMzUuNTA2MiAyNy4yMzA4IDM1Ljc1NzlaIiBmaWxsPSIjRkRCOTEzIi8+CjxwYXRoIGQ9Ik0zMC4zNDc5IDIzLjUzNDFDMzAuMzQ0NyAyMy43MjAzIDMwLjMwMjEgMjMuOTAzNyAzMC4yMjI4IDI0LjA3MjFMMzAuMDc4OSAyNC40NzA2QzMwLjAxNTggMjQuNzA2MSAyOS44NzI5IDI0LjkxMjUgMjkuNjc0NyAyNS4wNTQ2QzI5LjQ0MzYgMjUuMTUxNyAyOS4xODYxIDI1LjE2NjQgMjguOTQ1NCAyNS4wOTYzQzI0LjM3MzggMjQuMDg3NCAxOS41OTQ4IDI0LjY3MDMgMTUuMzk5NiAyNi43NDg0QzExLjIwNDUgMjguODI2NSA3Ljg0NSAzMi4yNzUxIDUuODc3NCAzNi41MjMxQzUuNzMzNTYgMzYuODM5NiA1LjUwNjI5IDM3LjMwOTkgNC45OTQyMSAzNy4zMDk5QzQuNzg5MTggMzcuMzA5MSA0LjU4NTQ4IDM3LjI3NzEgNC4zOTAwNyAzNy4yMTVMMC44ODE3NTYgMzYuMjIzOUgwLjg3MzEyNUMwLjQ2NzQ4OSAzNi4xMDg5IDAgMzUuOTUyMSAwIDM1LjQwNEMwLjAxNDk5MTIgMzUuMTY2OSAwLjA3OTY4MjkgMzQuOTM1NiAwLjE4OTg3MyAzNC43MjUxQzIuNjgyNTggMjkuMzgyMiA3LjEwNzkgMjUuMTgyNyAxMi41NzQgMjIuOTczMUMxOC4wNDAxIDIwLjc2MzUgMjQuMTQwNiAyMC43MDggMjkuNjQ1OSAyMi44MTc4QzI5LjkxOTIgMjIuOTE4NSAzMC4zNDc5IDIzLjA3OTYgMzAuMzQ3OSAyMy41MzQxWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzI1NzRfODIwOCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8yNTc0XzgyMDgiIHgxPSIwLjAwMjg3Njg1IiB5MT0iMjkuMjg5MyIgeDI9IjMwLjM0NzkiIHkyPSIyOS4yODkzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4zIiBzdG9wLWNvbG9yPSIjRkRCOTEzIi8+CjxzdG9wIG9mZnNldD0iMC43NSIgc3RvcC1jb2xvcj0iI0Y3OTQxRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
                                alt="Ali baba Logo"/>
                        </Link>

                        <ul className="flex items-center [&>li]:flex [&>li]:items-center [&>li]:gap-1 [&>li]:py-1 [&>li]:px-4 [&>li]:cursor-pointer [&>span]:w-px [&>span]:h-6 [&>span]:bg-gray-300 [&>span]:mx-1 [&>span]:rounded-xl">
                            <li className="relative !py-4 group">بلیط
                                <RiArrowDownSLine size="25"/>
                                {/* sub menu (ticket) */}
                                <ul className="absolute top-[52px] right-0 w-[8rem] bg-white pb-1 text-sm shadow-lg rounded-md border-solid border-[1px] border-gray-300 cursor-auto transition opacity-0 invisible group-hover:!opacity-100 group-hover:!visible [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-3 [&>span]:block [&>span]:h-px [&>span]:w-[100px] [&>span]:bg-gray-300 [&>span]:mx-auto [&>span]:my-1 [&>span]:rounded-xl">
                                    <li>
                                        <Link to="*">
                                            پرواز داخلی
                                        </Link>
                                    </li>
                                    <span/>
                                    <li>
                                        <Link to="*">
                                            پرواز خارجی
                                        </Link>
                                    </li>
                                    <span/>
                                    <li>
                                        <Link to="*">
                                            قطار
                                        </Link>
                                    </li>
                                    <span/>
                                    <li>
                                        <Link to="*">
                                            اتوبوس
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <span/>
                            <li className="relative !py-4 group">اقامت
                                <RiArrowDownSLine size="25"/>
                                {/* sub menu (stay) */}
                                <ul className="absolute top-[52px] right-0 w-[8rem] bg-white pb-1 text-sm shadow-lg rounded-md border-solid border-[1px] border-gray-300 cursor-auto transition opacity-0 invisible group-hover:!opacity-100 group-hover:!visible [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-3 [&>span]:block [&>span]:h-px [&>span]:w-[100px] [&>span]:bg-gray-300 [&>span]:mx-auto [&>span]:my-1 [&>span]:rounded-xl">
                                    <li>
                                        <Link to="*">
                                            هتل
                                        </Link>
                                    </li>
                                    <span/>
                                    <li>
                                        <Link to="*">
                                            ویلا و اقامتگاه
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <span/>
                            <li>
                                <Link to="*">
                                    تور
                                </Link>
                            </li>
                            <span/>
                            <li>
                                <Link to="*">
                                    ویزا
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-5 [&>a]:flex [&>a]:items-center [&>a]:gap-1">
                        <Link to="*">
                            <AiOutlineQuestionCircle/>
                            مرکز پشتیبانی آنلاین
                        </Link>
                        <Link to="*">
                            <LuBaggageClaim/>
                            سفرهای من
                        </Link>
                        <Link to="*">
                            <FaRegUser/>
                            ورود یا ثبت نام
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    )
}