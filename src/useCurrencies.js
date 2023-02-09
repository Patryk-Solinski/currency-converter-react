import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrencies = () => {
    const [rates, setRates] = useState({
        date: null,
        rates: {},
        status: "loading",
    });
    
    useEffect(() => {
        const dataApi = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
        
                setRates({
                    rates: response.data.rates,
                    status: "success",
                });
            } catch (error) {
                setRates({
                    status: "error"
                });
            };
        };
        setTimeout(dataApi, 1000);
    },[]);
return rates;    
};






