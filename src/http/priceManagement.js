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