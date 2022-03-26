import { useState } from "react";
import styled from "styled-components";
import HexBackground from './components/HexBackgroundPure';
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  font-family: "Kumbh Sans", sans-serif;
`
const MainContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0%;
  left: 0%;
  right: 0%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  height: auto;
  background: transparent;
`



function App() {
  const [ResumePosition, setResumePosition] = useState("-115%")

  return (
    <AppWrapper id="app__wrapper" style={{scrollBehavior: "smooth"}}>
      <Navbar/>
      <HexBackground/>
      <Resume ResumePosition={ResumePosition} setResumePosition={setResumePosition}/>
      <MainContainer>
        <Landing/>
        <Projects/>
        <Stack/>
        <About setResumePosition={setResumePosition}/>
        <Contact/>
        <Footer/>
      </MainContainer>
    </AppWrapper>

  );
}

export default App;
