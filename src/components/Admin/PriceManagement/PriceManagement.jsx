import React, { useState } from 'react';
import Styles from './PriceManagement.module.css';

function PriceManagement() {
    const [columnNum, setColumnNum] = useState(0);
    const [headingInput, setHeadingInput] = useState('');
    const [headData, setHeadData] = useState([]);
    const [rows, setRows] = useState([]); // State to keep track of multiple rows
    const [showInputs, setShowInputs] = useState(false);


    console.log(rows)

    const handleSubmit = () => {
        setShowInputs(true); // Show inputs when the button is clicked
    };

    const addBodyInputs = () => {
        // Create a new row with the same number of columns and add it to the state
        setRows(prevRows => [
            ...prevRows,
            Array.from({ length: columnNum }).map(() => '') // Initialize an empty body for the new row
        ]);
    };

    const handleBodyInputChange = (rowIndex, columnIndex, value) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex][columnIndex] = value;
        setRows(updatedRows);
    };

    return (
        <div className={Styles.a}>
            <h1>Price management</h1>
            <div>Current</div>
            <div>
                <button onClick={handleSubmit}>Add new service</button>
                {showInputs && (
                    <div>
                        <div>
                            <p>Insert how many columns you need:</p>
                            <input
                                type="number"
                                value={columnNum}
                                onChange={e => setColumnNum(Number(e.target.value))}
                            />
                        </div>

                        <div>
                            <div>
                                <label>Heading</label>
                                <input
                                    type="text"
                                    value={headingInput}
                                    onChange={e => setHeadingInput(e.target.value)}
                                />
                            </div>

                            <div className={Styles.attrInputs}>
                                {Array.from({ length: columnNum }).map((_, index) => (
                                    <div key={index}>
                                        <input
                                            type="text"
                                            value={headData[index] || ''}
                                            onChange={e => {
                                                const updatedData = [...headData];
                                                updatedData[index] = e.target.value;
                                                setHeadData(updatedData);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button onClick={addBodyInputs}>+</button> {/* Plus button to add rows */}
                        </div>

                        {/* Render body rows */}
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className={Styles.attrInputs}>
                                {row.map((inputValue, columnIndex) => (
                                    <div key={columnIndex}>
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={e => handleBodyInputChange(rowIndex, columnIndex, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PriceManagement;
