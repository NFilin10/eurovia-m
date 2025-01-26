import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
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
    }, []);


    return {isAuthenticated, setIsAuthenticated};
};

export default useAuth;