import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import Result from "../Result";





const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].code);
    const rate = currencies.find(({code})=> code === currency).rate;


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
                    step="0.01"
                    min="0.01"
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
        {/* <button

            className="form__button "
            type="submit">
            Przelicz
        </button> */}
        <Result 
        amount={amount}
        rate={rate}
        currency={currency}
        />
    </div>
</form>
)
};

export default Form;