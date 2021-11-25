import { Link } from "react-router-dom";

function Posts() {
    return (
        <div>
            <h1>Tela de posts</h1>
            <Link to="/login">
                Login
            </Link>
        </div>
    );
}

export default Posts;