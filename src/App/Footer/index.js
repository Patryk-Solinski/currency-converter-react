import { StyledFooter,Paragraph } from "./styled";

const Footer = ({ratesData}) => (
    <StyledFooter>
        <Paragraph >
            EUR 4.7199 | USD 4.7477 | GBP 5.4733 | CHF 5.3451
        </Paragraph>
        <Paragraph>
            Kursy walut według średniego kursu NBP z dn. {ratesData.date}
        </Paragraph>
    </StyledFooter>
);

export default Footer;