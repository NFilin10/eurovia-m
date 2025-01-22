import React, {useEffect, useState} from 'react';
import Styles from './PriceManagement.module.css';
import { sendPriceInfo, fetchPriceData } from '../../../http/priceManagement';


function PriceManagement() {
    const [columnNum, setColumnNum] = useState(0);
    const [headingInput, setHeadingInput] = useState('');
    const [headData, setHeadData] = useState([]);
    const [rows, setRows] = useState([]);
    const [showInputs, setShowInputs] = useState(false);

    // Handles showing the input fields for table setup
    const handleShowInputs = () => {
        setShowInputs(true);
    };

    console.log("rows",  rows)

    // Adds a new row with blank cells based on the number of columns
    const addRow = () => {
        setRows(prevRows => [
            ...prevRows,
            Array.from({ length: columnNum }).fill(''),
        ]);
    };

    // Handles changes in table body inputs
    const handleBodyInputChange = (rowIndex, columnIndex, value) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex][columnIndex] = value;
        setRows(updatedRows);
    };

    // Submits the table data as a structured payload
    const handleSubmit = () => {
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

        console.log('Payload:', JSON.stringify(payload, null, 2));
        sendPriceInfo(payload); // Send data to API
    };

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


    return (
        <div className={Styles.priceManagementContainer}>

            <div className={Styles.formContainer}>
                <button className={Styles.newService} onClick={handleShowInputs}>
                    Add New Service
                </button>
                {showInputs && (
                    <div className={Styles.inputSection}>
                        {/* Number of Columns */}
                        <div className={Styles.columnInput}>
                            <label>Number of Columns:</label>
                            <input
                                type="number"
                                value={columnNum}
                                onChange={e => setColumnNum(Number(e.target.value))}
                            />
                        </div>

                        {/* Table Heading */}
                        <div className={Styles.tableHeading}>
                            <label>Table Heading:</label>
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
                                        placeholder={`Header ${index + 1}`}
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
                                            placeholder={columnIndex === 0 ? 'Service Name' : `Value ${columnIndex}`}
                                            value={cellValue || ''}
                                            onChange={e => handleBodyInputChange(rowIndex, columnIndex, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}

                        {/* Add Row Button */}
                        <button className={Styles.plusBtn} onClick={addRow}>
                            +
                        </button>

                        {/* Submit Button */}
                        <button className={Styles.submitBtn} onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PriceManagement;
