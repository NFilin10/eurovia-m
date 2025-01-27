import React, { useEffect, useState } from 'react';
import Styles from "./CurrentServiceTable.module.css";
import { fetchPriceData, deleteService, updateService, sendPrice } from "../../../http/priceManagement";

function CurrentServiceTable({ data, setData }) {
    const [editedValues, setEditedValues] = useState({});
    const [newRowValues, setNewRowValues] = useState({}); // State to track new row inputs

    const refreshPrices = async () => {
        try {
            const resp = await fetchPriceData();
            setData(resp);
        } catch (error) {
            console.error('Error refreshing data:', error);
        }
    };

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

            if (response.status === 200) {
                alert('Prices updated successfully!');
                await refreshPrices(); // Refresh data after update
            } else {
                console.error('Failed to update prices:', response.error);
            }
        } catch (error) {
            console.error('Error updating prices:', error);
        }
    };

    const handleAddNewRow = async (category) => {
        const newRow = newRowValues[category.category_name];
        if (
            !newRow ||
            category.headers.some(header => !newRow[header.id]?.trim())
        ) {
            alert('Please fill out all fields for the new row.');
            return;
        }

        try {
            const response = await sendPrice({
                categoryID: category.categoryID,
                new_service: newRow,
            });

            if (response.status === 201) {
                alert('New service added successfully!');
                setNewRowValues(prev => ({ ...prev, [category.category_name]: {} })); // Clear inputs
                await refreshPrices(); // Refresh data after adding new row
            } else {
                console.error('Failed to add new row:', response.error);
            }
        } catch (error) {
            console.error('Error adding new row:', error);
        }
    };

    const handleDelete = async (serviceId, categoryName) => {
        try {
            await deleteService(serviceId);
            alert('Service deleted successfully!');
            await refreshPrices(); // Refresh data after delete
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

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
                                            className={Styles.input}
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
                                        className={Styles.input}
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
