import Form from "./Form";
import Footer from "./Footer";
import Header from "./Header";
import Clock from "./Clock";
import { Container } from "./Container/styled";

function App() {
  return (
    <Container>
      <Clock />
      <Header />
      <Form />
      <Footer />
    </Container>
  );
};

export default App;