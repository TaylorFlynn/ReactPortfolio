import React, {useEffect} from 'react';
import styled from "styled-components";
import SectionHeading from './SectionHeading'
import { Break1300, Break768, Break480, Break320 } from '../responsive';
// import "../styles.css"
import "../index.css"

const PorfolioSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-items: center;
    text-align: center;
    max-width: 100vw;
    width: 100%;
    padding: 5rem 0;
    height: auto;
    background: transparent;
    box-sizing: border-box;
    h2{
        ${Break480({ 
        zIndex: 999, 
        cursor: "pointer", 
        position: "absolute", 
        top: "5%", right: "5%", 
        transform: "translate(5%, 20%)"
        })};
    };
`;
const PorfolioWapper = styled.div`
    width: 100%;
    column-count: auto;
    justify-content: center;
    align-items: center;
    height: auto;
    column-count: ${Math.floor(window.innerWidth* .78 / 300)};
    ${Break1300({ 
        gridTemplateColumns: "1fr 1fr"
    })};
    ${Break768({ 
        gridTemplateColumns: "1fr"
    })};
`;

const ProjectCard = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #030303;
    background: -webkit-linear-gradient(-225deg, #434343, #03030300);
    background: linear-gradient(-225deg, #434343, #03030300);
    transition: 0.3s ease-in;
    position: relative;
    width: 300px;
    border-radius: 10px;
    margin-top: 0px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 40px;
    page-break-inside: avoid;
    ${Break320({ 
            width: "90vw"
    })};
    
    img{
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
    .cardOverlay{
        height: 100%;
        width: 100%;
        background-color: transparent;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.15s cubic-bezier(1, -0.03, 0.28, 0.3);
        -webkit-transform: scale(1, 0);
        transform: scale(100%, 0%);
        border-radius: 9px;
        cursor: pointer;
    }
    :hover .cardOverlay{
        background: rgba(0, 0, 0, 0.85);
        -webkit-transform: scale(1, 1);
        transform: scale(100%, 100%);
    }
    :nth-child(2),
    :nth-child(4){
        ${Break1300({
            marginTop: "0px"
        })};
    }
`;

const ProjectCardDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ProjectTitle = styled.h2`
    text-align: center;
    font-size: 3.2rem;
    font-weight: 900;
    background: transparent;
    color: var(--secondary-color);
    background: -webkit-linear-gradient(
        225deg,
        var(--secondary-color-alt),
        var(--secondary-color)
    );
    background: linear-gradient(
        225deg,
        var(--secondary-color-alt),
        var(--secondary-color)
    );
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    background-clip: text;
    transition: 0.5s ease-in;
`;
const ProjectDescription = styled.div`
    margin: 12px 10px;
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    color: rgb(223, 223, 223);
`;
const ProjectStack = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;
const ProjectStackItem = styled.li`
    padding: 6px;
    color: rgb(167, 167, 167);
    list-style-type: none;
    font-size: 20px;
    position: relative;
    :after{
        display: flex;
        position: absolute;
        content: "";
        top: 15%;
        right: 0%;
        left: initial;
        height: 70%;
        width: 1px;
        background: white;
        }
    :last-of-type::after {
        display: none;
    }
`;
const ProjectButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const ProjectButton = styled.a`
    font-size: 1rem;
    width: 45%;
    height: 50px;
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: none;
    border: none;
    outline: none;
    color: #fff;
    background: #161616;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
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
        transition: all 0.2s;
        border-radius: 4px;
        ${Break768({ width: "100%", transition: "none"})};
    }
    :hover:after {
        width: 100%;
    }
    p {
        position: absolute;
        font-weight: 600;
        inset: 0%;
        z-index: 1;
    }
`;

const Projects = () => {
    useEffect(() => {
      window.addEventListener("resize", () => document.getElementById("port__wrapper").style.columnCount = Math.floor(window.innerWidth* .78 / 300))
    
    }, [])
    

  return (
    <PorfolioSection id="portfolio__section">
        <SectionHeading primary={"My"} span={"Work"}/>
        <PorfolioWapper id="port__wrapper">
            <ProjectCard>
                <img src="./assets/Solua_Frame.png" alt="Project_1" />
                <div className="cardOverlay">
                    <ProjectCardDetails>
                        <ProjectTitle>Solua</ProjectTitle>
                        <ProjectDescription> Fullstack Eccomerce Website </ProjectDescription>
                        <ProjectStack>
                            <ProjectStackItem>Styled Components</ProjectStackItem>
                            <ProjectStackItem>React</ProjectStackItem>
                            <ProjectStackItem>MongoDB</ProjectStackItem>
                            <ProjectStackItem>Redux</ProjectStackItem>
                            <ProjectStackItem>NodeJs</ProjectStackItem>
                            <ProjectStackItem>Stripe</ProjectStackItem>
                        </ProjectStack>
                        <ProjectDescription>See The</ProjectDescription>
                        <ProjectButtons>
                            <ProjectButton
                                href="https://github.com/TaylorFlynn/Solua"
                                target="_blank" rel="noreferrer"
                                ><p>Code</p>
                            </ProjectButton>
                            <ProjectButton
                                href="https://solua-skin.netlify.app"
                                target="_blank" rel="noreferrer"
                                ><p>Site</p>
                            </ProjectButton>
                        </ProjectButtons>
                    </ProjectCardDetails>
                </div>
            </ProjectCard>
            <ProjectCard>
                <img src="./assets/Campish_Frame.png" alt="Project_2" />
                <div className="cardOverlay">
                    <ProjectCardDetails>
                        <ProjectTitle>Campish</ProjectTitle>
                        <ProjectDescription> Fullstack GeoLocational CampSite-Organizer </ProjectDescription>
                        <ProjectStack>
                            <ProjectStackItem>EJS</ProjectStackItem>
                            <ProjectStackItem>MongoDB</ProjectStackItem>
                            <ProjectStackItem>Express</ProjectStackItem>
                            <ProjectStackItem>NodeJs</ProjectStackItem>
                            <ProjectStackItem>Mapbox</ProjectStackItem>
                            <ProjectStackItem>Helmet</ProjectStackItem>
                        </ProjectStack>
                        <ProjectDescription>See The</ProjectDescription>
                        <ProjectButtons>
                            <ProjectButton
                                href="https://github.com/TaylorFlynn/Campish"
                                target="_blank" rel="noreferrer"
                                ><p>Code</p>
                            </ProjectButton>
                            <ProjectButton
                                href="https://campish.herokuapp.com"
                                target="_blank" rel="noreferrer"
                                ><p>Site</p>
                            </ProjectButton>
                        </ProjectButtons>
                    </ProjectCardDetails>
                </div>
            </ProjectCard>
            <ProjectCard>
                <img src="./assets/CryptGaurd_Frame.png" alt="Project_3" />
                <div className="cardOverlay">
                    <ProjectCardDetails>
                        <ProjectTitle>CryptGaurd</ProjectTitle>
                        <ProjectDescription> Fullstack Chat Messaging App </ProjectDescription>
                        <ProjectStack>
                            <ProjectStackItem>React</ProjectStackItem>
                            <ProjectStackItem>GetStream</ProjectStackItem>
                            <ProjectStackItem>JWT</ProjectStackItem>
                            <ProjectStackItem>Crypto</ProjectStackItem>
                            <ProjectStackItem>Express</ProjectStackItem>
                            <ProjectStackItem>NodeJs</ProjectStackItem>
                        </ProjectStack>
                        <ProjectDescription>See The</ProjectDescription>
                        <ProjectButtons>
                            <ProjectButton
                                href="https://github.com/TaylorFlynn/CryptGaurd"
                                target="_blank" rel="noreferrer"
                                ><p>Code</p>
                            </ProjectButton>
                            <ProjectButton
                                href="https://cryptgaurd.netlify.app"
                                target="_blank" rel="noreferrer"
                                ><p>Site</p>
                            </ProjectButton>
                            </ProjectButtons>
                    </ProjectCardDetails>
                </div>
            </ProjectCard>
            <ProjectCard>
                <img src="./assets/Checklist_Frame.png" alt="Project_4" />
                <div className="cardOverlay">
                    <ProjectCardDetails>
                        <ProjectTitle>Mern-Checklist</ProjectTitle>
                        <ProjectDescription> FullStack Mern Checklist App </ProjectDescription>
                        <ProjectStack>
                            <ProjectStackItem>React</ProjectStackItem>
                            <ProjectStackItem>MongoDB</ProjectStackItem>
                            <ProjectStackItem>Express</ProjectStackItem>
                            <ProjectStackItem>NodeJs</ProjectStackItem>
                        </ProjectStack>
                        <ProjectDescription>See The</ProjectDescription>
                        <ProjectButtons>
                            <ProjectButton
                                href="https://github.com/TaylorFlynn/MernTodoApp"
                                target="_blank" rel="noreferrer"
                                ><p>Code</p>
                            </ProjectButton>
                            <ProjectButton
                                href="https://mern-checklist.netlify.app"
                                target="_blank" rel="noreferrer"
                                ><p>Site</p>
                            </ProjectButton>
                            </ProjectButtons>
                    </ProjectCardDetails>
                </div>
            </ProjectCard>
            <ProjectCard>
                <img src="./assets/OneFiveNine_Frame.png" alt="Project_5" />
                <div className="cardOverlay">
                    <ProjectCardDetails>
                        <ProjectTitle>One-Five-Nine</ProjectTitle>
                        <ProjectDescription> Fullstack Realtime 2-3 Player Board Game </ProjectDescription>
                        <ProjectStack>
                            <ProjectStackItem>React</ProjectStackItem>
                            <ProjectStackItem>MongoDB</ProjectStackItem>
                            <ProjectStackItem>NodeJs</ProjectStackItem>
                            <ProjectStackItem>Websockets</ProjectStackItem>
                            <ProjectStackItem>Mongoose</ProjectStackItem>
                        </ProjectStack>
                        <ProjectDescription>See The</ProjectDescription>
                        <ProjectButtons>
                            <ProjectButton
                                href="https://github.com/TaylorFlynn/OneFiveNine"
                                target="_blank" rel="noreferrer"
                                ><p>Code</p>
                            </ProjectButton>
                            <ProjectButton
                                href="https://one-five-nine.netlify.app"
                                target="_blank" rel="noreferrer"
                                ><p>Site</p>
                            </ProjectButton>
                        </ProjectButtons>
                    </ProjectCardDetails>
                </div>
            </ProjectCard>
            <ProjectCard>
                <img src="./assets/Portfolio_Frame.png" alt="Project_6" />
                <div className="cardOverlay">
                    <ProjectCardDetails>
                        <ProjectTitle>This Website</ProjectTitle>
                        <ProjectDescription> FrontEnd Static Personal Porfolio Site </ProjectDescription>
                        <ProjectStack>
                            <ProjectStackItem>React</ProjectStackItem>
                            <ProjectStackItem>StyledComponents</ProjectStackItem>
                            <ProjectStackItem>CoreJs</ProjectStackItem>
                        </ProjectStack>
                        <ProjectDescription>See The</ProjectDescription>
                        <ProjectButtons>
                            <ProjectButton
                                href="https://github.com/TaylorFlynn/TaylorRyanFlynn"
                                target="_blank" rel="noreferrer"
                                ><p>Code</p>
                            </ProjectButton>
                        </ProjectButtons>
                    </ProjectCardDetails>
                </div>
            </ProjectCard>
        </PorfolioWapper>
    </PorfolioSection>
  )
}

export default Projects