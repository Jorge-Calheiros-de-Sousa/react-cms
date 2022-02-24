import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import Admin from "../../Layouts/Private/Admin";
import PostService from "../../Services/PostService";

function AdminPostShow() {
    const [post, setPost] = useState({});
    const { idPost } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const [data, error] = await PostService.show(idPost);
            if (!error) {
                setTimeout(() => {
                    setPost(data.post);
                }, 100);
            }
        }
        fetchData();
    }, []);
    console.log(post);
    return (
        <Admin>
            <div>
                <NavLink to={"/admin/posts"}>
                    <div className="bg-blue-500 hover:bg-blue-900 w-max p-2 pl-10 pr-10 text-white active:bg-blue-500">
                        Back
                    </div>
                </NavLink>
            </div>
            <div class="p-3 flex items-center justify-center">
                <div class="bg-white border shadow-sm px-4 py-3 rounded-lg max-w-lg">
                    <div class="flex items-center">
                        <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        <div class="ml-2">
                            <div class="text-sm ">
                                <span class="font-semibold">{post.user ? post.user.name : "Loading..."}</span>
                            </div>
                            <div class="text-gray-500 text-xs ">{post.user ? post.user.email : "Loading..."}</div>
                            <div class="text-gray-500 text-xs flex">
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>{post.title}</h2>
                    </div>
                    <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">
                        {post.content}
                    </p>
                </div>
            </div>
        </Admin >
    )
}
export default AdminPostShow;