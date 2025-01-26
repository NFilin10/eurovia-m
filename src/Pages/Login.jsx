
import LoginForm from "../components/Login/LoginForm";

function Login({setIsAuthenticated}) {

    return (
        <>
            <LoginForm setIsAuthenticated={setIsAuthenticated} />
        </>
    );
}

export default Login;
