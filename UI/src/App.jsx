import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Video from "./pages/Video";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
    display: flex;
`;

const Main = styled.div`
    flex: 7;
    background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
    padding: 11px 36px;
`;

function App() {
  const [mode, setMode] = useState(true);

  // useEffect(() => {
  //   setMode(!mode);
  // }, [mode])

  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme} >
      <Container>
        <BrowserRouter>
          <Menu mode={mode} setMode={setMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video" >
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
