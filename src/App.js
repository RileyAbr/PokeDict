import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { color, typography } from "styled-system";
import theme from "./theme";

// Components
import Home from "./components/Home";
import Detail from "./components/Detail";
import Footer from "./styled-components/Footer";

// Utilities Import
import { getCookieValue } from "./Utils";

// The background box that contains the entire SPA
const Main = styled.main`
  min-height: 100vh;
  ${color}
  ${typography}
  padding-bottom: 2.5rem;
`;

function App() {
  const [typeTheme, setTypeTheme] = useState(getCookieValue("type"));

  const pageTheme = { ...theme.colors, ...theme.colors.type[typeTheme] };
  theme.colors = pageTheme;

  const handleDetailNavigation = (type) => {
    setTypeTheme(type);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Main bg={"bg.primary"} fontFamily={"fontStandard"}>
          <Switch>
            <Route
              path="/pokemon/:name"
              render={() => (
                <Detail onDetailNavigation={handleDetailNavigation} />
              )}
            ></Route>
            <Route path="/home/:page" component={Home} exact></Route>
            <Route path="/home/:page/:searchValue" component={Home}></Route>
            <Route exact path="/">
              <Redirect to="home/1" />
            </Route>
            <Route path="*">
              <Redirect to="/home/1"></Redirect>
            </Route>
          </Switch>

          <Footer />
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
