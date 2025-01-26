import React, {useState} from 'react';
import PriceManagement from "../components/Admin/PriceManagement/PriceManagement";
import CurrentServiceTable from "../components/Admin//CurrentServiceTables/CurrentServiceTable";
import useFetchPrices from "../hooks/useFetchPrices";

function Admin() {
    const {data, setData} = useFetchPrices()

    return (
        <div>
            <CurrentServiceTable data={data} setData={setData}/>
            <PriceManagement data={data} setData={setData}/>
        </div>
    )
}

export default Admin;