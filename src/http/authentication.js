import axios from "axios";

export const loginPost = async (email, password, setIsAuthenticated) => {
    try {
        const response =  await axios.post(
            "http://localhost:5000/auth/login",
            {
                password: password,
                email: email,
            },
            {
                withCredentials: true,
            }
        );

        if (response.status === 201) {
            setIsAuthenticated(true);
        }
    } catch (error) {
        console.error("Login error:", error);
    }
}

export const authenticate = async () => {
    try {
        return await axios.get("http://localhost:5000/auth/authenticate", {
            withCredentials: true,
        });
    } catch (error) {
        console.error("authentication error:", error);

    }
}

export const logout = async (setIsAuthenticated) => {
    try {
        const response = await fetch("http://localhost:5000/auth/logout", {
            credentials: 'include',
        });

        if (response.ok) {
            setIsAuthenticated(false);
        } else {
            console.error("Failed to log out");
        }
    } catch (e) {
        console.error("Error during logout:", e);
    }
};