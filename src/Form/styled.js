import styled from "styled-components";

export const Label = styled.label`
    display: grid;
    grid-gap: 5px;
    justify-content: center;
    grid-template-columns: 250px;
`;

export const Field = styled.input`
    padding: 3px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;
export const Select = styled.select`
    padding: 3px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const Text = styled.span`
 padding: 5px;
`;

export const FieldSet = styled.fieldset`
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 5px 5px 5px hsl(0, 0%, 60%);
    margin: 20px 0;
`;