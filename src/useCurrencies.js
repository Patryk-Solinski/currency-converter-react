import axios from "axios";


(async () => {
    try {
        const response = await axios.get ("https://api.exchangerate.host/latest?base=PLN");

        setRates ({
            rates: response.data.rates,
            status: "success",
        });
    }catch (error) {
        setRates({
            status: "error"
        });
    };
});
        

       
        
  