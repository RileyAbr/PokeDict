import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

// Components
import Home from "./components/Home";
import Detail from "./components/Detail";

// The background box that contains the entire SPA
const Main = styled.main`
  min-height: 100vh;
  background-color: var(--bg-home-green);
  font-family: var(--font-standard);
  padding: 5px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Main>
          <Switch>
            <Route path="/pokemon/:name" component={Detail}></Route>
            <Route path="/home/:page" component={Home} exact></Route>
            <Route path="/home/:page/:searchValue" component={Home}></Route>
            <Route exact path="/">
              <Redirect to="home/1" />
            </Route>
            <Route path="*">
              <Redirect to="/home/1"></Redirect>
            </Route>
          </Switch>
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
