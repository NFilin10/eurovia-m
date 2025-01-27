import { useState, useEffect } from "react";
import { authenticate } from "@/http/authentication";  // Example of authentication API call

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await authenticate();  // API call to check if authenticated
                setIsAuthenticated(response.data.authenticated);
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false); // Set loading to false after authentication check
            }
        };

        checkAuth();
    }, []);

    return { isAuthenticated, isLoading, setIsAuthenticated };
};

export { useAuth };
