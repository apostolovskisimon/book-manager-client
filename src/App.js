import {
  BrowserRouter as Router,
  Route,
  // Link,
  // useHistory,
  Switch,
} from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Nav } from "./Components/Nav/Nav";
import { Signup } from "./Components/Signup/Signup";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
