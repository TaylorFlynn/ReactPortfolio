import React, {useState, useEffect} from 'react'
import styled from "styled-components";

const HexWrapper = styled.section`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #cea679;
  background: linear-gradient(
    90deg,
    #5e311e,
    #cea679,
    #4b3c25,
    #cea679,
    #5e311e
  );
  z-index: -300;
  /* background: rgb(39, 255, 111); */
`
const BackdropOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #00000088 10%, #ffffff00, #00000088 90%);
  z-index: -150;
  :nth-of-type(2){
    position: absolute;
  top: 0%;
  background: radial-gradient(#05050500 55%, #0000008c);
  z-index: -50;
  }
`;

const HexagonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: transparent;
  inset: initial;
  z-index: -100;
  cursor: pointer;
  height: ${(props) => props?.HW+"px" || "60px"};
  width: ${(props) => props?.HW+"px" || "60px"};
  inset: "initial";
  top: ${(props) => props.topOffset+"px"};
  right: ${(props) => props.rightOffset};
`;

const HexagonContainer = styled.div`
  height: 100%;
  width: 57.75%;
  position: relative;
`;

const HexagonInner = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Hexagon = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props?.bgColor || "rgb(29, 29, 29)"};
  position: absolute;
  border-radius: 1px;
  ::after{
  width: 100%;
  height: 100%;
  background-color: ${(props) => props?.bgColor || "rgb(29, 29, 29)"};
  position: absolute;
  border-radius: 1px;
  content: "";
  display: block;
  inset: initial;
  transform: rotate(-60deg);
  }
  ::before{
  width: 100%;
  height: 100%;
  background-color: ${(props) => props?.bgColor || "rgb(29, 29, 29)"};
  position: absolute;
  border-radius: 1px;
  content: "";
  display: block;
  transform: rotate(60deg);
  inset: initial;
  }
`;

const MouseHighlight = styled.section`
  height: 70vmin;
  width: 70vmin;
  border-radius: 50%;
  position: absolute;
  inset: initial;
  top: 50%;
  left: 50%;
  background: radial-gradient(#e6b379, #ffffff00 70%);
  transform: translate(-50%, -50%);
  filter: blur(55px);
  z-index: -105;
  transition: all 0.1s ease;
`;
const PinLight = styled.section`
  /* width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  inset: initial;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px 5px #fff, 0 0 20px 10px #e9c287,
    0 0 35px 18px rgb(104, 66, 35);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 10px 5px #fff, 0 0 20px 10px #f0f, 0 0 35px 18px #0ff; */
`;


const HexBackground = () => {
  const getextra = () => (window.innerWidth * window.innerHeight) *.00001;
  const [Dimensions, setDimensions] = useState(60)
  
  useEffect(() => {
    window.addEventListener("resize", () => setDimensions(60 + getextra()))
    window.addEventListener("mousemove",  function(e){
      document.getElementById('MouseHighlight').style.left= `${e.clientX}px`;
      document.getElementById('MouseHighlight').style.top= `${e.clientY}px`;
      // document.getElementById('PinLight').style.left= `${e.clientX}px`;
      // document.getElementById('PinLight').style.top= `${e.clientY}px`;
    });
    setDimensions(60 + getextra())
  }, []);
  

  const Box = ({rowKey, colKey, HW, decorative}) => {
    const colOffset = colKey % 2 === 0 ? 1.04*HW/2 : 0;
    const RandomColor = ["rgb(49, 49, 49)", "rgb(42, 42, 42)",
    "rgb(37, 37, 37)",
    "transparent",]
    return (
      <HexagonBox HW={HW} className={`box row${rowKey} col${colKey}`}
      topOffset={rowKey * 1.04* HW + colOffset - HW/2}
      rightOffset={`calc(50vw - ${HW *.90  * colKey}px)`}>
        <HexagonContainer >
          <HexagonInner>
            <Hexagon bgColor={decorative ? `${RandomColor[Math.floor(Math.random() * 4)]}` : "rgb(29, 29, 29)"}/> 
          </HexagonInner>
        </HexagonContainer>
      </HexagonBox>
    )
  }
    
    const dimensions = Math.ceil(Dimensions)
    const columns = Math.floor(window.innerHeight / dimensions)
    const rows = Math.floor(window.innerWidth / dimensions *.60)
    const allHexes = []
    const extraHexes = []
    for (let i = rows * -1; i <= rows +1; i++) {
        const boxes = [];
        for (let j = -1 ; j <= columns +1; j++) {
        boxes.push(<Box rowKey= {j} colKey={i} key={`box right ${i} ${j}`} HW={dimensions}/>)
        if(j <= 3 || j >= columns - 2) extraHexes.push(<Box rowKey= {j} colKey={i} key={`DecHexCols ${i} ${j}`} HW={dimensions} decorative ={true}/>)
        if(i >= rows || i < rows * -1 + 2 ) extraHexes.push(<Box rowKey= {j} colKey={i} key={`DecHexRows ${i} ${j}`} HW={dimensions} decorative ={true}/>)      }
        allHexes.push(...boxes)
    }
  
    return (
      <HexWrapper>
          <BackgroundContainer>
            <BackdropOverlay/>
            <BackdropOverlay/>
            <MouseHighlight id="MouseHighlight"/>
            <PinLight id="PinLight"></PinLight>
            {allHexes}
            {extraHexes}
        </BackgroundContainer>
      </HexWrapper>
    )
}

export default HexBackground