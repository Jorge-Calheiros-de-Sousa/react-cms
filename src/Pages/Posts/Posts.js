import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PostService from "@Services/PostService";

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
            <div className="p-16">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">

                    {posts.map(post => (
                        <div key={post.id} className="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
                            <div className="m-2 text-justify text-sm">
                                <p className="text-right text-xs">May 17, 2020</p>
                                <h2 className="font-bold text-lg h-2 mb-8"> {post.title} </h2>
                                <p className="text-xs">
                                    {post.content}
                                </p>

                            </div>
                            <div className="w-full text-right mt-4">
                                <a className="text-green-400 uppercase font-bold text-sm" href="#">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ul>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>

                <li>
                    <Link to="/users">
                        Users
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Posts;