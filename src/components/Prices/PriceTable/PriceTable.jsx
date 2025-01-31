import React from 'react';
import Styles from "./PriceTable.module.css";
import useFetchPrices from "../../../hooks/useFetchPrices";

function PriceTable() {

    const {data} = useFetchPrices()

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