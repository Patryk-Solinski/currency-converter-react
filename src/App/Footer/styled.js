import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color:  ${({theme}) => theme.color.arapawa};
    color: ${({theme}) => theme.color.white};
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0 10px 0;
`;

export const Paragraph = styled.p`
    margin: 0;
    padding: 5px;
`;