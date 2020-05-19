import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}></Route>
      <Route path="/pokemon/*" component={Detail}></Route>
    </BrowserRouter>
  );
}

export default App;
