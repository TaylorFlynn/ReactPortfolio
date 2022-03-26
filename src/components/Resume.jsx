import React from 'react';
import styled from "styled-components";
import { Break768 } from '../responsive';

const ResumeContainer = styled.div`
    background: rgb(41, 41, 41);
    object-fit: contain;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: ${props=> props.ResumePosition || "-115%"};
    z-index: 999;
    overflow: hidden;
    transition: left 0.6s cubic-bezier(1, -0.03, 0.28, 0.3);    
`;
const ResumeCloseButton = styled.div`
  height: 5vh;
  width: 5vh;
  background: transparent;
  display: flex;
  position: relative;
  cursor: pointer;
  :before,
  :after{
    position: absolute;
    content: "";
    height: 100%;
    width: 15%;
    background: white;
    transform: rotate(45deg);
    inset: 0% 50% 0% 50%;
  }
  :after{
    transform: rotate(-45deg);   
  }   
`;
const ResumeSection = styled.div`
    background: rgb(41, 41, 41);
    object-fit: contain;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 95vh;
    z-index: 999;
    overflow: hidden;
    transition: left 0.6s cubic-bezier(1, -0.03, 0.28, 0.3);
    ${Break768({ 
        height: "85vh"
    })};    
`;

const ResumeObject = styled.object`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  position: absolute;
  inset: initial;  
`;

const ResumeMessage = styled.h2`
    color: white;
    font-size: 6vh;
    text-align: center;
`;

const ResumeLink = styled.a`
    color: rgb(0, 68, 255);
    font-size: 55px;
    text-align: center;
    background: var(--secondary-color);
    background: -webkit-linear-gradient(
        to left,
        var(--secondary-color-alt),
        var(--secondary-color)
    );
    background: linear-gradient(
        to left,
        var(--secondary-color-alt),
        var(--secondary-color)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    background-size: 100%;
    font-size: 4vh;
    font-weight: 700;
`;


const Resume = ({ResumePosition, setResumePosition}) => {
    const hideResume= ()=>{
        console.log("hide")
        setResumePosition("-115%");
    }

    return (
        <ResumeContainer id="Resume__Container" ResumePosition={ResumePosition}>
            <ResumeCloseButton id="Resume__close_button" onClick={()=> hideResume()}></ResumeCloseButton>
            <ResumeSection>
                <ResumeObject data="./assets/TaylorRyanFlynn.pdf" type="application/pdf">
                    <ResumeMessage>
                    Your web browser doesn't seem to have a PDF plugin. Instead you
                    can
                    <ResumeLink
                        href="./assets/TaylorRyanFlynn.pdf"
                        download="TaylorRyanFlynn.pdf"
                        id="Resume__Download"
                        >click here to download the PDF file.</ResumeLink
                    >
                    </ResumeMessage>
                </ResumeObject>
            </ResumeSection>
        </ResumeContainer>
    )
}

export default Resume