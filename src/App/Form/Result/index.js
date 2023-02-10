import { StyledResult } from "./styled";

const Result = ({ rate, amount, currency }) => {
    const result = amount / rate;
    return (
        <StyledResult>{result.toFixed(2)} {currency}</StyledResult >
    );
};

export default Result;