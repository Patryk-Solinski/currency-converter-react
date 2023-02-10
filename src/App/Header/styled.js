import styled from "styled-components";

export const StyledHeader = styled.header`
    text-align: center;
    color: ${({theme}) => theme.color.arapawa};
    font-weight: bold;
    font-size: 20px;
    padding-top: 20px;
`;

export const Title = styled.h1`
    border-bottom: 4px solid ${({theme}) => theme.color.orange};
    margin: 0;
`;
