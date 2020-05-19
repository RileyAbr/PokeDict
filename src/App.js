import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}></Route>
      <Route path="/pokemon/*" component={}></Route>
    </BrowserRouter>
  );
}

export default App;
