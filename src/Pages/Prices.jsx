import React from 'react';

import PriceTable from "../components/Prices/PriceTable/PriceTable";
import Contacts from "../components/Prices/Contacts/Contacts";

function Prices({state}) {
    return (
        <div>
            <PriceTable/>
            <Contacts state={state.contactForm}/>
        </div>
    )
}

export default Prices;