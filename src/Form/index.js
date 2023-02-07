import { Label, Field, Text, FieldSet } from "./styled";
import { useState } from "react";
import { currencies } from "./currencies";
import Result from "./Result";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].code);
    const rate = currencies.find(({ code }) => code === currency).rate;

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
                            {currencies.map((currency) => (
                                <option
                                    key={currency.code}
                                    value={currency.code}>
                                    {currency.name}
                                </option>
                            ))}
                        </Field>
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