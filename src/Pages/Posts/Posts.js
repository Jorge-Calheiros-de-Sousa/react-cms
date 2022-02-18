import { useState, useEffect } from "react";

import PostService from "@Services/PostService";
import Home from "@/Layouts/Public/Home";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const [data, error] = await PostService.index();
            if (!error) {
                const { posts: { data: postsData } } = data;
                setPosts(postsData);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Home>
                <div className=" p-3 flex flex-wrap w-fit justify-center">
                    {posts.map(post => {
                        return (
                            <div className="bg-white border shadow-sm px-4 py-3 m-1 rounded-lg box-content max-w-lg">
                                <div className="flex items-center">
                                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                    <div className="ml-2">
                                        <div className="text-sm ">
                                            <span className="font-semibold">{post.user.name}</span>
                                        </div>
                                        <div className="text-gray-500 text-xs ">{post.user.email}</div>
                                        <div className="text-gray-500 text-xs flex">

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2>{post.title}</h2>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">
                                    {post.content}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </Home>
        </div>
    );
}

export default Posts;