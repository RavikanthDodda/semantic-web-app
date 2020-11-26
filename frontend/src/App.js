import "./App.css";
import Dropdown from "./components/DropdownMenu";
import HomePage from "./components/Pages/HomePage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid="md">
        <Dropdown />
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
