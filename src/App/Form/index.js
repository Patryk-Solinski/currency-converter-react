import { Label, Field, Text, FieldSet } from "./styled";
import { useState } from "react";
import Result from "./Result";

const Form = ({ ratesData }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const rate = ratesData.rates[currency];
    const status = ratesData.status;

    if (["loading", "error"].includes(status)) {
        return (
            <p>
                <Label>
                    <Text>
                    {status === "loading" ?
                            "Ładujemy potrzebne dane 😁" :
                            `Przepraszamy, ale coś poszło nie tak😞 
                        Sprawdź połączenie z internetem, albo spróbuj później.`
                        }
                    </Text>
                </Label>
            </p>
        );
    };

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
                rate={rate}
                currency={currency}
            />
        </form>
    )
};

export default Form;