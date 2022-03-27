import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
