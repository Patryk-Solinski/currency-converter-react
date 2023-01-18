const Result = ({amount, rate, currency}) => {
    const result = amount/rate;

return (
    <>
    {amount.toFixed(2)} PLN = <strong>{result.toFixed(2)} {currency} </strong>
    </>
);
};

export default Result;