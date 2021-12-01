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
            <fieldset>
                <legend> Tabela de Posts </legend>

                {posts.map(post => (
                    <p>{post.title}</p>
                ))}
            </fieldset>
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