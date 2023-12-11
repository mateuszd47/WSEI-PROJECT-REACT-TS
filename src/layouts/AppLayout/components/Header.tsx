import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/favicon.ico";
import Slider from "../../../components/Slider";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <header className="flex justify-between items-center h-[80px] mb-2">
            <NavLink className="flex flex-row items-center gap-1" to="/">
                <img className="rounded-full" src={logo} alt="logo" />
                <h2 className="text-2xl font-bold text-white">MatWeb</h2>
            </NavLink>

            <nav className="flex flex-row gap-1 max-sm:hidden">
                <NavLink
                    className={({ isActive }) =>
                        (isActive ? " bg-slate-700 " : "") +
                        "transition duration-700 ease-in-out hover:bg-slate-500 rounded-lg px-2 py-1 text-white flex justify-center flex-row items-center gap-1"
                    }
                    to="/"
                >
                    <div className="hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-white"
                        >
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                    </div>
                    <div className="font-bold text-white">Home</div>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        (isActive ? " bg-slate-700 " : "") +
                        "transition duration-700 ease-in-out hover:bg-slate-500 rounded-lg px-2 py-1 text-white flex justify-center flex-row items-center gap-1"
                    }
                    to="Todos"
                >
                    <div className="hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="font-bold text-white">Todo</div>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        (isActive ? " bg-slate-700 " : "") +
                        "transition duration-700 ease-in-out hover:bg-slate-500 rounded-lg px-2 py-1 text-white flex justify-center flex-row items-center gap-1"
                    }
                    to="Users"
                >
                    <div className="hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="font-bold text-white">Users</div>
                </NavLink>
            </nav>
            <div
                className="sm:hidden cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                {open && <Slider setOpen={setOpen} />}
            </div>
        </header>
    );
};

export default Header;
