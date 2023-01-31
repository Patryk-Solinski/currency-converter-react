import Form from "./Form";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Clock from "./Clock";

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