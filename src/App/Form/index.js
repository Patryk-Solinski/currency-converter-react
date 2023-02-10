import { Label, Field, Text, FieldSet } from "./styled";
import { useState } from "react";

import Result from "./Result";

const Form = ({ ratesData }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    

    return (
        <form>
            <FieldSet>
                <p>
                    <Label>
                        <Text>
                            Kwota do wymainy (PLN):
                        </Text>
                        <Field
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            step="0.01"
                            min="0.01"
                            required
                        />
                    </Label>
                </p>
                <p>
                    <Label>
                        <Text>
                            Waluta:
                        </Text>
                        <Field
                            as="select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {Object.keys(ratesData.rates).map((rates => (
                                <option
                                    key={rates}
                                    value={rates}
                                >
                                    {rates}
                                </option>

                            )))}
                        </Field>
                    </Label>
                </p>
            </FieldSet>
            <Result
                amount={amount}
                rateData={ratesData.rates}
                currency={currency}
            />
        </form>
    )
};

export default Form;