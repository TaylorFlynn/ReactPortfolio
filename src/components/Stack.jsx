import React from 'react';
import styled from "styled-components";
import SectionHeading from './SectionHeading';
import { Break768 } from '../responsive';
// import "../styles.css"
import "../index.css"

const StackSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  margin: 0;
  padding: 80px 0 40px 0;
  width: 100%;
  ${Break768({ 
        paddingTop: "80px"
    })};
`;
const StackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 5rem 0;
    ${Break768({ 
        width: "85%",
        paddingTop: 0,
    })};
`;
const StackIcons = styled.div`
    padding: 0 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    ${Break768({ 
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr"
    })};
`;
const StackIcon = styled.div`
  box-sizing: border-box;
  margin: 10px;
  height: 150px;
  width: 150px;
  margin-bottom: 100px;
  ${Break768({ 
        height: "auto",
        width: "auto",
        marginBottom: "10px"
    })};
`;
const StackImg = styled.img`
    height: 100%;
    width: 100%;
`


const Stack = () => {
  return (
    <StackSection id="stack__section">
        <SectionHeading primary={"My"} span={"Stack"}></SectionHeading>
        <StackWrapper>
            <StackIcons>
                <StackIcon>
                    <StackImg src="./assets/HTML.png" alt="html" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/Css.png" alt="Css" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/Javascript.png" alt="Javascript"/>
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/Mongo.png" alt="mongoDB" id="mongoDbIcon" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/IconNode.png" alt="NodeJs" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/React.png" alt="ReactJS" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/Mui.png" alt="Material UI" id="MaterialUiIcon"/>
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/Git.png" alt="Git" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/GitHub.png" alt="Github" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/Terminal.png" alt="Terminal" id="termianlIcon"/>
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/PS.png" alt="Adobe Photoshop" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/LR.png" alt="Adobe Lightroom" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/PR.png" alt="Adobe Premeir Pro" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/AI.png" alt="Adobe Illustrator" />
                </StackIcon>
                <StackIcon>
                    <StackImg src="./assets/MicrosoftOffice.png" alt="Microsoft Office"/>
                </StackIcon>
            </StackIcons>
        </StackWrapper>
    </StackSection>
  )
}

export default Stack