import react from "react";

import Form from "@Layouts/Public/Form";

function Register() {
    return (
        <Form text={"Caso já tiver uma conta, fassa login clicando"} title={"Ainda não tem uma conta?"} link={"aqui"} to={"/login"}>
            <div className="flex justify-center self-center  z-10">
                <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                    <div className="mb-4">
                        <h3 className="font-semibold text-2xl text-gray-800">Register </h3>
                        <p className="text-gray-500">Please create your account.</p>
                    </div>
                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Name</label>
                            <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                            <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="mail@gmail.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                Password
                            </label>
                            <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password" />
                        </div>
                        <div className="space-y-2">
                            <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                Rep Password
                            </label>
                            <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password" />
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                Done
                            </button>
                        </div>
                    </div>
                    <div className="pt-5 text-center text-gray-400 text-xs">
                        <span>
                            Copyright © 2021-2022
                            <a href="https://codepen.io/uidesignhub" rel="" target="_blank" title="Ajimon" className="text-green hover:text-green-500 ">AJI</a></span>
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default Register;