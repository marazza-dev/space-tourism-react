import React from "react";
import GlobalStyle from "./util/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Home, Destination, Technology, Crew } from "./pages";
import { theme } from "./util/theme.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/crew' element={<Crew />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
