import { Label, Field, Text, FieldSet, Select } from "./styled";
import { useState } from "react";
import { currencies } from "./currencies";
import Result from "./Result";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].code);
    const rate = currencies.find(({ code }) => code === currency).rate;

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(`${amount} ${currency}`);
    };

    return (
        <form onSubmit={onFormSubmit}>
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
                        <Select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option
                                    key={currency.code}
                                    value={currency.code}>
                                    {currency.name}
                                </option>
                            ))}
                        </Select>
                    </Label>
                </p>
            </FieldSet>
            <Result
                amount={amount}
                rate={rate}
                currency={currency}
            />
        </form>
    )
};

export default Form;