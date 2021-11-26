import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>Tela de Login</h1>
            <Link to="/posts">
                Posts
            </Link>
        </div>
    );
}

export default Login;