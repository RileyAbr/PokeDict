import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

// Components
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/pokemon/:name" component={Detail}></Route>
          <Route path="/home/:page" component={Home}></Route>
          <Route exact path="/">
            <Redirect to="home/1" />
          </Route>
          <Route path="*">
            <Redirect to="/home/1"></Redirect>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
