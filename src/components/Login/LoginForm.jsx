import Styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginForm = ({ setIsAuthenticated }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const LoginIn = async (e) => {
        e.preventDefault();

        const data = { email: login, password: password };

        try {
            const response = await axios.post(
                "http://localhost:5000/auth/login",
                {
                    password: data.password,
                    email: data.email,
                },
                {
                    withCredentials: true,
                }
            );
            setIsAuthenticated(true);

            // Redirect to admin page
            navigate("/admin");

        } catch (error) {
            console.error("Login error:", error);
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
