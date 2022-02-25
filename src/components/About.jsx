import React, {useState} from 'react';
import styled from "styled-components";
import SectionHeading from './SectionHeading';
import { Break1300, Break960, Break820, Break768, Break480 } from '../responsive';

const AboutSection = styled.section`
    box-sizing: border-box;
    background: transparent;
    margin: 0;
    padding: 80px 0 0 0;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
`;
const AboutOptions = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 25px 0 3vh 0;
    width: 60vw;
    ${Break820({ 
        width: "80vw"
    })};
`;
const AboutButton = styled.a`
    padding: none;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #fff;
    transition: all 0.3s ease;
    height: auto;
    text-align: center;
    font-size: max(3vw, 30px);
    width: 20vw;
    font-family: "Kumbh Sans", sans-serif;
    z-index: 1;
    cursor: pointer;
    text-decoration: none;
    ${Break820({ 
        width: "33%",
        flex: "1fr",
        fontSize: "4vw",
        fontWeight: 600,
        textAlign: "center",
    })};
`;
const AboutButtonHighlight = styled.div`
    justify-self: center;
    position: absolute;
    display: block;
    content: "";
    background: var(--secondary-color);
    background: -webkit-linear-gradient(
        -45deg,
        var(--secondary-color-alt),
        var(--secondary-color)
    );
    background: linear-gradient(
        -45deg,
        var(--secondary-color-alt),
        var(--secondary-color)
    );
    border-radius: 5px;
    height: 100%;
    width: 20vw;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    transition: all 0.75s cubic-bezier(1, -0.03, 0.28, 0.3);
    transform: ${props=> props.translate};
    ${Break820({
    width: "33.33%"
    })};
`;
const SlideContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300vw;
    height: 70vh;
    position: relative;
    margin-bottom: 10vh;
`;
const SlideWapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 300vw;
    height: 100%;
    transition: all 0.75s cubic-bezier(1, -0.03, 0.28, 0.3);
    transform: translateX(${props=> props.translate});
`;
const AboutContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100%;
    padding: 50px 3vw;
    ${Break1300({
        padding: "2vw"
    })};
    ${Break960({
        padding: "10px"
    })};
    ${Break820({
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "100vw",
        height: "100%",
        padding: "10px"
    })};

`;
const AboutImgContainer = styled.div`
    height: 100%;
    min-width: max(23vw, 400px);
    position: relative;
    :after{
        height: 100%;
        width: 100%;
        position: absolute;
        border-radius: 10px;
        content: "";
        background-color: transparent;
        display: block;
        top: 0;
        transition: all 0.2s ease-in-out;
        ${Break820({
            position: "absolute",
            top: "0%",
            content: "",
            background: "rgba(0, 0, 0, 0.5)",
        })};
    }
    :hover::after{
        background-color: rgba(0, 0, 0, 0.699);
    }

    ${Break820({
        position: "absolute",
        top: "0%",
        maxWidth: "95vw",
        minWidth: "initial"
    })};
`;
const AboutImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
`;
const AboutContent = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 100%;
    width: 100%;
    color: white;
    padding: 0px 50px;
    ${Break960({
        padding:"0px 10px"
    })};
    ${Break820({
        position: "absolute",
        top: "0%",
        height: "95%",
        maxWidth: "55vh",
        minWidth: "initial",
        padding: "0"
    })};
`;
const AboutContentUpper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    ${Break820({
        width: "90%",
        marginTop: "20px"
    })};
`;
const AboutHeader = styled.h2`
    margin: 10px;
    text-align: center;
    font-size: 3vh;
    ${Break820({
        fontSize: "3.5vh",
        margin: "3px"
    })};
    ${Break480({
        fontSize: "2.2vh",
        marginBottom: "10px"
    })};
`;
const AboutContentCenter = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    ${Break820({
        display: "flex",
        alignItems: "center",
    })};
`;
const AboutParagraph = styled.p`
    text-align: center;
    line-height: min(4vh, 2.7vw);
    font-size: min(2.7vh, 2.3vw);
    margin: 5px 0;
    ${Break820({
        width: "90%",
        lineHeight: "2.5vh",
        fontSize: "2.3vh",
        margin: "0",
    })};
    ${Break480({
        fontSize: "2.2vh",
        margin: "3px",
        marginBottom: "10px"
    })};
`;
const AboutContentLower = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ResumeButton = styled.button`
    display: flex;
    font-size: 1rem;
    font-weight: 650;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    height: 50px;
    width: 120px;
    border: none;
    outline: none;
    border-radius: 4px;
    background: 494949;
    background: -webkit-linear-gradient(-45deg, #222222, #494949);
    background: linear-gradient(-45deg, #222222, #494949);
    transition: all 0.3s ease;
    position: relative;
    outline: none;
    color: white;
    cursor: pointer;
    :after{
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
        ${Break768({
            width: "100%",
            transition: "none",
        })};
    }
    :hover:after{
          width: 100%;
    }
    p{
        z-index: 1;
    }
`;

const About = () => {
    const [HighlightPosition, setHighlightPosition] = useState("translateX(200%)")
    const [SlidePosition, setSlidePosition] = useState("100vw")
    const handleSlider = (e) => {
        if (e.target.id === "Professional") {
            setHighlightPosition("translateX(0%)");
            setSlidePosition("100vw");
        } else if (e.target.id === "Personal") {
            setHighlightPosition("translateX(100%)");
            setSlidePosition("0");

        } else if (e.target.id === "Education") {
            setHighlightPosition("translateX(200%)");
            setSlidePosition("-100vw")
        }
    }

    return (
        <AboutSection id="about__section">
            <SectionHeading primary={"About"} span={"Me"} marginBottom={0}/>
            <AboutOptions id="about__options">
                <AboutButton href="#about__section" id="Professional" onClick={ e => handleSlider(e)}>Professional</AboutButton>
                <AboutButton href="#about__section" id="Personal" onClick={(e)=> handleSlider(e)}>Personal</AboutButton>
                <AboutButton href="#about__section" id="Education"onClick={(e)=> handleSlider(e)}>Education</AboutButton>
                <AboutButtonHighlight translate={HighlightPosition} id="about__options__highlight"></AboutButtonHighlight>
            </AboutOptions>
            <SlideContainer>
                <SlideWapper id="slide__wrapper" translate={SlidePosition}>
                    <AboutContainer id="ProfessionalSlide">
                        <AboutImgContainer>
                            <AboutImg src="./assets/Professional.jpg" alt="" />
                        </AboutImgContainer>
                        <AboutContent>
                            <AboutContentUpper>
                                <AboutHeader>3D Modeling Lead</AboutHeader>
                                <AboutHeader>Stem Web Instructor</AboutHeader>
                                <AboutHeader>Board Game Developer</AboutHeader>
                            </AboutContentUpper>
                            <AboutContentCenter>
                                <AboutParagraph>
                                    My entire professional career has involved tech in some
                                    form, beginning with video game development, utilizing
                                    texturing, sculpting, Game engine, Modeling and 2d,
                                    softwares and Suites. This also gave me my first brush
                                    with scripting, later I acquired a role teaching stem
                                    students and fell in love with Program and Web
                                    Development. With A strong foundation of logic derived
                                    from Game Development and a newfound appreciation for
                                    programming i honed the 3D Curriculum and expanded my
                                    skillset in the process
                                </AboutParagraph>
                            </AboutContentCenter>
                            <AboutContentLower>
                                <ResumeButton id="Resume__open_button">
                                    <p>Full Resume</p>
                                </ResumeButton>
                            </AboutContentLower>
                        </AboutContent>
                    </AboutContainer>
                    <AboutContainer id="PersonalSlide">
                        <AboutImgContainer>
                            <AboutImg src="./assets/Personal.png" alt="" />
                        </AboutImgContainer>
                        <AboutContent>
                            <AboutContentUpper>
                                <AboutHeader>Capturing Photos</AboutHeader>
                                <AboutHeader>Climbing Rocks</AboutHeader>
                                <AboutHeader>Designing Games</AboutHeader>
                            </AboutContentUpper>
                            <AboutContentCenter>
                                <AboutParagraph>
                                    I have a vast array of personal hobbies, A few of them
                                    include: Photography and Videography, FPV Drone Racing and
                                    Cinematography, Competitive Gaming, and Martial Arts. I
                                    love the outdoors and adventure sports, especially rock
                                    climbing and snowboarding but, backpacking, camping, and
                                    white water rafting are also some personal favorites! When
                                    I'm not doing any of that I am most likely Learning a few
                                    languages(programming and spoken) or teaching myself piano
                                    and developing games!
                                </AboutParagraph>
                            </AboutContentCenter>
                            <AboutContentLower></AboutContentLower>
                        </AboutContent>
                    </AboutContainer>
                    <AboutContainer id="EducationSlide">
                        <AboutImgContainer>
                            <AboutImg src="./assets/Education.jpg" alt="" />
                        </AboutImgContainer>
                        <AboutContent>
                            <AboutContentUpper>
                                <AboutHeader>Bachelors Degree</AboutHeader>
                                <AboutHeader>Online Courses</AboutHeader>
                                <AboutHeader>Self Taught</AboutHeader>
                            </AboutContentUpper>
                            <AboutContentCenter>
                                <AboutParagraph>
                                    I received my Bachelors in Computer Science at The Art
                                    Institute of Orange County. Originally studying Game art
                                    and Design, which remains a passion of mine today. I
                                    quickly discovered i had a deep hunger for learning and
                                    complex problem solving and realized i thoroughly enjoyed
                                    programming for these reasons. During my time as an
                                    instructor i become more familiar with other forms of
                                    programming, mainly web development, so with an ample
                                    amount of free time thanks to C19 i began to supplement my
                                    journey with online courses and the academia of YouTube.
                                </AboutParagraph>
                            </AboutContentCenter>
                            <AboutContentLower></AboutContentLower>
                        </AboutContent>
                    </AboutContainer>
                </SlideWapper>
            </SlideContainer>
    </AboutSection>
    )
}

export default About