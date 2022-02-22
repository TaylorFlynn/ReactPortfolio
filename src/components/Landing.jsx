import React from 'react';
import styled from "styled-components";
import SectionHeading from './SectionHeading'

const LandingSection = styled.div`
  position: relative;
  background: transparent;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 80px;
`
const LandingArea = styled.div`
  position: absolute;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  max-height: 90%;
  max-width: 1600px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
  /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: saturate(180%) blur(5px);
  background: #ffffff1d;
  border-radius: 10%;
  filter: blur(2px); */
`
const LandingButtons = styled.div`
  display: flex;
`
const LandingDescription = styled.p`
  font-size: 60px;
  background: #c7c7c7;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  margin: 0;
`

const LandingButton = styled.a`
  display: flex;
  font-size: 1rem;
  font-weight: 650;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
  height: 50px;
  width: 120px;
  border: none;
  outline: none;
  border-radius: 4px;
  background: transparent;
  transition: all 0.3s ease;
  margin-top: 2rem;
  position: relative;
  transition: all 0.35s;
  background: white;
  background: -webkit-linear-gradient(-45deg, #222222, #494949);
  background: linear-gradient(-45deg, #222222, #494949);
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  :hover{
    color: #fff;
    :after{
        width: 100%;
    }
    p{
      color: #000000;
    }
  }
  :after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #f6c388;
    background: -webkit-linear-gradient( -45deg, #3a2818, #f6c388);
    background: linear-gradient( -45deg, #3a2818, #f6c388 );
    transition: all 0.2s;
    border-radius: 4px;
  }

  p{
    color: #eec799;
    font-size: 1rem;
    font-weight: 700;
    z-index: 2;
    transition: all 0.35s;
  }
`

const Landing = () => {
  return (
    <LandingSection>
          <LandingArea>
            <SectionHeading primary={"Hey, I'm"} span={"Taylor"}/>
            <LandingDescription>Im A FullStack Web Developer.</LandingDescription>
            <LandingDescription>Heres Some Useful Links.</LandingDescription>
            <LandingButtons>
              <LandingButton href="#portfolio__section"><p>Projects</p></LandingButton>
              <LandingButton href="#stack__section"><p>My Stack</p></LandingButton>
              <LandingButton href="#about__section"><p>About</p></LandingButton>
              <LandingButton href="#contact__section"><p>Contact</p></LandingButton>
            </LandingButtons>
          </LandingArea>
        </LandingSection>
  )
}

export default Landing