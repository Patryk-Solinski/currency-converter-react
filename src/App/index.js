import Form from "./Form";
import Footer from "./Footer";
import Header from "./Header";
import Clock from "./Clock";
import { Container } from "./styled";
import { useCurrencies } from "../useCurrencies";

function App() {
  const ratesData = useCurrencies();
  
  return (
    <Container>
      <Clock />
      <Header />
      <Form  ratesData={ratesData}/>
      <Footer ratesData={ratesData}/>
    </Container>
  );
};

export default App;