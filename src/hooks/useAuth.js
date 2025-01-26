import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to check if the user is authenticated
const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:5000/auth/authenticate", {
                    withCredentials: true,
                });
                setIsAuthenticated(response.data.authenticated);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);  // Empty dependency array means this runs once on mount

    return isAuthenticated;
};

export default useAuth;
