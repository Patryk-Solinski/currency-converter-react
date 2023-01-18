import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";




const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");


const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`${amount} ${currency}`);
};

return (
<form className="form" onSubmit={onFormSubmit}>
    <fieldset className="form__fieldset">
        <p>
            <label>
                <span className="form__labelText">
                    Kwota do wymainy (PLN):
                </span>
                <input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    className="form__field"
                    type="number"
                    step="any"
                    min="1"
                    required
                />
            </label>
        </p>
        <p>
            <label>
                <span className="form__labelText">
                    Waluta:</span>
                <select 
                value={currency}
                onChange={({target})=> setCurrency(target.value)}
                className="form__field"
                >
                {currencies.map((currency)=>(
                    <option
                    key={currency.code}
                    value={currency.code}>
                        {currency.name}
                     </option>
                ))}
                    
                   
                </select>
            </label>
        </p>

    </fieldset>
    <div className="form__container">
        <button

            className="form__button "
            type="submit">
            Przelicz
        </button>
        <p className="form__paragraphResult "></p>
    </div>
</form>
)
};

export default Form;