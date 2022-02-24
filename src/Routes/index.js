import { Routes, Route } from "react-router-dom";

import Login from "@Pages/Login/Login";
import Posts from "@Pages/Posts/Posts";
import User from "@Pages/User/User";
import Account from "@Pages/User/Account";
import Home from "@Pages/Admin/Home";
import Register from "@Pages/Login/Register";
import AdminPosts from "../Pages/Admin/AdminPosts";
import Form from "@Pages/Posts/Form";
import AdminPostsForm from "../Pages/Admin/AdminPostsForm";
import AdminPostShow from "../Pages/Admin/AdminPostShow";

export default function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/admin/posts" element={<AdminPosts />} />
            <Route path="/admin/users" element={<User />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<Home />} />
            <Route path="/posts/create" element={<Form title={" New Post "} />} />
            <Route path="/posts/edit" element={<Form title={" Edit Post "} />} />
            <Route path="/admin/post/create" element={<AdminPostsForm title={"New Post"} />} />
            <Route path="/admin/post/update/:idPost" element={<AdminPostsForm title={"Edit Post"} />} />
            <Route path="/admin/post/:idPost" element={<AdminPostShow />} />
        </Routes>
    );
}