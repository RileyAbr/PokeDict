import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:page" component={Home}></Route>
        <Route path="/pokemon/:name" component={Detail}></Route>
        <Route path="/" component={Home} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
