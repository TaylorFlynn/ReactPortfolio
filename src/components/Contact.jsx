import React from 'react'
import styled from "styled-components";
import { Break1300, Break1100, Break820, Break768, Break480, Break320 } from '../responsive';

const ContactSection = styled.div `
  width: 100vw;
  height: 80vh;
  background: transparent;
  margin: 0;
  padding: 90px 0 0 0;
  ${Break768({ 
        height: "auto"
    })};
`
const ContactContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  height: 100%;
  width: 100vw;
  z-index: 1;
  padding: 0;
  ${Break820({ 
        padding: "0px"
    })};
  ${Break768({ 
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        alignItems: 'center',
        margin: 0,
        padding: '10px',
        maxWidth: '100vw',
        height: 'auto'
    })};
      ${Break480({ 
        padding: "0px"
    })};
`
const ContactContent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  max-width: 45%;
  padding-left: 5vw;
  ${Break768({ 
        minWidth: '90vw'
    })};
`
const ContactIconContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: 100px;
  width: 100%;
  background: transparent;
  ${Break1100({ 
        justifyContent: 'space-between'
    })};
  ${Break768({ 
            height: '75px'
    })};
`
const ContactIconContent = styled.p `
  display: flex;
  color: white;
  align-items: center;
  justify-content: flex-start;
  font-size: 28px;
  font-weight: 600;
  ${Break768({ 
      fontSize: '5vw',
      margin: 0
    })};
    ${Break480({ 
        minWidth: '100%',
        maxWidth: '100%',
        fontSize: '4vw',
        margin: 0
    })};
    &#email__link{
        font-size: 28px;
        letter-spacing: 0.1rem;
        ${Break1100({ 
            fontSize: '24px'
        })};
        &span{
            ${Break1100({
                fontSize: '2.15vw'
            })};
            ${Break768({
                fontSize: '4vw'
            })};
        }
    }
    &#linkdin__link{
        font-size: 20px;
        ${Break1300({ 
            fontSize: '18px'
        })};
        a{
            color: white;
            letter-spacing: 0.1rem;
            font-size: 28px;
            ${Break768({
                color: 'white',
                letterSpacing: '0.1rem',
                fontSize: '4vw'
            })};
        }
    }

`
const ContactIconImage = styled.img `
  box-sizing: border-box;
  height: 100px;
  width: 100px;
  padding: 10px;
  border-radius: 30%;
  margin-right: 50px;
  background: white;
  background: linear-gradient(to bottom, #4dff6b, #22e910);
  box-shadow: 0em 0em 20px #4dff6b, 0em 0em 5px #22e910, 0em 0em 5px #ffffff;
  ${Break1100({ 
          marginRight: '20px'
    })};
    ${Break768({ 
        boxSizing: 'border-box',
        height: '100px',
        width: '100px',
        padding: '10px',
        borderRadius: '30%',
        marginRight: '50px',
        background: 'linear-gradient(to bottom, #4dff6b, #22e910)',
        boxShadow: '0em 0em 20px #4dff6b, 0em 0em 5px #22e910, 0em 0em 5px #ffffff'
    })};
    ${Break480({ 
        marginRight: '20px',
        height: '85px',
        width: '85px'
    })};
    &#emailImg{
        background: linear-gradient(to bottom, #4ddbff, #1080e9);
        box-shadow: 0em 0em 20px #4ddbff, 0em 0em 5px #1080e9;
    }
    &#linkdinImg {
        background: linear-gradient(to bottom, #0066ff, #1026e9);
        box-shadow: 0em 0em 20px #0066ff, 0em 0em 5px #1026e9;
    }
`

const ContactFormContainer = styled.div `
    display: flex;
    text-align: center;
    justify-content: center;
    width: 40vw;
    height: auto;
    min-height: 100%;
    padding-right: 3vw;
    ${Break768({ 
        marginTop: '20px',
        width: '80vw',
        minHeight: '40vh',
        height: 'auto',
        paddingRight: '0px'
    })};
`
const ContactForm = styled.div `
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    &#card-2{
        background: rgb(31, 31, 31);
        ${Break768({ 
            background: 'transparent'
        })};
    }
`
const ContactFormInner = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 0px 50px;
    ${Break768({
        padding: '10px'
    })};
    ${Break480({
        padding: '0px'
    })};
`
const ContactFormHeader = styled.h2 `
    font-size: 42px;
    margin: 0;
    margin-top: 30px;
    ${Break320({
            fontSize: 'auto'
    })};
`
const ContactFormContent = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 25px;
    ${Break480({
        padding: '0px'
    })};
    input,
    textarea,
    button {
        box-sizing: border-box;
        font-family: "Kumbh Sans", sans-serif;
        padding: 0;
        margin: 0;
        height: 10%;
        width: 80%;
        border: 2px solid gray;
        outline: none;
        border-radius: 5px;
        padding: 0px 5px;
        min-height: 40px;
        ${Break768({
            borderWidth: '2px',
            borderRadius: '3px',
            resize: 'none',
            margin: '3px',
        })};
    }
    textarea {
        padding: 15px;
        height: auto;
        border: 2px solid transparent;
        box-sizing: border-box;
        ${Break768({
            padding: '5px',
            height: 'auto'
        })};
    }
    input::placeholder,
    textarea::placeholder,
    button {        
        font-family: "Kumbh Sans", sans-serif;
        font-weight: 700;
    }
    input:focus,
    textarea:focus,
    input:hover,
    textarea:hover {
    border: 2px solid rgb(0, 132, 255);
    }
    button {
        border: 2px solid white;
        :hover{
            border: 2px transparent;
            background: var(--primary-color-alt);
            background: -webkit-linear-gradient(
                -225deg,
                var(--primary-color),
                var(--primary-color-alt)
            );
            background: linear-gradient(
                -225deg,
                var(--primary-color),
                var(--primary-color-alt)
            );
            cursor: pointer;
        }
        ${Break768({
            border: '2px transparent',
            background: 'var(--primary-color-alt)',
            background: '-webkit-linear-gradient(-225deg, var(--primary-color), var(--primary-color-alt))',
            background: 'linear-gradient(-225deg,var(--primary-color),var(--primary-color-alt))',
        })};
    }
    input,
    textarea {
        ${Break480({
            margin: '3px',
            height: '20px',
            minHeight: '35px'
        })};
    }
    textarea {
        ${Break480({
            height: '100px',
        })};
    }
`




const Contact = () => {
  return (
    <ContactSection id="contact__section">
        <ContactContainer>
            <ContactContent>
                <ContactIconContainer>
                    <ContactIconContent>
                        <ContactIconImage src="./assets/Phone.png" alt="Phone" />
                        <span>(949) 874-1344</span>
                    </ContactIconContent>
                </ContactIconContainer>
                <ContactIconContainer>
                    <ContactIconContent id="email__link">
                        <ContactIconImage src="./assets/Email.png" alt="Email" id="emailImg" />
                        <span>TaylorFlynn@outlook.com</span>
                    </ContactIconContent>
                </ContactIconContainer>
                <ContactIconContainer>
                    <ContactIconContent id="linkdin__link">
                        <ContactIconImage src="./assets/Link.png" alt="Linkdin" id="linkdinImg" />
                        <a
                        href="https://www.linkedin.com/in/taylor-ryan-flynn/"
                        target="_blank"
                        rel="noreferrer"
                        >
                        Linkedin.com/in/taylor-ryan-flynn/</a>
                    </ContactIconContent>
                </ContactIconContainer>
            </ContactContent>
            <ContactFormContainer>
                <ContactForm id="card-2">
                    <ContactFormInner>
                        <ContactFormHeader>Send Me Something!</ContactFormHeader>
                            <ContactFormContent
                            target="_blank"
                            action="https://formsubmit.co/TaylorFlynnph@outlook.com"
                            method="POST"
                            >
                                <input
                                    type="text"
                                    inputMode="text"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                />
                                <input
                                    type="email"
                                    inputMode="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                />
                                <textarea
                                    placeholder="Your Message"
                                    name="message"
                                    rows="7"
                                    required
                                ></textarea>
                                <button type="submit">
                                    Send It!
                                </button>
                            </ContactFormContent>
                    </ContactFormInner>
                </ContactForm>
            </ContactFormContainer>
        </ContactContainer>
    </ContactSection>
  )
}

export default Contact