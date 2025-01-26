import {useEffect, useState} from "react";
import {fetchPriceData} from "../http/priceManagement";


const useFetchPrices = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetchPriceData();
                setData(resp);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return {data, setData}
}

export default useFetchPrices;




