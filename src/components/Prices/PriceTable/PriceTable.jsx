import React, {useEffect, useState} from 'react';
import {fetchPriceData} from "../../../http/priceManagement";
import Styles from "./PriceTable.module.css";

function PriceTable() {

    const [data, setData] = useState([]);

    console.log("DATA", data)
    // Fetch data from the backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetchPriceData(); // Wait for the data to be fetched
                setData(resp); // Update state with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={Styles.pricesTableContainer} data-aos="zoom-in">
            {data.map((category, index) => (
                <div key={index} className={Styles.tableSection}>
                    <h2>{category.category_name}</h2>
                    <table className={Styles.table}>
                        <thead>
                        <tr>
                            {category.headers.map(header => (
                                <th key={header.id}>{header.name}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {Object.values(category.services).map((service, serviceIndex) => (
                            <tr key={serviceIndex}>
                                <td>{service.name}</td>
                                {category.headers.slice(0, -1).map(header => (
                                    <td key={header.id}>
                                        {service.prices[header.id]}€
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            ))}
        </div>
    )
}

export default PriceTable;