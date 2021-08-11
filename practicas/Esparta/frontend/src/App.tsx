import Header from "./components/Header"
import ApplicantTMO from "./components/ApplicantTMO"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/candidatos" component={ApplicantTMO} />
      </Switch>
    </Router>
  );
}

export default App;
