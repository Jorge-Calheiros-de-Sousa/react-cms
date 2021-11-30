import { Routes, Route } from "react-router-dom";

import Login from "../Pages/Login/Login";
import Posts from "../Pages/Posts/Posts";
import User from "../Pages/User/User";

export default function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<User />} />
        </Routes>
    );
}