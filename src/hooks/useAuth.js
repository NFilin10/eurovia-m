import { useState, useEffect } from "react";
import {authenticate} from "../http/authentication";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {

        const checkAuth = async () => {
            try {
                const response = await authenticate()
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