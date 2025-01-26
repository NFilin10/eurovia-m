import Styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {loginPost} from "../../http/authentication";

const LoginForm = ({ setIsAuthenticated }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const LoginIn = (e) => {
        e.preventDefault();

        const data = { email: login, password: password };
        const loginResponse = loginPost(data.email, data.password, setIsAuthenticated);

        if (loginResponse.status === 201) {
            navigate("/admin");
        }  else {
            setError("Invalid credentials. Please try again.");

        }
    };

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.main}>
                <form onSubmit={LoginIn}>
                    <label className={Styles.label} htmlFor="email">Login</label>
                    <input
                        className={Styles.input}
                        onChange={(e) => setLogin(e.target.value)}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={login}
                    />
                    <input
                        className={Styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                    />
                    <button type="submit" className={Styles.button}>Login</button>
                    {error && <div className={Styles.error}>{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
