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

        // Return the response for further handling in loginIn
        return response; // <- return response
    } catch (error) {
        console.error("Login error:", error);
        throw error; // propagate the error
    }
}


export const authenticate = async () => {
    try {
        // Send request to server to validate the token
        const response = await axios.get("http://localhost:5000/auth/authenticate", {
            withCredentials: true,  // Ensure cookies are sent with the request
        });
        return response;  // Server will respond with 200 or an error if the token is invalid
    } catch (error) {
        console.error("Authentication failed:", error);
        throw error;  // Let the error propagate
    }
};


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


