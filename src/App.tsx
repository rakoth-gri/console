import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
// global styles
import GlobalStyle from "./global/global";
import { theme } from "./global/theme";
// constants
import { routes } from "./routes";
// custom components
import { Title } from "./global/global";
import { Layout } from "./components/Layout";
import ContextProvider from "./context/context";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContextProvider>
          <Layout>
            <Routes>
              {routes.map((route) => (
                <Route
                  path={route.path}
                  key={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </Layout>
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
