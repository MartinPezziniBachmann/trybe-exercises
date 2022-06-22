import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import AddClients from "./pages/AddClients";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/clients/add-client" component={AddClients} />
        <Route path="/clients" component={Clients} />
      </Switch>
    </div>
  );
}

export default App;
