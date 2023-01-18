import "./style.css";
import currencies from "../Currencies/currencies.js";
import Result from "../Result";



const Form = () => {

    const onFormSubmit = (event) =>{
        event.preventDefault();
    }

    <form 
    className="form"
    onFormSubmit={onFormSubmit}
    >
        <fieldset className="form__fieldset">
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota do wymainy (PLN):
                    </span>
                    <input className="form__field" 

                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Waluta:</span>
                    <select className="form__field">

                        
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
};

export default Form;