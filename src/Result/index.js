
const Result = ({ amount, rate, currency }) => {
    const result = amount / rate;

    return (
        <p className="form__result">
        <>
            <strong>{result.toFixed(2)} {currency} </strong>
        </>
        </p>
    );
};

export default Result;