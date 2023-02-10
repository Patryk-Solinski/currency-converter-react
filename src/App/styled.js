import styled from "styled-components";

export const Container = styled.main`
    padding: 20px;
    background-color: ${({theme}) => theme.color.blueHaze};
    border-radius: 10px;
    max-width: 550px;
    text-align: center;
    margin: auto;
`;