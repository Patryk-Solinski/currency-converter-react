import { useState } from "react";
import "./style.css";
// import currencies from "../Currencies";



const Form = () => {
    const [amount, setAmount] = useState("");


const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`${amount}`);
};

return(
<form className="form" onFormSubmit={onFormSubmit}>
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
                <select name="currency" className="form__field">
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                    <option value="CHF">CHF</option>
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