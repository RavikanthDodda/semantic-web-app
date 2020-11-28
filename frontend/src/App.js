import "./App.css";
import HomePage from "./components/Pages/HomePage";
import { Container } from "react-bootstrap";

import DetailsPage from "./components/Pages/DetailsPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid="md">
          
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route
              path="/details"
              render={(props) => <DetailsPage {...props} />}
            />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
