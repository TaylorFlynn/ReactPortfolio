import styled from "styled-components";
import HexBackground from './components/HexBackground';
import Landing from './components/Landing'
import Navbar from './components/Navbar'

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  /* font-family: "Kumbh Sans", sans-serif; */
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
  background: transparent;
  overflow: hidden;
`



function App() {

  return (
    <AppWrapper id="app__wrapper" style={{scrollBehavior: "smooth"}}>
      <Navbar/>
      <HexBackground/>
      <MainContainer>
        <Landing/>
      </MainContainer>
    </AppWrapper>

  );
}

export default App;
