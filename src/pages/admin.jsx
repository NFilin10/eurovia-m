import React, { useEffect } from "react";
import { useRouter } from "next/router";
import PriceManagement from "../components/Admin/PriceManagement/PriceManagement";
import CurrentServiceTable from "../components/Admin/CurrentServiceTables/CurrentServiceTable";
import useFetchPrices from "../hooks/useFetchPrices";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import state from "@/state";

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

export const getStaticProps = async ({ locale }) => {

    return {

        props: {

            ...(await serverSideTranslations(locale, ["common"])),
            state

        },

    };

};