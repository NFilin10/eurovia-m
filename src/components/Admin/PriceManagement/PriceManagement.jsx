import React, {useEffect, useState} from 'react';
import Styles from './PriceManagement.module.css';
import { sendPriceInfo, fetchPriceData } from '../../../http/priceManagement';


function PriceManagement({data, setData}) {
    const [columnNum, setColumnNum] = useState(0);
    const [headingInput, setHeadingInput] = useState('');
    const [headData, setHeadData] = useState([]);
    const [rows, setRows] = useState([]);
    const [showInputs, setShowInputs] = useState(false);
    const [plusClick, setPlusClick] = useState(false);

    // Handles showing the input fields for table setup
    const handleShowInputs = () => {
        setShowInputs(true);
    };

    const refreshPrices = async () => {
        try {
            const resp = await fetchPriceData();
            setData(resp);
        } catch (error) {
            console.error('Error refreshing data:', error);
        }
    };

    // Adds a new row with blank cells based on the number of columns
    const addRow = () => {
        setRows(prevRows => [
            ...prevRows,
            Array.from({ length: columnNum }).fill(''),
        ]);
        setPlusClick(true)
    };

    // Handles changes in table body inputs
    const handleBodyInputChange = (rowIndex, columnIndex, value) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex][columnIndex] = value;
        setRows(updatedRows);
    };


    // Submits the table data as a structured payload
    const handleSubmit = async () => {
        // Validation: Check if all fields are filled
        if (!headingInput.trim()) {
            alert("Please enter a table heading.");
            return;
        }

        if (headData.length !== columnNum || headData.some(header => !header.trim())) {
            alert("Please fill in all column headers.");
            return;
        }

        if (
            rows.length === 0 ||
            rows.some(row => row.length !== columnNum || row.some(cell => !cell.trim()))
        ) {
            alert("Please fill in all rows and cells.");
            return;
        }

        const services = rows.map(row => ({
            service_name: row[0], // First cell of each row is the service name
        }));

        const priceRanges = headData; // Column headers represent price ranges

        const prices = rows.flatMap((row, rowIndex) =>
            row.slice(1).map((value, colIndex) => ({
                service_id: rowIndex + 1,
                range_id: colIndex + 1, // Range IDs align with column indexes (excluding the service name)
                price: parseFloat(value) || 0, // Convert to number, default to 0 if empty
            }))
        );

        const payload = {
            category_name: headingInput,
            services,
            price_ranges: priceRanges,
            prices,
        };

        try {
            await sendPriceInfo(payload);
            await refreshPrices();
        } catch (error) {
            console.error("Error saving data:", error);
            alert("An error occurred while saving data.");
        }

        // Reset form
        setColumnNum(0);
        setHeadingInput('');
        setHeadData([]);
        setRows([]);
        setShowInputs(false); // Hide input section
        setPlusClick(false);
    };



    return (
        <div className={Styles.priceManagementContainer}>

            <div className={Styles.formContainer}>
                <button className={Styles.newService} onClick={handleShowInputs}>
                    Добавить новую таблицу
                </button>
                {showInputs && (
                    <div className={Styles.inputSection}>
                        {/* Number of Columns */}
                        <div className={Styles.columnInput}>
                            <label>Количество колонок: </label>
                            <input
                                type="number"
                                value={columnNum}
                                disabled={plusClick}
                                onChange={e => setColumnNum(Number(e.target.value))}
                            />
                        </div>

                        {/* Table Heading */}
                        <div className={Styles.tableHeading}>
                            <label>Заголовок таблицы: </label>
                            <input
                                type="text"
                                value={headingInput}
                                onChange={e => setHeadingInput(e.target.value)}
                            />
                        </div>

                        {/* Column Headers */}
                        <div className={Styles.tableHead}>
                            {Array.from({ length: columnNum }).map((_, index) => (
                                <div key={index}>
                                    <input
                                        type="text"
                                        placeholder={`Шапка таблицы ${index + 1}`}
                                        value={headData[index] || ''}
                                        onChange={e => {
                                            const updatedHeaders = [...headData];
                                            updatedHeaders[index] = e.target.value;
                                            setHeadData(updatedHeaders);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Table Body Rows */}
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className={Styles.tableBody}>
                                {row.map((cellValue, columnIndex) => (
                                    <div key={columnIndex}>
                                        <input
                                            type="text"
                                            placeholder={columnIndex === 0 ? 'Услугв' : `Цена ${columnIndex}`}
                                            value={cellValue || ''}
                                            onChange={e => handleBodyInputChange(rowIndex, columnIndex, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}

                        {
                            columnNum > 0 && <button className={Styles.plusBtn} onClick={addRow}>+</button>

                        }

                        {/* Submit Button */}
                        <button className={Styles.submitBtn} onClick={handleSubmit}>
                            Сохранить
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PriceManagement;
