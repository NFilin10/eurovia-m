import React, { useEffect, useState } from 'react';
import Styles from "./CurrentServiceTable.module.css";
import { fetchPriceData, deleteService } from "../../../http/priceManagement"; // Assuming you add the delete function

function CurrentServiceTable(props) {
    const [data, setData] = useState([]);

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

    const handleDelete = async (serviceId, categoryName) => {
        try {
            // Call the API to delete the service from the database
            await deleteService(serviceId);

            // Update local state to reflect the deletion
            setData(prevData => {
                return prevData.map(category => {
                    if (category.category_name === categoryName) {
                        // Remove service from the category's services
                        const updatedServices = { ...category.services };
                        delete updatedServices[serviceId];
                        return {
                            ...category,
                            services: updatedServices,
                        };
                    }
                    return category;
                });
            });
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

    return (
        <div className={Styles.pricesTableContainer}>
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
                                        <input type="text" value={service.prices[header.id]} readOnly />
                                        €
                                    </td>
                                ))}
                                <button>update</button>
                                <button onClick={() => handleDelete(service.service_id, category.category_name)}>delete</button>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default CurrentServiceTable;
