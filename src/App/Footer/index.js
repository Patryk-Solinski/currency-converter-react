import { StyledFooter, Paragraph } from "./styled";

const Footer = ({ ratesData }) => (
    <StyledFooter>
        <Paragraph>
            Kursy walut według średniego kursu NBP z dn. {ratesData.date}
        </Paragraph>
    </StyledFooter>
);

export default Footer;