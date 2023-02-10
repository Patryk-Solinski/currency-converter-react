import { StyledFooter, Paragraph } from "./styled";

const Footer = ({ ratesData }) => (
    <StyledFooter>
        <Paragraph>
            Kursy walut pobierane są z Europejskiego Banku Centralnego z dn. {ratesData.date}
        </Paragraph>
    </StyledFooter>
);

export default Footer;