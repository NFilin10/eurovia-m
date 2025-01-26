import React, { useEffect, useState } from 'react';
import Styles from "./CurrentServiceTable.module.css";
import { fetchPriceData, deleteService, updateService, sendPrice } from "../../../http/priceManagement";

function CurrentServiceTable(props) {
    const [data, setData] = useState([]);
    const [editedValues, setEditedValues] = useState({});
    const [newRowValues, setNewRowValues] = useState({}); // State to track new row inputs

    const handleInputChange = (serviceId, headerId, value) => {
        setEditedValues(prevState => ({
            ...prevState,
            [serviceId]: {
                ...prevState[serviceId],
                [headerId]: value,
            },
        }));
    };

    const handleNewRowChange = (categoryId, headerId, value) => {
        setNewRowValues(prevState => ({
            ...prevState,
            [categoryId]: {
                ...prevState[categoryId],
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
            const response = await updateService(serviceId, { [serviceId]: updatedPrices });

            if (response.status ===  200) {
                alert('Prices updated successfully!');
                await refreshData();
            } else {
                console.error('Failed to update prices:', response.error);
            }
            // await refreshData();
        } catch (error) {
            console.error('Error updating prices:', error);
        }
    };

    const handleAddNewRow =  async (category) => {
        const newRow = newRowValues[category.category_name];
        if (!newRow || Object.values(newRow).some(val => !val)) {
            alert('Please fill out all fields for the new row.');
            return;
        }

        try {
            const response = await sendPrice({
                categoryID: category.categoryID,
                new_service: newRow,
            });

            console.log("status", response.status)

            if (response.status === 201) {
                alert('New service added successfully!');
                setNewRowValues(prev => ({...prev, [category.category_name]: {}})); // Clear inputs
                await refreshData(); // Refresh data from the server
            } else {
                console.error('Failed to add new row:', response.error);
            }
        } catch (error) {
            console.error('Error adding new row:', error);
        }
    };

    const refreshData =  async () => {
        console.log("function call")
        try {
            const resp = fetchPriceData();
            setData(await resp);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (serviceId, categoryName) => {
        try {
            await deleteService(serviceId);
            setData(prevData => {
                return prevData.map(category => {
                    if (category.category_name === categoryName) {
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

    useEffect(() => {
        refreshData();
    }, []); // Only run on component mount

    return (
        <div className={Styles.pricesTableContainer}>
            <h1>Управление ценами</h1>

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
                                            onChange={(e) =>
                                                handleInputChange(service.service_id, header.id, e.target.value)
                                            }
                                        />
                                        €
                                    </td>
                                ))}
                                <td className={Styles.buttonsColumn}>
                                    <div className={Styles.buttons}>
                                        <button onClick={() => handleUpdate(service.service_id)}>Обновить</button>
                                        <button
                                            onClick={() => handleDelete(service.service_id, category.category_name)}>Удалить
                                        </button>
                                    </div>

                                </td>


                            </tr>
                        ))}

                        {/* New row for adding services */}
                        <tr>
                            {category.headers.map(header => (
                                <td key={header.id}>
                                    <input
                                        type="text"
                                        placeholder={`Enter ${header.name}`}
                                        value={newRowValues[category.category_name]?.[header.id] || ''}
                                        onChange={(e) =>
                                            handleNewRowChange(category.category_name, header.id, e.target.value)
                                        }
                                    />
                                </td>
                            ))}
                            <td>
                                <button onClick={() => handleAddNewRow(category)}>Сохранить</button>
                            </td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default CurrentServiceTable;
