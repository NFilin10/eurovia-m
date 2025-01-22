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
        const response = await axios.get('http://localhost:5000/get');
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

        return response.json(); // Assuming you want to return the response or any data from the API
    } catch (error) {
        console.error('Error updating service prices:', error);
        throw error;
    }
};

