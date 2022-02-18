import React from "react";

import NavLink from "@Components/NavLink";

export default function Admin({ children }) {
    return (
        <div>
            <header class="w-full bg-gray-800 p-4 flex justify-between items-center">
                <div class="w-8 h-8 cursor-pointer">
                </div>
            </header>


            <main class="flex w-full h-screen">
                <aside class="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
                    <div class="flex flex-col justify-between h-screen p-4 bg-gray-800">
                        <div class="text-sm">
                            <NavLink to={"/admin"} style={""}>
                                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                    Home
                                </div>
                            </NavLink>
                            <NavLink to={"/admin/users"} style={""}>
                                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                    Users
                                </div>
                            </NavLink>
                            <NavLink to={"/admin/posts"} style={""}>
                                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                    Posts
                                </div>
                            </NavLink>
                            <NavLink to={"#"} style={""}>
                                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                    Item
                                </div>
                            </NavLink>
                            <NavLink to={"/posts"} style={""}>
                                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                    Voltar
                                </div>
                            </NavLink>
                        </div>

                        <div class="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm">
                            <button class="rounded inline-flex items-center">
                                <span class="font-semibold">Logout</span>
                            </button>
                        </div>
                    </div>
                </aside>

                <section class="w-full p-4">
                    {children}
                </section>

            </main>
        </div>
    )
}