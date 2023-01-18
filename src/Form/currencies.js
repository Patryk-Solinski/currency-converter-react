import "./style.css";
import currencies from "../Currencies";

function setCurrency(id) {
    console.log(`waluta: ${id}`);
}

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota do wymainy (PLN):
                    </span>
                    <input className="form__field" type="number" step="any" min="1" required />
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
                onClick={() => setCurrency(currencies.name)}
                className="form__button "
                type="submit">
                Przelicz
            </button>
            <p className="form__paragraphResult "></p>
        </div>
    </form>
);

export default Form;