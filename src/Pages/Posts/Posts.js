import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PostService from "../../Services/PostService";

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
            <h1>Tela de posts</h1>
            {posts.map(post => (
                <p>{post.title}</p>
            ))}
            <Link to="/login">
                Login
            </Link>
        </div>
    );
}

export default Posts;