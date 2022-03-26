import React from 'react'
import styled from "styled-components";
import { Break768, Break480 } from '../responsive';
import { device } from '../device';


const FooterSection = styled.footer `
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 60px;
    position: sticky;
    bottom: 0%;
    @media ${device.tablet} { 
        height: auto
    } 
`
const FooterWrapper = styled.section `
  box-sizing: border-box;
  padding: 0px 10%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const FooterLogoContainer = styled.div `
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0em 0em 40px var(--primary-color),
    0em 0em 15px var(--primary-color-alt);
  ${Break768({ 
        margin: '0px'
    })};
  ${Break480({ 
        display: 'none'
    })};
`
const FooterLogoImage = styled.img `
    height: 65%;
    width: 65%;
    filter: invert(1);
`
const FooterCopyRights = styled.p `
    color: #fff;
    letter-spacing: 0.05rem;
    ${Break480({ 
        marginBottom: '2rem'
    })};
    ${Break768({ 
        margin: '0',
        marginLeft: '10px',
        fontSize: '2.4vw'
    })};
`

const Footer = () => {
  return (
    <FooterSection>
        <FooterWrapper>
            <FooterLogoContainer>
                <FooterLogoImage src="./assets/TFLOGO.png" alt="MyPersonalLogo" />
            </FooterLogoContainer>
            <FooterCopyRights>
                © Taylor Ryan Flynn 2022. All Rights Reserved
            </FooterCopyRights>
        </FooterWrapper>
    </FooterSection>
  )
}

export default Footer