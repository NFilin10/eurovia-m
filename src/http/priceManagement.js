import axios from "axios";


export const sendPriceInfo = async (data) => {
    try {
        const response = await axios.post('http://localhost:5000/add', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Response:', response.data);
        alert('Data submitted successfully!');
    } catch (error) {
        console.error('Error submitting data:', error);
        alert('An error occurred while submitting the data.');
        console.log(error);
    }
}

export const fetchPriceData = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/get-prices');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

};

export const deleteService = async (serviceId) => {
    try {
        await axios.delete(`http://localhost:5000/delete-service/${serviceId}`);
    } catch (error) {
        console.error('Error deleting service:', error);
        throw error;
    }
};

export const updateService = async (serviceId, updatedPrices) => {
    try {
        const response = await fetch(`http://localhost:5000/update/${serviceId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPrices), // Sending the updated prices here
        });

        if (!response.ok) {
            throw new Error('Failed to update service prices');
        }

        return { status: response.status}; // Assuming you want to return the response or any data from the API
    } catch (error) {
        console.error('Error updating service prices:', error);
        throw error;
    }
};

export const sendPrice = async (data) => {
    try {
        const response = await fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json(); // Parse JSON only when status is OK
            console.log('Response JSON:', result);
            return { status: response.status, data: result }; // Return both status and data
        } else {
            const errorText = await response.text(); // Log error details if available
            console.error('Error response:', errorText);
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        console.error('Error adding price info:', error);
        throw error;
    }
};




