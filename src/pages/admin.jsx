import React, { useEffect } from "react";
import { useRouter } from "next/router";
import PriceManagement from "../components/Admin/PriceManagement/PriceManagement";
import CurrentServiceTable from "../components/Admin/CurrentServiceTables/CurrentServiceTable";
import useFetchPrices from "../hooks/useFetchPrices";

function Admin({ isAuthenticated, isLoading, setIsAuthenticated }) {
    const { data, setData } = useFetchPrices();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) { // Wait for authentication check to complete
            if (!isAuthenticated) {
                router.push("/login");
            }
        }
    }, [isAuthenticated, isLoading, router]);


    return (
        <div>
            <CurrentServiceTable data={data} setData={setData} />
            <PriceManagement data={data} setData={setData} />
        </div>
    );
}

export default Admin;
