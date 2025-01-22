import React from 'react';
import PriceManagement from "../components/Admin/PriceManagement/PriceManagement";
import CurrentServiceTable from "../components/Admin//CurrentServiceTables/CurrentServiceTable";

function Admin() {
    return (
        <div>
            <h1>Price Management</h1>
            <CurrentServiceTable/>
            <PriceManagement/>
        </div>
    )
}

export default Admin;