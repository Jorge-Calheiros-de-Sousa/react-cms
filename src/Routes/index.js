import { Routes, Route } from "react-router-dom";

import Login from "@Pages/Login/Login";
import Posts from "@Pages/Posts/Posts";
import User from "@Pages/User/User";
import Account from "@Pages/User/Account";
import Home from "@Pages/Admin/Home";

export default function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<User />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<Home />} />
        </Routes>
    );
}