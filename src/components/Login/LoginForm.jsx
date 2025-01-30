import Styles from "./LoginForm.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { loginPost } from "@/http/authentication";  // Assuming you have an authentication service

const LoginForm = ({ setIsAuthenticated }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const loginIn = async (e) => {
        e.preventDefault();

        const data = {email: login, password: password};
        try {
            const loginResponse = await loginPost(data.email, data.password, setIsAuthenticated);  // Handle login request

            if (loginResponse.status === 201) {  // Most likely you will get 200 or 201
                setIsAuthenticated(true);  // Now set isAuthenticated to true
                router.push("/admin");
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.main}>
                <form onSubmit={loginIn}>
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
