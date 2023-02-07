import { StyledResult } from "./styled";

const Result = ({ amount, rate, currency }) => {
    const result = amount / rate;

    return (
        <StyledResult>{result.toFixed(2)} {currency}</StyledResult >
    );
};

export default Result;