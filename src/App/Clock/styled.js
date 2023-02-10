import styled from "styled-components";

export const StyledClock = styled.p`
    font-family: 'Open Sans', sans-serif;
    text-align: end;
    margin: 0;
    padding: 10px;
    color:  ${({theme}) => theme.color.black};
    font-size: 14px
`;