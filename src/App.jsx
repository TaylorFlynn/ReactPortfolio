import styled from "styled-components";
import HexBackground from './components/HexBackground';
import Landing from './components/Landing'
import Navbar from './components/Navbar'

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
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
  min-height: 100%;
  height: auto;
  background: transparent;
  overflow: hidden;
  overflow-y: scroll;
`



function App() {

  return (
    <AppWrapper id="app__wrapper" style={{scrollBehavior: "smooth"}}>
      <Navbar/>
      <HexBackground/>
      <MainContainer>
        <Landing/>
        <Landing/>
      </MainContainer>
    </AppWrapper>

  );
}

export default App;
