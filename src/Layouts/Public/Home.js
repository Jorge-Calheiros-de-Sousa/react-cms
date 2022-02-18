import React from "react";

import NavLink from "@/Components/NavLink";

export default function Home({ children }) {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <NavLink to={"/account"} style={"mr-5 hover:text-gray-900"}>
                            Account
                        </NavLink>
                        <NavLink to={"/posts"} style={"mr-5 hover:text-gray-900"}>
                            Posts
                        </NavLink>
                        <NavLink to={"#"} style={"mr-5 hover:text-gray-900"}>
                            LogOut
                        </NavLink>
                    </nav>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <NavLink to={"/posts/create"} style={"mr-5 hover:text-gray-900"}> Create Post +</NavLink>
                    </nav>
                </div>
            </header>

            {children}

            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">Tailblocks</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <NavLink to={"#"} style={"text-gray-600 hover:text-gray-800"}>Php</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"#"} style={"text-gray-600 hover:text-gray-800"}>React Native</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"#"} style={"text-gray-600 hover:text-gray-800"}>Laravel FrameWork</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"#"} style={"text-gray-600 hover:text-gray-800"}>JavaScript</NavLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTATO</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <NavLink to={"#"} style={"text-gray-600 hover:text-gray-800"}>fulano@gmail.com</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"#"} style={"text-gray-600 hover:text-gray-800"}>(12)4002-8922</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"#"} style={"text-gray-600 hover:text-gray-800"}>github/Jorge-Calheiros-de-Sousa</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"#"} style={"text-gray-600 hover:text-gray-800"}>github/chsjr1996</NavLink>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left"> <NavLink to={"/admin"} style={""}>admin </NavLink> </p>
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                            <a href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed text-lg">Enquanto tivermos o isqueiro em nossas mãos, poderemos sempre acender o fósforo mais uma vez.</p>
                        <span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">EU NAO SEI QUEM É</h2>
                        <p className="text-gray-500">Jorge programador Juníor</p>
                    </div>
                </div>
            </section>
        </div>
    );
}