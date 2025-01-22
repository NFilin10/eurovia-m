import React, { useEffect, useState } from 'react';
import Styles from "./CurrentServiceTable.module.css";
import {fetchPriceData, deleteService, updateService} from "../../../http/priceManagement"; // Assuming you add the delete function

function CurrentServiceTable(props) {
    const [data, setData] = useState([]);

    const [editedValues, setEditedValues] = useState({}); // Store the edited values temporarily

    console.log(editedValues);

    const handleInputChange = (serviceId, headerId, value) => {
        setEditedValues(prevState => ({
            ...prevState,
            [serviceId]: {
                ...prevState[serviceId],
                [headerId]: value,


            },
        }));
    };

    const handleUpdate = async (serviceId) => {
        const updatedPrices = editedValues[serviceId];

        if (!updatedPrices) {
            console.error('No edited prices for service ID:', serviceId);
            return;
        }

        try {
            // Send the updated prices to the backend (assuming updateServicePrices handles the API call)
            const response = await fetch(`http://localhost:5000/update/${serviceId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ [serviceId]: updatedPrices }) // Send the data as an object with serviceId as the key
            });

            const result = await response.json();
            if (response.ok) {
                alert('Prices updated successfully!');
            } else {
                console.error('Failed to update prices:', result.error);
            }

            // Optionally, refresh the data or update local state
        } catch (error) {
            console.error('Error updating prices:', error);
        }
    };


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
                                        <input
                                            type="text"
                                            value={editedValues[service.service_id]?.[header.id] || service.prices[header.id]}
                                            onChange={(e) => handleInputChange(service.service_id, header.id, e.target.value)}
                                        />
                                        €
                                    </td>
                                ))}
                                <button onClick={() => handleUpdate(service.service_id)}>Update</button>
                                <button
                                    onClick={() => handleDelete(service.service_id, category.category_name)}>delete
                                </button>
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

